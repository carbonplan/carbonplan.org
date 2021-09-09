import Stripe from 'stripe'
import rateLimit from '../../../utils/rate-limit'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const MIN_AMOUNT = 1
const MAX_AMOUNT = 999
const CURRENCY = 'usd'

const limiter = rateLimit({
  interval: 60 * 60 * 1000, // 60 minutes
  uniqueTokenPerInterval: 100, // Max 100 users per hour
})

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log('rate limiting by ip', req.headers['x-forwarded-for'])

      await limiter.check(res, 10, req.headers['x-forwarded-for']) // 10 requests per hour per IP
    } catch {
      res.status(429).json({ statusCode: 429, error: 'Rate limit exceeded' })
      return
    }

    const amount = req.body.amount
    try {
      // Validate the amount that was passed from the client.
      if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
        throw new Error('Invalid amount.')
      }

      if (req.headers['x-vercel-deployment-url'] !== process.env.VERCEL_URL) {
        console.log('header', req.headers['x-vercel-deployment-url'])
        console.log('env variable', process.env.VERCEL_URL)
        throw new Error('Missing Vercel header')
      }
      // Create Checkout Sessions from body params.
      const params = {
        submit_type: 'donate',
        payment_method_types: ['card'],
        line_items: [
          {
            name: 'Donation',
            description: 'Donation to CarbonPlan',
            amount: amount * 100, // Stripe accepts amount in cents
            currency: CURRENCY,
            quantity: 1,
          },
        ],
        success_url: 'https://carbonplan.org/thanks',
        cancel_url: 'https://carbonplan.org/donate',
      }
      const checkoutSession = await stripe.checkout.sessions.create(params)
      res.status(200).json(checkoutSession)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
