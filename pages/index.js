/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Card, Grid, Button } from 'theme-ui'
import Head from 'next/head'

export default function Index() {
  return (
    <div className='container'>
      <Head>
        <title>carbonplan</title>
        <meta name='google-site-verification' content='gV6IXRYI2iw66by7r5poh1-MmzOuxCfxwC0E5FjR5-M'/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        <link rel='icon' href='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/medium-black-circle_26ab.png'/>
      </Head>
      <div>
      <img sx={{ width: 1200 }} src="/logo-thin.svg" alt="logo" />
      </div>
      <Button>about</Button>
      <Button>reports</Button>
      <Button>tools</Button>
      <div>
      We aim to provide scientifically-grounded, unbiased, and transparent data and analytics on climate solutions.
      </div>

    </div>
  )
}