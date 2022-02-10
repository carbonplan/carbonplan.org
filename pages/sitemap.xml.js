import vercelConfig from '../vercel.json'

const BASE_URL = 'https://carbonplan.org'

const ROUTES = [
  'about',
  'disclosures',
  'donate',
  'faq',
  'funding',
  'press',
  'team',
  'terms',
  'thanks',
]

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>${BASE_URL}</loc>
       </url>
       ${ROUTES.map((route) => {
         return `
          <url>
            <loc>${`${BASE_URL}/${route}`}</loc>
          </url>
        `
       }).join('')}
       ${pages
         .map(({ page, date }) => {
           return `
            <url>
              <loc>${`${BASE_URL}/${page}`}</loc>${
             date
               ? `
              <lastmod>${date}</lastmod>
             `
               : ''
           }
            </url>
       `
         })
         .join('')}
     </urlset>
   `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const requests = await Promise.all([
    fetch(`${BASE_URL}/research/contents.json`),
    fetch(`${BASE_URL}/blog/contents.json`),
  ])

  const [research, blog] = await Promise.all(
    requests.map((request) => request.json())
  )

  const rewrites = vercelConfig.rewrites
    .map(({ source }) => ({
      page: source.replace(/(^\/|\(\.\*\)$)/g, ''),
    }))
    .filter((rewrite) => !['research', 'blog'].includes(rewrite.page))

  const sitemap = generateSiteMap(research.concat(blog).concat(rewrites))

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
