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
  {
    label: 'Permanence Calculator',
    href: '/research/permanence-calculator',
  },
]

const press = [
  {
    label: 'ProPublica / MIT TR',
    href: '',
  },
  {
    label: 'Financial Times',
    href: 'https://www.ft.com/content/de5e8631-bdf2-4c2e-8b7f-83c0c80cdea8',
  },
  {
    label: 'Bloomberg',
    href:
      'https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/',
  },
  {
    label: 'Grist',
    href:
      'https://grist.org/climate/this-oregon-forest-was-supposed-to-store-carbon-for-100-years-now-its-on-fire/',
  },
]

export { research1, research2, highlights, press }
