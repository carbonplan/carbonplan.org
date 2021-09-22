export const mockResponse = () => {
  const res = {}
  res.setHeader = jest.fn().mockReturnValue(res)
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  res.end = jest.fn().mockReturnValue(res)
  return res
}
export const mockRequest = ({
  headers = { 'x-forwarded-for': Math.random() }, // randomize header used for IP rate-limiting
  body = {},
  method = 'POST',
}) => {
  const req = {}
  req.headers = headers
  req.body = body
  req.method = method
  return req
}
