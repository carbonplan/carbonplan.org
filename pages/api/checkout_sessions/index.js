import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const MIN_AMOUNT = 1
const MAX_AMOUNT = 999
const CURRENCY = 'usd'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const amount = req.body.amount
    try {
      // Validate the amount that was passed from the client.
      if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
        throw new Error('Invalid amount.')
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
