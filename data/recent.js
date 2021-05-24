const research1 = {
  date: '03-03-2021',
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
  {
    label: 'CDR Primer',
    href: 'https://cdrprimer.org/',
  },
]

const press = [
  {
    label: 'NPR Planet Money',
    href: 'https://www.npr.org/2021/05/07/994774148/emission-impossible',
  },
  {
    label: 'MIT Tech Review',
    href: 'https://www.technologyreview.com/2021/05/10/1024751/carbon-credits-massachusetts-audubon-california-logging-co2-emissions-increase/',
  },
  {
    label: 'ProPublica',
    href: 'https://www.propublica.org/article/the-climate-solution-actually-adding-millions-of-tons-of-co2-into-the-atmosphere',
  },
  {
    label: 'Bloomberg',
    href: 'https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/',
  },
]

export { research1, research2, highlights, press }
