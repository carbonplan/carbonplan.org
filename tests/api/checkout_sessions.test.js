import handler from '../../pages/api/checkout_sessions'
import Stripe from 'stripe'
import { mockRequest, mockResponse } from './helpers'

jest.mock('stripe', () => jest.fn())

describe('api/checkout_sessions', () => {
  let mockRequestBody
  let mockCreate
  let fetchMock

  const checkoutSession = { id: 'checkout_session_id' }
  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch')
    fetchMock.mockResolvedValue({
      json: jest.fn().mockResolvedValue({ success: true }),
    })
    mockRequestBody = { amount: 20, recaptcha: 'recaptcha_response' }
    mockCreate = jest.fn().mockResolvedValue(checkoutSession)
    Stripe.mockImplementation(() => ({
      checkout: {
        sessions: {
          create: mockCreate,
        },
      },
    }))
  })

  it('returns a 405 for non-POST requests', async () => {
    const req = mockRequest({ method: 'GET' })
    const res = mockResponse()

    await handler(req, res)

    expect(res.setHeader).toHaveBeenCalledWith('Allow', 'POST')
    expect(res.status).toHaveBeenCalledWith(405)
  })

  describe('recaptcha validation', () => {
    it('returns a 400 before validating when recaptcha is not provided', async () => {
      const req = mockRequest({ body: { amount: 100 } })
      const res = mockResponse()

      await handler(req, res)

      expect(fetch).toHaveBeenCalledTimes(0)
      expect(res.status).toHaveBeenCalledWith(400)
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 400,
        message: 'Recaptcha failed',
      })
    })

    it('makes expected request to Google recaptcha API', async () => {
      const req = mockRequest({ body: { recaptcha: 'recaptcha_response' } })
      const res = mockResponse()

      await handler(req, res)

      expect(fetch).toHaveBeenCalledTimes(1)
      expect(fetch).toHaveBeenCalledWith(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=recaptcha_response`,
        expect.anything()
      )
    })

    it('returns a 400 when recaptcha is not successful', async () => {
      fetchMock.mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          success: false,
          'error-codes': ['invalid-input-response'],
        }),
      })

      const req = mockRequest({ body: { recaptcha: 'recaptcha_response' } })
      const res = mockResponse()

      await handler(req, res)

      expect(res.status).toHaveBeenCalledWith(400)
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 400,
        message: 'Recaptcha failed',
      })
    })

    it('handles errors', async () => {
      fetchMock.mockRejectedValue(new Error('Test message'))

      const req = mockRequest({ body: { recaptcha: 'recaptcha_response' } })
      const res = mockResponse()

      await handler(req, res)

      expect(res.status).toHaveBeenCalledWith(500)
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 500,
        message: 'Test message',
      })
    })
  })

  describe('session creation', () => {
    it('throws an error when amount <5 is received', async () => {
      const req = mockRequest({
        body: { recaptcha: 'recaptcha_response', amount: 1 },
      })
      const res = mockResponse()

      await handler(req, res)

      expect(res.status).toHaveBeenCalledWith(400)
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 400,
        message: 'Invalid amount',
      })
    })

    it('throws an error when amount >999 is received', async () => {
      const req = mockRequest({
        body: { recaptcha: 'recaptcha_response', amount: 4000 },
      })
      const res = mockResponse()

      await handler(req, res)

      expect(res.status).toHaveBeenCalledWith(400)
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 400,
        message: 'Invalid amount',
      })
    })

    it('rate limits requests to <10 per ip per hour', async () => {
      const mockIp = '127.0.0.1'
      const expectedStatuses = [...Array(9).fill(200), 429]

      for (const status of expectedStatuses) {
        const req = mockRequest({
          headers: { 'x-forwarded-for': mockIp },
          body: mockRequestBody,
        })
        const res = mockResponse()

        await handler(req, res)

        expect(res.status).toHaveBeenCalledWith(status)
      }
    })

    describe('stripe request', () => {
      it('initializes Stripe with secret key', async () => {
        const req = mockRequest({ body: mockRequestBody })
        const res = mockResponse()

        await handler(req, res)

        expect(Stripe).toHaveBeenCalledWith(process.env.STRIPE_SECRET_KEY)
      })

      it('passes expected parameters to checkoutSession creation request and returns session information', async () => {
        const req = mockRequest({ body: mockRequestBody })
        const res = mockResponse()

        await handler(req, res)

        expect(mockCreate).toHaveBeenCalledWith({
          submit_type: 'donate',
          payment_method_types: ['card'],
          billing_address_collection: 'required',
          line_items: [
            {
              name: 'Donation',
              description: 'Donation to CarbonPlan',
              amount: 2000,
              currency: 'usd',
              quantity: 1,
            },
          ],
          success_url: 'https://carbonplan.org/thanks',
          cancel_url: 'https://carbonplan.org/donate',
        })
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith(checkoutSession)
      })

      it('handles errors from checkoutSession creation', async () => {
        const req = mockRequest({ body: mockRequestBody })
        const res = mockResponse()
        mockCreate = jest.fn().mockRejectedValue('Error')

        await handler(req, res)

        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({ statusCode: 500 })
      })
    })
  })
})
