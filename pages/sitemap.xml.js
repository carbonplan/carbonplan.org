import fs from 'fs'

import vercelConfig from '../vercel.json'

const BASE_URL = 'https://carbonplan.org'

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>${BASE_URL}</loc>
       </url>
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
  const staticPages = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return ![
        '_app.js',
        '_document.js',
        'index.js',
        '404.js',
        'api',
        'sitemap.xml.js',
      ].includes(staticPage)
    })
    .map((page) => ({ page: page.replace('.js', '') }))

  const requests = await Promise.all([
    fetch(
      'https://research-git-katamartin-contentsjson-carbonplan.vercel.app/research/contents.json'
    ),
    fetch(
      'https://blog-git-katamartin-contentsjson-carbonplan.vercel.app/blog/contents.json'
    ),
  ])

  const [research, blog] = await Promise.all(
    requests.map((request) => request.json())
  )

  const rewrites = vercelConfig.rewrites
    .map(({ source }) => ({
      page: source.replace(/(^\/|\(\.\*\)$)/g, ''),
    }))
    .filter((rewrite) => !['research', 'blog'].includes(rewrite.page))

  const sitemap = generateSiteMap(
    staticPages.concat(research).concat(blog).concat(rewrites)
  )

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
