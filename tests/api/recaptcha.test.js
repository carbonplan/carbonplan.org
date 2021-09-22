import handler from '../../pages/api/recaptcha'
import { mockRequest, mockResponse } from './helpers'

test('returns a 405 for non-POST requests', async () => {
  const req = { method: 'GET' }
  const res = mockResponse()

  await handler(req, res)

  expect(res.status).toHaveBeenCalledWith(405)
})
