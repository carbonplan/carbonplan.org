export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { response } = req.body
    try {
      const result = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${response}`,
        {
          method: 'POST',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          referrerPolicy: 'no-referrer',
        }
      )
      const {
        success,
        challenge_ts,
        'error-codes': errorCodes,
      } = await result.json()
      if (success) {
        res.status(200).json({ challenge_ts })
      } else {
        console.warn('recaptcha failed', errorCodes)
        res.status(400).json({ statusCode: 400, message: 'Recaptcha failed' })
      }
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
