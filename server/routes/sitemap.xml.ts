import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({
    hostname: 'https://www.putyourownwebsitehere.com'
  })

  //Set urls variable and add homepage
  const urls = [
    '/', '/about'
  ]

  for (const doc of urls) {
    sitemap.write({
      url: doc,
      changefreq: 'monthly'
    })
  }

  sitemap.end()

  return streamToPromise(sitemap)
})