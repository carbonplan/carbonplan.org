import { useState, useEffect, memo } from 'react'
import { Box, Themed, Text, Link } from 'theme-ui'
import { loadStripe } from '@stripe/stripe-js'
import { Layout, Row, Column, Guide, Buttons } from '@carbonplan/components'
import Heading from '../components/heading'

const { ArrowButton } = Buttons

const stripePromise = loadStripe(
  'pk_live_51IhKHNKRZDalHX4oADxXmtkSTQ45IlEKSQsr1fJPysjRPs3EZcm0u5CoqPF3QVqTHVygaFjhx7n2CTPdpFlwCuy800vm5I5c8j'
)

const priceIds = {
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

const Amount = ({ value, color, onClick }) => {
  return (
    <Box
      as='button'
      onClick={(e) => onClick(e, value)}
      sx={{
        mt: [3, 3, 3, 4],
        mb: [0, 0, 0, 0],
        textDecoration: 'none',
        display: 'block',
        width: 'fit-content',
        bg: 'transparent',
        border: 'none',
        color: 'primary',
        p: [0],
        cursor: 'pointer',
      }}
    >
      <ArrowButton
        size={'xl'}
        label={'$' + value}
        fill={color}
        sx={{ py: [1, 1, 2, 2], mb: [3, 3, 3, 3] }}
      />
    </Box>
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
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: priceIds[price],
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: 'https://redesign.carbonplan.org/thanks',
        cancelUrl: 'https://redesign.carbonplan.org/donate',
      })
    } catch (err) {
      console.log(err)
      setStatus('error')
      setTimeout(() => {
        setStatus(null)
      }, 500)
    }
  }

  return (
    <Layout links={'homepage'} title={'donate / carbonplan'} status={status}>
      <Guide />
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
