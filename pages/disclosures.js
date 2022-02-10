import { Box, Themed } from 'theme-ui'
import { Layout, Row, Column, Link, Heading } from '@carbonplan/components'

const Disclosures = () => {
  return (
    <Layout
      links={'homepage'}
      title={'Disclosures – CarbonPlan'}
      description={
        'State-specific disclosures for nonprofit organizations soliciting contributions.'
      }
    >
      <Heading>Disclosures</Heading>
      <Row>
        <Column start={[2, 2, 3, 3]} width={[5, 5, 6, 6]}>
          <Box
            sx={{
              fontSize: [3, 3, 3, 4],
              fontFamily: 'body',
              lineHeight: 'body',
              letterSpacing: 'body',
            }}
          >
            Certain states require written disclosures for nonprofit
            organizations soliciting contributions. The following are
            state-specific fundraising disclosure statements and/or instructions
            for how to obtain additional information.
          </Box>
          <br />
          <Box
            sx={{
              fontSize: [3, 3, 3, 4],
              fontFamily: 'body',
              lineHeight: 'body',
              letterSpacing: 'body',
            }}
          >
            REGISTRATION WITH A STATE AGENCY DOES NOT CONSTITUTE OR IMPLY
            ENDORSEMENT, APPROVAL OR RECOMMENDATION BY THAT STATE.
          </Box>
          <br />
          <Box
            sx={{
              fontSize: [3, 3, 3, 4],
              fontFamily: 'body',
              lineHeight: 'body',
              letterSpacing: 'body',
            }}
          >
            Follow these links for more information about{' '}
            <Link href='http://www.labyrinthinc.com/charity-resources/nonprofit-regulations/fundraising-disclosure-statements/'>
              nonprofit disclosures statements
            </Link>{' '}
            and{' '}
            <Link href='http://www.labyrinthinc.com/charity-resources/annual-charitable-state-registrations/charity-solicitation-registration-white-paper/'>
              nonprofit solicitation registration
            </Link>
            .
          </Box>
        </Column>
      </Row>
      <Label>Florida</Label>
      <Content>
        A COPY OF THE OFFICIAL REGISTRATION AND FINANCIAL INFORMATION MAY BE
        OBTAINED FROM THE DIVISION OF CONSUMER SERVICES BY CALLING TOLL-FREE,
        WITHIN THE STATE, 1-800-435-7352 (800-HELP-FLA), OR VISITING
        www.FloridaConsumerHelp.com. REGISTRATION DOES NOT IMPLY ENDORSEMENT,
        APPROVAL, OR RECOMMENDATION BY THE STATE. Florida Registration #CH65294.
      </Content>
      <Label>Georgia</Label>
      <Content>
        A full and fair description of our programs and our financial statement
        summary is available upon request at our office and phone number
        indicated above.
      </Content>
      <Label>New York</Label>
      <Content>
        Upon request, from the Attorney General's Charities Bureau, 28 Liberty
        Street, New York, NY 10005, 1-212-416-8686 or{' '}
        <Link href='https://www.charitiesnys.com'>www.charitiesnys.com</Link>.
      </Content>
      <Label>Washington</Label>
      <Content>
        From the Secretary of State at 1-800-332-4483 or{' '}
        <Link href='http://www.sos.wa.gov/charities/'>
          http://www.sos.wa.gov/charities/
        </Link>
        .
      </Content>
    </Layout>
  )
}

function Label({ children, first = false }) {
  return (
    <Row>
      <Column start={[1, 2]} width={[6, 6]}>
        <Box
          as='h2'
          variant='styles.h2'
          sx={{ mt: first ? [0, 0, 0, 0] : [4, 5, 6, 7], mb: [3, 4, 5, 6] }}
        >
          {children}
        </Box>
      </Column>
    </Row>
  )
}

function Content({ children }) {
  return (
    <Row>
      <Column start={[2, 3]} width={[5, 5, 6, 6]}>
        <Themed.p>{children}</Themed.p>
      </Column>
    </Row>
  )
}

export default Disclosures
