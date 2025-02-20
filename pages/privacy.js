import { Box } from 'theme-ui'
import { Layout, Row, Column, Link, Heading } from '@carbonplan/components'

const Privacy = () => {
  return (
    <Layout
      links={'homepage'}
      title={'Privacy – CarbonPlan'}
      description={
        'Privacy Policy that explains our information collection, use, and sharing practices.'
      }
    >
      <Heading>CarbonPlan Privacy Policy</Heading>
      <Row>
        <Column start={[1, 2, 3, 3]} width={[6, 5, 6, 6]}>
          <Box
            sx={{
              fontSize: [3, 3, 3, 4],
              fontFamily: 'body',
              lineHeight: 'body',
              letterSpacing: 'body',
            }}
          >
            <Box as='p' variant='styles.p'>
              Updated as of February 20, 2025
            </Box>
            <Box as='p' variant='styles.p'>
              This Privacy Policy (“Policy”) explains the information
              collection, use, and sharing practices of CarbonPlan, a California
              nonprofit corporation (“CarbonPlan,” “we,” “our,” or “us”). This
              Policy is expressly incorporated into and part of the CarbonPlan
              Terms of Use (“Terms of Use”) located at{' '}
              <Link href='https://carbonplan.org/terms'>
                https://carbonplan.org/terms
              </Link>
              . Unless otherwise noted on a particular website or service hosted
              by CarbonPlan, this Policy describes and governs the information
              collection, use, and sharing practices of CarbonPlan with respect
              to your use of our https://carbonplan.org domain and all
              subdomains thereof and our Github account
              (https://github.com/carbonplan) (collectively, the “Websites”),
              and the content, data, software, products, functionality, and/or
              services we provide through our Websites (together with the
              Websites, the “Services”) Please note that this policy does{' '}
              <b>not</b> apply to the CDRXIV service (https://cdrxiv.org)
              operated by CarbonPlan, which is governed by its own terms and
              privacy policy. Before you use or submit any information through
              or in connection with the Services, please carefully review this
              Privacy Policy. By using any part of the Services, you understand
              that your information will be collected, used, and disclosed as
              outlined in this Privacy Policy. IF YOU DO NOT AGREE TO THIS
              PRIVACY POLICY, PLEASE DO NOT USE THE SERVICES.
            </Box>
            <Box as='h2' variant='styles.h2'>
              01 — Our principles
            </Box>
            <Box as='p' variant='styles.p'>
              CarbonPlan has designed this policy to be consistent with the
              following principles:
            </Box>
            <ul>
              <li>
                Privacy policies should be human readable and easy to find.
              </li>
              <li>
                Data collection, storage, and processing should be simplified as
                much as possible to enhance security, ensure consistency, and
                make the practices easy for users to understand.
              </li>
              <li>
                Data practices should meet the reasonable expectations of users.
              </li>
            </ul>

            <Box as='h2' variant='styles.h2'>
              02 — Information we collect
            </Box>
            <Box as='p' variant='styles.p'>
              We collect information in multiple ways, including when you
              provide information directly to us; when we passively collect
              information from you, such as from your browser or device; and
              from third parties.
            </Box>
            <Box as='h3' variant='styles.h3'>
              Information you provide directly to us
            </Box>
            <Box as='p' variant='styles.p'>
              We will collect any information you provide to us. We may collect
              information from you in a variety of ways, such as when you: (a)
              create an online account, (b) submit, post, or otherwise share
              Content (as defined in our Terms of Use) on or through any of the
              Services, (c) make a donation or purchase, (d) participate in or
              register for our online or in-person meetings, events, or
              discussion fora, (e) apply for a job with us, (f) contact us or
              provide feedback, or (g) interact with our Github repository. This
              information may include but is not limited to your first and last
              name, email address, phone number, mailing address, geographic
              location, content, code, data, feedback, institutional
              affiliation, social media,and if you apply for a job with us your
              qualifications and experience, and employment history. We may also
              collect additional information about you in connection with our
              conferences and events (e.g., dietary and other preferences), and
              the provision of this information to us by you is optional.
            </Box>
            <Box as='h3' variant='styles.h3'>
              Information that is automatically collected
            </Box>

            <Box as='p' variant='styles.p'>
              <i>Device/Usage information</i>
            </Box>
            <Box as='p' variant='styles.p'>
              We, and our third-party service providers, may automatically
              collect certain information about the computer or devices
              (including mobile devices or tablets) you use to access the
              Services. As described further below, we may collect and analyze
              (a) device information such as your screen size, operating system,
              browser type, IP address, and device location; and (b) information
              related to the ways in which you interact with the Services, such
              as referring and exit web pages and URLs, search and submission
              history, pages and content viewed and the order of those pages,
              statistical information about the use of the Services, the date
              and time you used the Services, the frequency of your use of the
              Services, error logs, and other similar information. As described
              further below, we may use third-party analytics providers and
              technologies, including cookies and similar tools, to assist in
              collecting this information.
            </Box>
            <Box as='p' variant='styles.p'>
              <i>Cookies and other tracking technologies</i>
            </Box>
            <Box as='p' variant='styles.p'>
              CarbonPlan does not set any direct cookies but our third-party
              service providers (which allow us to receive donations, and
              newsletter sign-ups, for example) collect data about your use of
              the Services through the use of Internet server logs and online
              tracking technologies, including cookies and/or tracking pixels. A
              web server log is a file where website activity is stored. A
              cookie is a small text file that is placed on your computer when
              you visit a website, and in some cases when you receive an email,
              that enables us and/or our service providers to: (a) recognize
              your computer; (b) store your preferences and settings; (c)
              understand the web pages of the Services you have visited and the
              referral sites that have led you to our Services; (d) perform
              searches and analytics; and (e) assist with security,
              authentication, and other administrative functions. Tracking
              pixels (sometimes referred to as web beacons or clear GIFs) are
              tiny electronic tags with a unique identifier embedded in
              websites, online ads and/or email, that are designed to provide
              usage information like impressions or clicks, measure popularity
              of the Services and associated advertising or content, and to
              access user cookies.
            </Box>
            <Box as='p' variant='styles.p'>
              These are examples of the sources of cookies and/or tracking
              pixels used on our site:
            </Box>
            <ul>
              <li>
                We use Plausible for analytics, which minimizes use of cookies:
                https://plausible.io/data-policy.
              </li>
              <li>
                If you sign up for or receive our email newsletter, Mailchimp
                uses cookies and/or tracking pixels, including via sign-up form
                on our website, and to recognize when recipients have opened an
                email or clicked certain links. These technologies record
                information including your form submissions, email address, IP
                address, date, and time associated with each open and click.
                More information about the cookies used by Mailchimp can be
                found here: https://mailchimp.com/legal/cookies.
              </li>
              <li>
                If you choose to visit our job openings page, it is hosted at
                workable.com, whose cookie disclosure and list are available at
                https://www.workable.com/cookies and
                https://www.workable.com/cookies-list, respectively.
              </li>
              <li>
                If you choose to donate money through our Website, you will be
                directed to our payment processor, Stripe, who will use cookies
                as described in their cookie policy:
                https://stripe.com/legal/cookies-policy and cookie settings:
                https://stripe.com/cookie-settings.
              </li>
              <li>
                We use Google reCAPTCHA to fight spam and abuse on the Services,
                which may set cookies. Your use of reCAPTCHA is subject to
                Google’s{' '}
                <Link href='https://policies.google.com/privacy?hl=en-US'>
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href='https://policies.google.com/terms?hl=en-US'>
                  Terms of Use
                </Link>
                . Their cookies policy is available at:
                https://policies.google.com/technologies/cookies.
              </li>
              <li>
                If you view content from our Github page, then Github will set
                cookies while you use their site, as described in their privacy
                policy:
                https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
                and in their cookies disclosure:
                https://github.com/privacy/cookies.
              </li>
            </ul>
            <Box as='p' variant='styles.p'>
              Please note that you can change your settings to notify you when a
              cookie is being set or updated, or to block cookies altogether.
              Please consult the “Help” section of your browser for more
              information (e.g.,{' '}
              <Link href='http://windows.microsoft.com/en-US/windows-vista/Block-or-allow-cookies'>
                Internet Explorer
              </Link>
              ;{' '}
              <Link href='https://support.google.com/chrome/answer/95647?hl=en'>
                Google Chrome
              </Link>
              ;{' '}
              <Link href='http://kb.mozillazine.org/Cookies#Firefox'>
                Mozilla Firefox
              </Link>
              ; or{' '}
              <Link href='http://support.apple.com/kb/PH5042'>
                Apple Safari
              </Link>
              ). By blocking any or all cookies, you may not have access to
              certain features or offerings of the Services.
            </Box>

            <Box as='h3' variant='styles.h3'>
              Information we collect from third parties
            </Box>
            <Box as='p' variant='styles.p'>
              We may also collect information about you or others through third
              parties, including public sources, social media platforms,
              academic journals or databases (including databases automatically
              provided by our recruiting platform service Workable), and event
              registration platforms if you sign up for an event. Depending on
              the source, this information collected from third parties could
              include name, contact information, demographic information,
              information about an individual’s employment history, social media
              content, and information for other fraud or safety protection
              purposes.
            </Box>

            <Box as='h3' variant='styles.h3'>
              Information that third parties collect in connection with the
              services
            </Box>
            <Box as='p' variant='styles.p'>
              Our third-party service and hosting providers may collect
              information about you or others through or in connection with your
              use of the Services, including as described in their own terms and
              privacy policies, and as described in the “Information that Is
              Automatically Collected” section above.
            </Box>
            <Box as='p' variant='styles.p'>
              For example, our newsletter provider Mailchimp will collect
              information you submit to the newsletter sign-up form on our
              website, and information related to emails you receive, including
              as discussed above concerning cookies and tracking technologies,
              and in Mailchimp’s terms and privacy policy
              (https://www.intuit.com/privacy/statement/;
              https://mailchimp.com/legal/terms/).
            </Box>
            <Box as='p' variant='styles.p'>
              We use Workable, an online application provided by Workable
              Software Limited, to assist with our employee recruitment process.
              We use Workable to process personal information as a data
              processor on our behalf. Workable is only entitled to process your
              personal data in accordance with our instructions. Workable may
              retain your personal data and may also collect data from us in
              respect of the progress of your application. Any use by Workable
              of your data will be in accordance with their privacy policy
              (https://www.workable.com/privacy).
            </Box>
            <Box as='p' variant='styles.p'>
              Our donation processor, Stripe, will collect information you
              submit to them in accordance with their terms and privacy policy
              (https://stripe.com/legal/consumer; https://stripe.com/privacy),
              and if you choose to pay via Stripe’s Link service, also in
              accordance with the Link terms and privacy policy
              (https://link.com/terms; https://link.com/privacy).
            </Box>
            <Box as='p' variant='styles.p'>
              As discussed above, we use Google reCAPTCHA to fight spam and
              abuse on the Services; your use of reCAPTCHA is subject to
              Google’s Privacy Policy and Terms of Use. Similarly, your use of
              all third-party services, whether or not offered through the
              Services, is subject to that third party’s terms and privacy
              policies, including without limitation Github.
            </Box>
            <Box as='p' variant='styles.p'>
              We use Plausible (https://plausible.io/privacy) for analytics;
              they handle the data they collect in accordance with their data
              policy: https://plausible.io/data-policy.
            </Box>
            <Box as='h2' variant='styles.h2'>
              03 — How we use your information
            </Box>
            <Box as='p' variant='styles.p'>
              We may use the information we collect from and about you to:
            </Box>
            <ul>
              <li>Fulfill the purposes for which you provided it;</li>
              <li>Publish Your Content, as defined in our Terms of Use;</li>
              <li>
                Provide and improve the Services, including to develop new
                features or services, promote community collaboration, take
                steps to secure the Services, and for technical and customer
                support;
              </li>
              <li>
                Fundraise, accept donations, or process purchases of
                merchandise.
              </li>
              <li>
                Host in-person or virtual events, programs, and discussions;
              </li>
              <li>
                Send you information about your relationship or transactions
                with us, account alerts, or other communications, such as
                newsletters to which you have subscribed;
              </li>
              <li>
                Process and respond to your inquiries or to request your
                feedback;
              </li>
              <li>
                Conduct analytics, research, and reporting, including to
                synthesize and derive insights from your use of our Services;
              </li>
              <li>
                Evaluate job candidates in respect of a role for which you have
                applied, to consider your application in respect of other roles,
                to communicate with you in respect of the recruitment process,
                to enhance information that we receive from you with information
                obtained from third-party providers, and to help our service
                providers (such as Workable and its processors and data
                providers) and partners (such as the job sites through which you
                may have applied) improve and develop their services (including
                the use of aggregate data). In order to use their service,
                Workable requires us to let you know that we may use Workable’s
                technology to select appropriate candidates for us to consider
                based on criteria expressly identified by us, or typical in
                relation to the role for which you have applied. The process of
                finding suitable candidates is automatic, however, any decision
                as to who we will engage to fill the job opening will be made by
                our staff;
              </li>
              <li>
                Comply with the law and protect the safety, rights, property, or
                security of CarbonPlan, the Services, our users, and the general
                public; and
              </li>
              <li>
                Enforce our Terms of Use, including to investigate potential
                violations thereof.
              </li>
            </ul>
            <Box as='p' variant='styles.p'>
              Please note that some of the Services we use (like Workable and
              Stripe) may combine information that we collect from you and about
              you with information they possess or obtain, in accordance with
              their privacy policies. We will use any such combined information
              that we obtain in accordance with this Privacy Policy.
            </Box>
            <Box as='p' variant='styles.p'>
              We may aggregate and/or de-identify information collected through
              the Services, and we may use de-identified and/or aggregated data
              for any purpose, including without limitation for research and
              marketing purposes.
            </Box>

            <Box as='h2' variant='styles.h2'>
              04 — When we disclose your information
            </Box>
            <Box as='p' variant='styles.p'>
              We may disclose and/or share your information under the following
              circumstances:
            </Box>
            <Box as='h3' variant='styles.h3'>
              Service providers
            </Box>
            <Box as='p' variant='styles.p'>
              We may disclose your information to third parties who perform
              services on our behalf, including without limitation,
              technology/hosting, event management, candidate selection,
              promotional activity (such as our newsletter), data storage, data
              analysis and processing, recruitment, and legal services.
            </Box>
            <Box as='p' variant='styles.p'>
              For example, as discussed in more detail above, we use Plausible
              for analytics, Mailchimp for newsletter communications, reCAPTCHA
              to fight spam and abuse, Workable for recruiting, and Stripe for
              donation processing. In order to use their service, our
              recruitment platform Workable requires us to let you know that
              where you have applied for a job opening through the Indeed Apply
              functionality, we will disclose to Indeed certain personal data
              that we hold, including but not limited to a unique identifier
              used by Indeed to identify you, and information about your
              progress through our hiring process for the applicable job
              opening, as well as tangible, intangible, visual, electronic,
              present, or future information that we hold about you, such as
              your name, contact details and other information involving
              analysis of data relating to you as an applicant for employment.
              Indeed’s Privacy Notice concerning such data is available at
              https://hrtechprivacy.com/brands/indeed.
            </Box>
            <Box as='p' variant='styles.p'>
              Similarly, when you register for an event, we may share your
              information with vendors, third-party contractors, partner
              organizations, and volunteers for the purpose of organizing and
              running the event and related activities.
            </Box>
            <Box as='h3' variant='styles.h3'>
              Legal compliance and protection of CarbonPlan and others
            </Box>
            <Box as='p' variant='styles.p'>
              We may disclose your information if required to do so by law or on
              a good faith belief that such disclosure is permitted by this
              Privacy Policy or reasonably necessary or appropriate for any of
              the following reasons: (a) to comply with legal process; (b) to
              enforce or apply our Terms of Use and this Privacy Policy, or
              other contracts with you, including investigation of potential
              violations thereof; (c) to respond to your requests for customer
              service; and/or (d) to protect the rights, property, or personal
              safety of CarbonPlan, our agents and affiliates, our users, and
              the public. This includes exchanging information with other
              companies and organizations for fraud protection, and spam/malware
              prevention, and similar purposes.
            </Box>
            <Box as='h3' variant='styles.h3'>
              Organizational transfers
            </Box>
            <Box as='p' variant='styles.p'>
              As we continue to develop our Services, we may engage in certain
              transactions, such as the transfer of our assets. In such
              transactions, (including in contemplation of such transactions,
              e.g., due diligence) your information may be disclosed. If any of
              CarbonPlan’s assets are transferred to a third party, customer
              information (including your email address and Your Content) would
              likely be among the transferred assets.
            </Box>
            <Box as='h3' variant='styles.h3'>
              Affiliated companies
            </Box>
            <Box as='p' variant='styles.p'>
              We may disclose your information with current or future affiliated
              companies.
            </Box>
            <Box as='h3' variant='styles.h3'>
              Consent
            </Box>
            <Box as='p' variant='styles.p'>
              We may disclose your information to any third parties based on
              your consent to do so.
            </Box>
            <Box as='h3' variant='styles.h3'>
              Aggregate/De-identified information
            </Box>
            <Box as='p' variant='styles.p'>
              We may disclose de-identified and/or aggregated data for any
              purpose to third parties, including funders interested in the
              number of people viewing our site, for example, and/or others,
              including the public generally.
            </Box>

            <Box as='h2' variant='styles.h2'>
              05 — Legal basis for processing personal data
            </Box>
            <Box as='p' variant='styles.p'>
              The laws in some jurisdictions (including the EU and UK GDPR)
              require companies to tell you about the legal ground they rely on
              to use or disclose information that can be directly linked to or
              used to identify you. To the extent those laws apply, our legal
              grounds for processing such information are as follows:
            </Box>
            <ul>
              <li>
                To Honor Our Contractual Commitments to You – Much of our
                processing of information is to provide services to our users
                pursuant to our Terms of Use or other agreements we may have
                with you.
              </li>
              <li>
                Legitimate Interests – In many cases, we handle information on
                the ground that it furthers our legitimate interests in ways
                that are not overridden by the interests or fundamental rights
                and freedoms of the affected individuals, these include:
                <ul>
                  <li>Customer service</li>
                  <li>Outreach and fundraising</li>
                  <li>Protecting our users, personnel, and property</li>
                  <li>Managing user accounts</li>
                  <li>Organizing and running events</li>
                  <li>Analyzing and improving our programs</li>
                  <li>Managing legal issues</li>
                </ul>
              </li>
            </ul>
            <Box as='p' variant='styles.p'>
              We may also process information for the same legitimate interests
              of our users and business partners.
            </Box>
            <ul>
              <li>
                Legal Compliance – We may need to use and disclose information
                in certain ways to comply with our legal obligations.
              </li>
              <li>
                Consent – Where required by law, and in some other cases where
                legally permissible, we handle information on the basis of
                consent. Where we handle your information on the basis of
                consent, you have the right to withdraw your consent, in
                accordance with applicable law.
              </li>
            </ul>
            <Box as='h2' variant='styles.h2'>
              06 — Your choices and data subject rights
            </Box>
            <Box as='p' variant='styles.p'>
              You have various rights with respect to the collection and use of
              your information through the Services. Those choices are as
              follows:
            </Box>
            <ul>
              <li>
                Email Unsubscribe – You may unsubscribe from our marketing
                emails at any time by clicking on the “unsubscribe” link at the
                bottom of each newsletter or by emailing hello@carbonplan.org
                with your request.
              </li>
              <li>
                We do not control third parties' collection or use of your
                information to, for example, serve interest-based advertising.
                However these third parties may provide you with ways to choose
                not to have your information collected or used in this way.
                Please review their privacy policies for more information. In
                addition, you can opt out of receiving targeted ads from members
                of the Network Advertising Initiative (“NAI”) on the NAI's
                website at https://thenai.org/opt-out, and from the Digital
                Advertising Alliance (“DAA”) at https://optout.aboutads.info.
              </li>
              <li>
                EU Data Subject Rights – Individuals in the European Economic
                Area (“EEA”) and other jurisdictions, including the UK, have
                certain legal rights (subject to applicable exceptions and
                limitations) to obtain confirmation of whether we hold certain
                information about them, to access such information, and to
                obtain its correction or deletion in appropriate circumstances.
                You may have the right to object to our handling of your
                information, restrict our processing of your information, and to
                withdraw any consent you have provided. To exercise these
                rights, please email us at hello@carbonplan.org with the nature
                of your request. You also have the right to go directly to the
                relevant supervisory or legal authority, but we encourage you to
                contact us so that we may resolve your concerns directly as best
                and as promptly as we can.
              </li>
            </ul>
            <Box as='h2' variant='styles.h2'>
              07 — International transfers
            </Box>
            <Box as='p' variant='styles.p'>
              CarbonPlan and certain of its service providers are based in the
              United States. As described above in the “When We Disclose Your
              Information” section, we may share your information with trusted
              service providers or business partners in countries other than
              your country of residence, including the United States, in
              accordance with applicable law. This means that some of your
              information may be processed in the United States, which may not
              offer the same level of protection as the privacy laws of your
              jurisdiction. By providing us with your information, you
              acknowledge any such transfer, storage or use.
            </Box>
            <Box as='h2' variant='styles.h2'>
              08 — Security measures
            </Box>
            <Box as='p' variant='styles.p'>
              We have implemented technical and organizational security measures
              to protect against the loss, misuse, and/or alteration of your
              information. These safeguards vary based on the sensitivity of the
              information that we collect and store. However, we cannot and do
              not guarantee that these measures will prevent every unauthorized
              attempt to access, use, or disclose your information since despite
              our efforts, no Internet and/or other electronic transmissions can
              be completely secure.
            </Box>
            <Box as='h2' variant='styles.h2'>
              09 — Children
            </Box>
            <Box as='p' variant='styles.p'>
              The Services are intended for users over the age of 18 and are not
              directed at children under the age of 13. If we become aware that
              we have collected personal information (as defined by the
              Children’s Online Privacy Protection Act) from children under the
              age of 13, or personal data (as defined by the EU GDPR) from
              children under the age of 16, we will take reasonable steps to
              delete it as soon as practicable.
            </Box>
            <Box as='h2' variant='styles.h2'>
              10 — Data retention
            </Box>
            <Box as='p' variant='styles.p'>
              We retain the information we collect for as long as necessary to
              fulfill the purposes set forth in this Privacy Policy or as long
              as we are legally required or permitted to do so. Information may
              persist in copies made for backup and business continuity purposes
              for additional time.
            </Box>
            <Box as='h2' variant='styles.h2'>
              11 — Third-party links and services
            </Box>
            <Box as='p' variant='styles.p'>
              The Services may contain links to third-party websites and/or
              services. If you choose to use these sites or features, you may
              disclose your information not just to those third-parties, but
              also to their users and the public more generally depending on how
              their services function. CarbonPlan is not responsible for the
              content or privacy practices of such third-party websites or
              services. The collection, use and disclosure of your information
              will be subject to the privacy policies of the third-party
              websites or services, and not this Privacy Policy. We encourage
              you to read the privacy statements of each and every site you
              visit.
            </Box>
            <Box as='h2' variant='styles.h2'>
              12 — Changes to this Privacy Policy
            </Box>
            <Box as='p' variant='styles.p'>
              We will continue to evaluate this Privacy Policy as we update and
              expand our Services, and we may make changes to the Privacy Policy
              accordingly. We will post any changes here and revise the date
              last updated above. We encourage you to check this page
              periodically for updates to stay informed on how we collect, use
              and share your information. If we make material changes to this
              Privacy Policy, we will provide you with notice as required by
              law.
            </Box>
            <Box as='h2' variant='styles.h2'>
              13 — Questions about this Privacy Policy
            </Box>
            <Box as='p' variant='styles.p'>
              If you have any questions about this Privacy Policy or our privacy
              practices, you can contact us at: hello@carbonplan.org.
            </Box>
          </Box>
        </Column>
      </Row>
    </Layout>
  )
}

export default Privacy
