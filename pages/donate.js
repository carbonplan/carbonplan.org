import { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Link } from 'theme-ui'
import { loadStripe } from '@stripe/stripe-js'
import ReCAPTCHA from 'react-google-recaptcha'
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

// Specific errors expected and the corresponding `status` passed to `Layout`
const ERRORS = [
  { message: 'Failed Recaptcha', status: 'not available' },
  { message: 'Rate limited', status: 'not available' },
]

const Sidenote = () => {
  return (
    <span>
      Looking to donate $1000 or more? Want to donate stock?{' '}
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
    pt: ['9px'],
  },
  bordered: {
    borderStyle: 'solid',
    borderColor: 'muted',
    borderWidth: '0px',
    borderTopWidth: '1px',
    pt: [2],
    pb: [5, 5, 0, 0],
  },
  link: {
    color: 'secondary',
    transition: 'color 0.15s',
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        color: 'primary',
      },
    },
    '@media (hover: none) and (pointer: coarse)': {
      '&:hover': {
        color: 'secondary',
      },
    },
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
  } else if (Number(amount) < 5) {
    message = 'Enter a donation amount of at least $5.'
  } else if (Number(amount > 999)) {
    message = (
      <span>
        <Link href='mailto:hello@carbonplan.org' sx={{ color: 'teal' }}>
          Email us
        </Link>{' '}
        for a donation of $1000 or more.
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

      return !helpMessage
    },
    [amount]
  )

  return (
    <Box
      as='form'
      onSubmit={(e) => {
        e.preventDefault()
        const valid = validate(true)
        if (valid) onClick(amount)
      }}
      sx={{ mb: [2, 2, 2, 3] }}
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
          sx={{ py: [0] }}
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
      <Box sx={{ minHeight: '50px' }}>
        {message && (
          <FadeIn>
            <Box sx={{ color: 'teal', pt: [1, 1, 2, 3], maxWidth: ['70%'] }}>
              {message}
            </Box>
          </FadeIn>
        )}
      </Box>
    </Box>
  )
}

const Amount = ({ value, color, onClick }) => {
  return (
    <Button
      onClick={(e) => onClick(value)}
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
  const [recaptchaCount, setRecaptchaCount] = useState(0)
  const recaptchaRef = useRef()

  useEffect(() => {
    recaptchaRef.current.reset()
  }, [recaptchaCount])

  const onClick = async (amount) => {
    setStatus('processing')
    setTimeout(() => {
      setStatus((prevStatus) =>
        prevStatus === 'processing' ? null : prevStatus
      )
    }, 1200)

    const token = await recaptchaRef.current.executeAsync()

    try {
      // Submit recaptcha
      const recaptchaResponse = await fetch('/api/recaptcha', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ response: token }),
      })

      const recaptcha = await recaptchaResponse.json()

      // Show error and return if recaptcha was not successful
      if (recaptcha.statusCode === 400) {
        throw new Error(ERRORS[0].message)
      }

      // Create a CheckoutSession with the specified amount
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
          amount,
          vercel_url: process.env.NEXT_PUBLIC_VERCEL_URL,
        }),
      })
      const checkoutSession = await response.json()

      if (checkoutSession.statusCode === 500) {
        throw new Error(checkoutSession.message)
      } else if (checkoutSession.statusCode === 429) {
        throw new Error(ERRORS[1].message)
      } else {
        const stripe = await stripePromise
        // Redirect to created CheckoutSession
        setStatus(null)
        const { error } = await stripe.redirectToCheckout({
          sessionId: checkoutSession.id,
        })
        throw new Error(error.message)
      }
    } catch (err) {
      console.warn(err)
      setRecaptchaCount((prev) => prev + 1)

      const errorObj = ERRORS.find((error) => error.message === err?.message)
      setStatus(errorObj?.status || 'error')
      setTimeout(() => {
        setStatus(null)
      }, 3000)
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
              generosity. .
            </Box>
          </Column>
        </Row>
        <Row>
          <Column start={[1, 2]} width={[6, 5]}>
            <Box
              as='h2'
              variant='styles.h2'
              sx={{ mt: [0, 0, 0, 0], mb: [3, 4, 5, 6] }}
            >
              Select or enter an amount
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
          <Column start={[1, 2, 4, 4]} width={[6, 5, 5, 5]}>
            <CustomAmount color='teal' onClick={onClick} />
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
              as well as Apple Pay and Google Pay are accepted. This site is
              protected by reCAPTCHA and the Google{' '}
              <Link href='https://policies.google.com/privacy' sx={sx.link}>
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href='https://policies.google.com/terms' sx={sx.link}>
                Terms of Service
              </Link>{' '}
              apply. Please see our state-specific fundraising{' '}
              <Link href='/disclosures' sx={sx.link}>
                disclosures
              </Link>
              .
            </Box>
          </Column>
          <Column start={[1, 7]} width={[4, 4]}>
            <Row columns={[4]}>
              <Column start={[1]} width={[2]}>
                <Box sx={{ ...sx.bordered, ...sx.details }}>
                  Legal name: <br /> carbonplan
                </Box>
              </Column>
              <Column start={[3]} width={[2]}>
                <Box sx={{ ...sx.bordered, ...sx.details }}>
                  EIN #: <br /> 84-4378880
                </Box>
              </Column>
            </Row>
            <Row columns={[4]}>
              <Column start={[1]} width={[4]}>
                <Box sx={{ ...sx.bordered, ...sx.details, mt: [0, 0, 4, 5] }}>
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
      <ReCAPTCHA
        style={{ visibility: 'hidden' }}
        ref={recaptchaRef}
        size='invisible'
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      />
    </Layout>
  )
}

export default Donate
