const fetch = require('node-fetch')

// const PRODUCTION_URL = 'https://carbonplan.org'
const PRODUCTION_URL =
  'https://carbonplanorg-git-katamartin-configure-sitemap-carbonplan.vercel.app'

async function pingSitemap() {
  const requests = await Promise.all([
    fetch(
      'https://research-git-katamartin-contentsjson-carbonplan.vercel.app/research/contents.json'
    ),
    fetch(
      'https://blog-git-katamartin-contentsjson-carbonplan.vercel.app/blog/contents.json'
    ),
  ])
  const contents = await Promise.all(requests.map((request) => request.json()))
  const dates = contents.reduce(
    (accum, content) =>
      accum.concat(content.map((c) => c.date).filter(Boolean)),
    []
  )

  const yesterday = new Date()

  yesterday.setDate(yesterday.getDate() - 1)
  const year = yesterday.getFullYear()
  const month = String(yesterday.getMonth() + 1).padStart(2, '0')
  const date = String(yesterday.getDate()).padStart(2, '0')

  if (dates.includes(`${year}-${month}-${date}`)) {
    // fetch(
    //   `https://www.google.com/ping?sitemap=https://carbonplan.org/sitemap.xml`
    // )
  }
}

pingSitemap()
