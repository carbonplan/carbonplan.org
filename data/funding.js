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
  ['Zegar Family Foundation', 'Foundation'],
  ['FTX', 'Corporate'],
  [
    <span>
      Venkatesh Srinivas +<br />
      Balaji Srinivas
    </span>,
    'Individual',
  ],
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
    </>,
  ],
  [
    <span>
      Lowercase Carbon +<br /> Rio Vista Foundation +<br /> ClimateWorks
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
    <Link href='/research/soil-depth-sampling'>
      Soil- and forest-based carbon accounting
    </Link>,
  ],
]

export { unrestricted, projectSpecific }
