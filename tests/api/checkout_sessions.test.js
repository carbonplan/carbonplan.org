import handler from '../../pages/api/checkout_sessions'
import Stripe from 'stripe'
import { mockRequest, mockResponse } from './helpers'

jest.mock('stripe', () => jest.fn())

describe('api/checkout_sessions', () => {
  test('returns a 405 for non-POST requests', async () => {
    const req = mockRequest({ method: 'GET' })
    const res = mockResponse()

    await handler(req, res)

    expect(res.setHeader).toHaveBeenCalledWith('Allow', 'POST')
    expect(res.status).toHaveBeenCalledWith(405)
  })

  test('throws an error when invalid amount is received', async () => {
    const req = mockRequest({ body: { amount: 1 } })
    const res = mockResponse()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 500,
      message: 'Invalid amount.',
    })
  })

  test('throws an error when invalid amount is received', async () => {
    const req = mockRequest({ body: { amount: 4000 } })
    const res = mockResponse()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 500,
      message: 'Invalid amount.',
    })
  })

  test('throws an error when correct VERCEL_URL is not present', async () => {
    const req = mockRequest({ body: { amount: 20 } })
    const res = mockResponse()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 400,
      error: 'Missing Vercel URL',
    })
  })

  test('throws an error when correct VERCEL_URL is not present', async () => {
    const req = mockRequest({
      body: { amount: 20, vercel_url: 'some bad vercel_url' },
    })
    const res = mockResponse()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 400,
      error: 'Missing Vercel URL',
    })
  })

  describe('stripe request', () => {
    let requestBody
    let mockCreate
    const checkoutSession = { id: 'checkout_session_id' }
    beforeEach(() => {
      requestBody = { amount: 20, vercel_url: process.env.VERCEL_URL }
      mockCreate = jest.fn().mockResolvedValue(checkoutSession)
      Stripe.mockImplementation(() => ({
        checkout: {
          sessions: {
            create: mockCreate,
          },
        },
      }))
    })

    test('initializes Stripe with secret key', async () => {
      const req = mockRequest({ body: requestBody })
      const res = mockResponse()

      await handler(req, res)

      expect(Stripe).toHaveBeenCalledWith(process.env.STRIPE_SECRET_KEY)
    })

    test('passes expected parameters to checkoutSession creation request and returns session information', async () => {
      const req = mockRequest({ body: requestBody })
      const res = mockResponse()

      await handler(req, res)

      expect(mockCreate).toHaveBeenCalledWith({
        submit_type: 'donate',
        payment_method_types: ['card'],
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

    test('handles errors from checkoutSession creation', async () => {
      const req = mockRequest({ body: requestBody })
      const res = mockResponse()
      mockCreate = jest.fn().mockRejectedValue('Error')

      await handler(req, res)

      expect(res.status).toHaveBeenCalledWith(500)
      expect(res.json).toHaveBeenCalledWith({ statusCode: 500 })
    })
  })
})
