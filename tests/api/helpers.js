export const mockResponse = () => {
  const res = {}
  res.setHeader = jest.fn().mockReturnValue(res)
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  res.end = jest.fn().mockReturnValue(res)
  return res
}
export const mockRequest = ({ headers = {}, body = {}, method = 'POST' }) => {
  const req = {}
  req.headers = headers
  req.body = body
  req.method = method
  return req
}
