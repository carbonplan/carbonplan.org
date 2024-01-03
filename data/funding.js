import { Link } from 'theme-ui'
import { OnePercent } from '../components/partner-logos'

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
  ['Incite labs', 'Foundation'],
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
      Ambrose Carr* +<br />
      Sharonmoyee Goswami
    </span>,
    'Individual',
  ],
  ['Calvin French-Owen', 'Individual'],
  ['Additional Ventures', 'Foundation'],
  ['Rovere O’Kelley Family Fund', 'Individual'],
  ['Robert and Martha Parke', 'Individual'],
  ['Preston-Werner Foundation', 'Foundation'],
  ['Climate Cousins Foundation', 'Foundation'],
  ['Michael Harm*', 'Individual'],
  ['Nicholas Sofroniew', 'Individual'],
  ['Jandon Foundation', 'Foundation'],
  ['Vanguard Charitable', 'Nonprofit'],
  ['Benificus Foundation', 'Foundation'],
  ['William Harrington', 'Individual'],
  ['Joshua Monrad', 'Individual'],
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
      <Link href='/research/permanence-calculator'>Permanence calculator</Link>
      <br />
      <Link href='/research/stripe-2021-insights'>
        Evaluation of technological carbon removal proposals
      </Link>
      <br />
      <Link href='/research/seaweed-farming'>
        Mapping seaweed farming potential
      </Link>
      <br />
      <Link href='/research/cdr-timescale-accounting'>
        CDR timescale accounting
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
    <>
      <Link href='/research/forest-risks'>Forest carbon risk mapping</Link>
      <br />
      <Link href='/research/cmip6-downscaling'>CMIP6 downscaling</Link>
    </>,
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
  [
    'Additional Ventures',
    <Link href='https://carbonplan.org/research/cdr-scale-barriers'>
      Barriers to scaling the long-duration carbon dioxide removal industry
    </Link>,
  ],
  [
    'Linden Trust for Conservation',
    'Technical guidance on carbon removal policy development',
  ],
  [
    'Columbia University',
    'Data analysis and visualization work with the Center for Learning the Earth with Artificial Intelligence and Physics (LEAP)',
  ],
  [
    'Patrick J McGovern Foundation',
    'Projects to increase accountability in the voluntary carbon market and tie CDR policy and investments to the best available science',
  ],
  [
    'Earth Science Information Partners',
    <Link href='https://carbonplan.org/blog/forest-offsets-firms'>
      Fire monitoring improvements
    </Link>,
  ],
  [
    'Development Seed',
    <Link href='https://nasa-impact.github.io/zarr-visualization-report/'>
      Zarr visualization tooling and benchmarking
    </Link>,
  ],
  [
    <span>
      Grantham Foundation +<br /> Adam Winkel
      <br />
    </span>,
    <Link href='https://www.energy.gov/technologytransitions/articles/doe-selects-four-national-laboratory-led-teams-accelerate'>
      Technical foundations for CDR MRV standards
    </Link>,
  ],
]

const partners = [
  [
    <OnePercent sx={{ width: ['35%', '75%', '65%', '65%'] }} />,
    'As an Environmental Partner with 1% For the Planet, we are eligible to receive monetary donations, volunteer time, and in-kind donations from participating businesses.',
  ],
]

export { unrestricted, projectSpecific, partners }
