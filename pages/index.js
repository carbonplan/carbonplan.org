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
      <img className='logo' src="/logo.svg" alt="logo" />
      <p className='headline'>we're using science and data to help optimize the deploymemt of carbon removal</p>
      <a href='mailto:info@carbonplan.org'><p className='callout'>email us for more info</p></a>
      <p className='contact'>we're just getting started</p>
      <div id='left'></div>
      <div id='right'></div>
      <div id='top'></div>
      <div id='bottom'></div>
      <style jsx>{`
        .logo {
          width: calc(41vw);
        }

        .headline {
          font-size: 4.5em;
          width: 60%;
          margin-left: 20px;
        }

        .callout {
          display: inline-block;
          margin-left: 20px;
          padding-top: 18px;
          padding-bottom: 14px;
          padding-left: 26px;
          padding-right: 30px;
          font-size: 2.7em;
          color: rgb(255,255,255);
          background: rgb(35,31,32);
        }

        .contact {
          display: block;
          margin-top: 0px;
          margin-left: 15px;
          padding: 10px;
          font-size: 2.7em;
        }

        a {
          text-decoration: underline;
          color: rgb(93, 93, 93);
        }

        @media (min-width: 320px) and (max-width: 550px) {
          .logo {
            width: calc(70vw);
            margin-left: auto;
            margin-right: auto;
          }

          .headline {
            margin-left: auto;
            margin-right: auto;
            width: 70%;
          }

          .callout, .contact {
            margin-left: auto;
            margin-right: auto;
          }

          .contact {
            margin-bottom: 60px;
          }
        }

      `}</style>
      <style global jsx>{`
        body {
          background: rgb(240,240,240);
          font-family: 'LeagueSpartan';
          font-size: 0.7vw;
          color: rgb(93, 93, 93);
          padding-left: 100px;
          padding-right: 100px;
          padding-top: 80px;
          padding-bottom: 40px;
          margin: 0px auto;
        }

        @font-face {
          font-family: 'LeagueSpartan';
          src: url('/fonts/leaguespartan-bold.ttf');
        }

        @media (min-width: 320px) and (max-width: 575px) {
          body {
            margin: 0px auto;
            margin-top: calc(10vh);
            padding: 0px;
            text-align: center;
            font-size: 1.75vw;
          }
        }

      `}</style>
    </div>
  )
}