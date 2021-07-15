import { useCallback, useState } from 'react'
import { Box, Link, Text } from 'theme-ui'
import { loadStripe } from '@stripe/stripe-js'
import {
  FadeIn,
  Layout,
  Row,
  Column,
  Button,
  Input,
} from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'
import Heading from '../components/heading'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const TESTMODE_PRICE_IDS = {
  10: 'price_1IiDHKKRZDalHX4oRO6aOVBQ',
  20: 'price_1Ii9onKRZDalHX4oTTINKF9F',
  50: 'price_1Ii9onKRZDalHX4o644Sf3ro',
  100: 'price_1Ii9onKRZDalHX4o9ovB5nOl',
}
const LIVEMODE_PRICE_IDS = {
  10: 'price_1Ij9WVKRZDalHX4o4iM4LUVM',
  20: 'price_1Ij9WVKRZDalHX4oAcqS2EY7',
  50: 'price_1Ij9WVKRZDalHX4oq3aKRZle',
  100: 'price_1Ij9WVKRZDalHX4ouFFcEsR2',
}

const Sidenote = () => {
  return (
    <span>
      Looking to make a larger donation?{' '}
      <Link href='mailto:hello@carbonplan.org'>Email us</Link>.
    </span>
  )
}

const sx = {
  details: {
    color: 'secondary',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    fontSize: [1, 1, 1, 2],
  },
  bordered: {
    borderStyle: 'solid',
    borderColor: 'muted',
    borderWidth: '0px',
    borderTopWidth: '1px',
    pt: [2],
    pb: [5, 5, 0, 0],
  },
}

const formatAmount = (amount) =>
  amount
    ? `$${Number(amount).toLocaleString('en-US', { maximumFractionDigits: 0 })}`
    : ''

const getMessage = (amount) => {
  let message
  if (Number(amount) < 1) {
    message = 'Enter a custom donation amount.'
  } else if (Number(amount > 999)) {
    message = (
      <span>
        <Link href='mailto:hello@carbonplan.org' sx={{ color: 'teal' }}>
          Email us
        </Link>{' '}
        if you're interested in making a larger donation.
      </span>
    )
  }
  return message
}

const CustomAmount = ({ color, onClick }) => {
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState(null)

  const handleChange = useCallback((e) => {
    const normalizedAmount = e.target.value.replace(/\D/g, '')
    setAmount(normalizedAmount)

    if (!getMessage(normalizedAmount) || !normalizedAmount) {
      setMessage(null)
    }
  }, [])

  const validate = useCallback(
    (showForEmptyString) => {
      const helpMessage = getMessage(amount)
      if ((amount || showForEmptyString) && helpMessage) {
        setMessage(helpMessage)
      }
    },
    [amount]
  )

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        validate(true)
        onClick(amount)
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          width: '70%',
          mt: [3, 3, 3, 4],
        }}
      >
        <Input
          size='xl'
          value={formatAmount(amount)}
          onChange={handleChange}
          onBlur={() => validate(false)}
          placeholder='$'
        />
      </Box>

      <Button
        aria-label='Donate custom amount'
        size='xl'
        suffix={<RotatingArrow sx={{ color }} />}
        sx={{
          ml: ['12px', '16px', '18px', '20px'], // to match xl Button suffix margin
          display: 'inline-block',
        }}
      />
      {message && (
        <FadeIn>
          <Text sx={{ color: 'teal' }}>{message}</Text>
        </FadeIn>
      )}
    </form>
  )
}

const Amount = ({ value, color, onClick }) => {
  return (
    <Button
      onClick={(e) => onClick(e, value)}
      size='xl'
      suffix={<RotatingArrow sx={{ color: color }} />}
      sx={{ py: [1, 1, 2, 2], mt: [3, 3, 3, 4], mb: [3, 3, 3, 3] }}
    >
      {'$' + value}
    </Button>
  )
}

const Donate = () => {
  const [status, setStatus] = useState(null)

  const onClick = async (event, price) => {
    setStatus('processing')
    setTimeout(() => {
      setStatus(null)
    }, 1200)
    const stripe = await stripePromise
    try {
      const priceIds =
        process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
          ? LIVEMODE_PRICE_IDS
          : TESTMODE_PRICE_IDS
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: priceIds[price],
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: 'https://carbonplan.org/thanks',
        cancelUrl: 'https://carbonplan.org/donate',
      })
    } catch (err) {
      console.log(err)
      setStatus('error')
      setTimeout(() => {
        setStatus(null)
      }, 500)
    }
  }

  const onClickCustom = async (amount) => {
    try {
      // Create a CheckoutSession with the specified amount
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ amount }),
      })
      const checkoutSession = await response.json()

      if (checkoutSession.statusCode === 500) {
        throw new Error(checkoutSession.message)
      } else {
        const stripe = await stripePromise
        // Redirect to created CheckoutSession
        const { error } = await stripe.redirectToCheckout({
          sessionId: checkoutSession.id,
        })
        console.warn(error.message)
      }
    } catch (err) {
      console.warn(err)
      setStatus('error')
      setTimeout(() => {
        setStatus(null)
      }, 500)
    }
  }

  return (
    <Layout links={'homepage'} title={'donate / carbonplan'} status={status}>
      <Box sx={{ mb: [8, 8, 9, 10] }}>
        <Heading sidenote={<Sidenote />}>Donate</Heading>
        <Row>
          <Column
            start={[1, 1, 2, 2]}
            width={[6, 6, 6, 6]}
            sx={{ mb: [5, 6, 7, 8] }}
          >
            <Box
              sx={{
                fontSize: [3, 3, 3, 4],
                fontFamily: 'body',
                lineHeight: 'body',
                letterSpacing: 'body',
              }}
            >
              Thank you so much for considering supporting our work. Your
              donation will help us make progress on our mission, with complete
              commitment and responsibility to the public’s interest in a safe
              and stable climate. Our team will do our best to do right by your
              generosity.
            </Box>
          </Column>
        </Row>
        <Row>
          <Column start={[1, 2]} width={[6, 4]}>
            <Box
              as='h2'
              variant='styles.h2'
              sx={{ mt: [0, 0, 0, 0], mb: [3, 4, 5, 6] }}
            >
              Select an amount
            </Box>
          </Column>
        </Row>
        <Row sx={{ mt: [1], mb: [-1] }}>
          <Column start={[1, 2, 4, 4]} width={[3, 3, 3, 3]}>
            <Amount value={10} color='red' onClick={onClick} />
          </Column>
          <Column start={[4, 5, 7, 7]} width={[3, 3, 4, 3]} dr={0.5}>
            <Amount value={50} color='yellow' onClick={onClick} />
          </Column>
          <Column start={[1, 2, 4, 4]} width={[3, 3, 3, 3]}>
            <Amount value={20} color='orange' onClick={onClick} />
          </Column>
          <Column start={[4, 5, 7, 7]} width={[3, 3, 4, 3]} dr={0.5}>
            <Amount value={100} color='green' onClick={onClick} />
          </Column>
          <Column start={[1, 2, 4, 4]} width={[6, 6, 6, 6]}>
            <CustomAmount color='teal' onClick={onClickCustom} />
          </Column>
        </Row>
        <Row sx={{ mt: [5, 6, 7, 8] }}>
          <Column start={[1, 2]} width={[5, 3]}>
            <Box
              sx={{
                fontSize: [2, 2, 2, 3],
                color: 'secondary',
                ...sx.bordered,
              }}
            >
              Your gift is tax-deductible to the full extent provided by law.
              Payment services provided through Stripe. All major credit cards
              as well as Apple Pay and Google Pay are accepted.
            </Box>
          </Column>
          <Column start={[1, 7]} width={[4, 4]}>
            <Row columns={[4]}>
              <Column start={[1]} width={[2]}>
                <Box sx={{ ...sx.details, ...sx.bordered }}>
                  Legal name: <br /> carbonplan
                </Box>
              </Column>
              <Column start={[3]} width={[2]}>
                <Box sx={{ ...sx.details, ...sx.bordered }}>
                  EIN #: <br /> 84-4378880
                </Box>
              </Column>
            </Row>
            <Row columns={[4]}>
              <Column start={[1]} width={[4]}>
                <Box sx={{ ...sx.details, ...sx.bordered, mt: [0, 0, 4, 5] }}>
                  Mailing address: <br />
                  2443 Fillmore St{' '}
                  <Box as='br' sx={{ display: ['initial', 'none'] }} />
                  #380-6048 <br />
                  San Francisco, CA 94115
                </Box>
              </Column>
            </Row>
          </Column>
        </Row>
      </Box>
    </Layout>
  )
}

export default Donate
