// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    'nuxt-viewport', 
    '@nuxt/image',
    "nuxt-graphql-request"
  ],

  /* Uncomment for GraphQL API data. GraphQL type needs to exist in types/globals.d.ts.
  graphql: {
    clients: {
      default: {
        endpoint: 'https://url.to.your.data.endpoint',
      },
    },
  },
  */

  /* Uncomment for images via provider. Docs: https://image.nuxt.com/get-started/configuration#provider
  image: {
    [provider]: {
      baseURL: "https://url.to.your.images"
    },
  },
  */

  //Remove render blocking CSS
  hooks: {
    'build:manifest': (manifest) => {
      // find the app entry, css list
      const css = manifest['node_modules/nuxt/dist/app/entry.js']?.css
      if (css) {
        // start from the end of the array and go to the beginning
        for (let i = css.length - 1; i >= 0; i--) {
          // if it starts with 'entry', remove it from the list
          if (css[i].startsWith('entry')) css.splice(i, 1)
        }
      }
    },
  },

  nitro: {
    //Performance improvement
    compressPublicAssets: true,
    //Prerender sitemap for SEO
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml'],
    }
  },

  //Preload fonts
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        //Insert your own font(s) below
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
          onload: 'this.onload=null;this.rel="stylesheet"',
        },
      ]
    }
  },
})