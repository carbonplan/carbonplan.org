import { Box, Styled, Text, Link } from 'theme-ui'
import { Layout } from '@carbonplan/components'

const FAQ = () => {
  return (
    <Layout links={'homepage'}>
      <Box sx={{ maxWidth: '700px', mb: [6] }}>
        <Text as='h1' variant='styles.h1' sx={{ mt: [4, 5, 5] }}>
          Terms
        </Text>
        <Styled.p>
          All code powering this website is{' '}
          <Link href='https://choosealicense.com/licenses/mit/'>MIT</Link>{' '}
          licensed and available on{' '}
          <Link href='https://github.com/carbonplan'>Github</Link>.
        </Styled.p>
        <Styled.p>
          Consistent with our charitable mission to build open tools and
          resources for the evaluation and deployment of carbon removal and
          other climate solutions, we aim to release models and datasets under
          maximally permissive licenses.
        </Styled.p>
        <Styled.p>
          We do request that you please provide attribution if reusing any of
          our digital content (graphics, logo, data, articles, etc.).
        </Styled.p>
        <Styled.p>
          Some of the data made available on parts of this website or through
          our APIs, such as our project reports, is sourced from content made
          available under a{' '}
          <Link href='https://choosealicense.com/licenses/cc-by-4.0/'>
            CC-BY
          </Link>{' '}
          license. We include attribution for this content, and we please
          request that you also maintain that attribution if using this data.
        </Styled.p>
        <Styled.p>
          We're just getting started and may change some of these terms in the
          future. Please check back here for updates.
        </Styled.p>
        <Styled.p>
          If you have any questions, please contact us at{' '}
          <Link href='mailto:hello@carbonplan.org'>hello@carbonplan.org</Link>.
        </Styled.p>
      </Box>
    </Layout>
  )
}

export default FAQ
