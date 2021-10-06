const research1 = {
  date: '05-26-2021',
  title: 'CDR Database',
  summary:
    'We have analyzed project proposals submitted to multiple carbon removal procurement programs. Explore our database of project reports and read our articles for takeaways and lessons learned.',
  color: 'purple',
  href: '/research/cdr-database',
}

const research2 = {
  date: '04-29-2021',
  title: (
    <span>
      {'Systematic over' + '\u2011' + 'crediting'}
      <br /> of forest offsets
    </span>
  ),
  summary:
    "California's forest offset program is worth over $2 billion. We analyzed detailed public records to show how statistical flaws in the program's design have led to over-crediting — at a scale of tens of millions of tCO₂ and hundreds of millions of dollars.",
  color: 'green',
  href: '/research/forest-offsets-explainer',
}

const highlights = [
  {
    label: 'Soil Protocols',
    href: '/research/soil-protocols-explainer',
  },
  {
    label: 'US Forest Risks',
    href: '/research/forest-risks-explainer',
  },
  {
    label: 'CA Forest Offsets',
    href: '/research/forest-offsets-explainer',
  },
  {
    label: 'CDR Database',
    href: '/research/cdr-database',
  },
]

const press = [
  {
    label: 'Los Angeles Times',
    href: 'https://www.latimes.com/politics/story/2021-09-08/what-is-the-california-climate-credit-does-it-cut-pollution',
  },
  {
    label: 'New York Times',
    href: 'https://www.nytimes.com/2021/08/23/us/wildfires-carbon-offsets.html',
  },
  {
    label: 'Bloomberg',
    href: 'https://www.bloomberg.com/news/features/2021-08-11/the-fictitious-world-of-carbon-neutral-fossil-fuel?srnd=green',
  },
  {
    label: 'Planet Money',
    href: 'https://www.npr.org/2021/05/07/994774148/emission-impossible',
  },
]

export { research1, research2, highlights, press }
