import handler from '../../pages/api/recaptcha'
import { mockRequest, mockResponse } from './helpers'

describe('api/recaptcha', () => {
  let fetchMock
  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch')
    fetchMock.mockResolvedValue({
      json: jest.fn().mockResolvedValue({ success: true }),
    })
  })

  it('returns a 405 for non-POST requests', async () => {
    const req = { method: 'GET' }
    const res = mockResponse()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(405)
  })

  it('makes expected request to Google recaptcha API', async () => {
    const req = mockRequest({ body: { response: 'recaptcha_response' } })
    const res = mockResponse()

    await handler(req, res)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=recaptcha_response`,
      expect.anything()
    )
  })

  it('returns a 200 when recaptcha is successful', async () => {
    const req = mockRequest({ body: { response: 'recaptcha_response' } })
    const res = mockResponse()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
  })

  it('returns a 400 when recaptcha is not successful', async () => {
    fetchMock.mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        success: false,
        'error-codes': ['invalid-input-response'],
      }),
    })

    const req = mockRequest({ body: { response: 'recaptcha_response' } })
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

    const req = mockRequest({ body: { response: 'recaptcha_response' } })
    const res = mockResponse()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      statusCode: 500,
      message: 'Test message',
    })
  })
})
