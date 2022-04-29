import { Link } from 'theme-ui'

const unrestricted = [
  ['Pamela Mensch', 'Individual'],
  ['Hampus Jakobsson', 'Individual'],
  [
    <span>
      Jason Jacobs +<br />
      Allison Pincus-Jacobs
    </span>,
    'Individual',
  ],
  [
    <span>
      Colin Rust +<br />
      Jeannie Tseng
    </span>,
    'Individual',
  ],
  ['Teach a Man to Fish Foundation', 'Foundation'],
  ['Eutopia Foundation', 'Foundation'],
  ['Jacob Trefethen', 'Individual'],
  ['Incite labs', 'Corporate'],
  [
    <span>
      Ilya Volodarsky +<br />
      Mike Volodarsky +<br />
      Emily O'Brien
    </span>,
    'Individual',
  ],
  ['Shawn Liu', 'Individual'],
  [
    <span>
      Ross A. Garon +<br />
      Hong K. Suh
    </span>,
    'Individual',
  ],
  ['John Wolthuis', 'Individual'],
  ['Zegar Family Fund', 'Individual'],
  ['FTX Foundation', 'Foundation'],
  [
    <span>
      Venkatesh Srinivas +<br />
      Balaji Srinivas
    </span>,
    'Individual',
  ],
  ['Sergey Brin Family Foundation', 'Foundation'],
  ['Spencer Adler', 'Individual'],
  [
    <span>
      Lionel Dripps +<br />
      Rebecca Rice
    </span>,
    'Individual',
  ],
  ['Ernest J. McNabb', 'Individual'],
  ['Chan Zuckerberg Initiative', 'Foundation'],
  ['New Climate Ventures', 'Corporate'],
  ['Silicon Valley Community Foundation', 'Foundation'],
  [
    <span>
      Ambrose Carr +<br />
      Sharonmoyee Goswami
    </span>,
    'Individual',
  ],
  ['Calvin French-Owen', 'Individual'],
  ['Additional Ventures', 'Foundation'],
  ['Rovere O’Kelley Family Fund', 'Individual'],
]

const projectSpecific = [
  [
    'Carbon 180',
    <Link href='https://medium.com/@carbon180/all-star-fellows-join-carbon180-7fdbd00eae3b'>
      Entrepreneur in Residence Fellowship
    </Link>,
  ],
  [
    'Stripe',
    <>
      <Link href='/research/stripe-reports-insights'>
        Negative Emissions Purchase 2020
      </Link>
      <br />
      <Link href='https://github.com/carbonplan/carbon-removal-application'>
        Development of carbon removal procurement application
      </Link>
    </>,
  ],
  ['WattTime', <Link href='https://www.climatetrace.org'>Climate TRACE</Link>],
  ['Generation IM', 'Guidance on evaluating climate benefits from investments'],
  [
    'ClimateWorks',
    <>
      <Link href='/research/permanence-calculator'>Permanence Calculator</Link>
      <br />
      <Link href='/research/stripe-2021-insights'>
        Evaluation of technological carbon removal proposals
      </Link>
      <br />
      <Link href='/research/seaweed-farming'>
        Mapping seaweed farming potential
      </Link>
    </>,
  ],
  [
    <span>
      Lowercarbon Capital +<br /> Rio Vista Foundation +<br /> ClimateWorks
    </span>,
    <Link href='https://cdrprimer.org'>CDR Primer</Link>,
  ],
  [
    'NASA',
    <Link href='https://earthdata.nasa.gov/esds/competitive-programs/access/pangeo-ml'>
      Pangeo ML
    </Link>,
  ],
  [
    'Microsoft',
    <Link href='/research/soil-protocols-explainer'>
      Review of soil carbon offset protocols
    </Link>,
  ],
  [
    'Microsoft AI for Earth',
    <Link href='/research/forest-risks'>Forest carbon risk mapping</Link>,
  ],
  [
    'Preston-Werner Foundation',
    <>
      Soil- and forest-based carbon accounting (
      <Link href='/research/soil-depth-sampling'>Soil depth</Link>,{' '}
      <Link href='/research/fire-forests-inventories'>Fires and forests</Link>)
    </>,
  ],
  [
    'XPRIZE',
    <Link href='https://www.xprize.org/prizes/elonmusk/articles/introducing-the-xprize-carbon-removal-expert-reviewers'>
      Carbon removal expert review
    </Link>,
  ],
]

export { unrestricted, projectSpecific }
