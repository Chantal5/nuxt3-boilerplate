<template>
  <NuxtLayout> 
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout> 
</template>

<script setup>
  import '@/assets/css/style.scss'

  const route = useRoute()
  
  //All the stuff below is meta data applies to every page of your website. Your can override or add properties on any page to create page-specific meta data.
  useHead({
    link: [
      {
        rel: "canonical",
        href: `https://www.urltoyourowndomainname.com${route.path}`, //Replace with your own website domain name
      },
    ],

    meta: [
      {
        property: "og:url",
        content: `https://www.urltoyourowndomainname.com${route.path}`, //Replace with your own website domain name 
      }
    ],

    htmlAttrs: {
      lang: 'en',
    },

    script: [
      {
        type: "speculationrules",
        innerHTML: `
          {
            "prerender": [
              {
                "where": {
                  "and": [
                    { "href_matches": "/*" }
                  ]
                }
              }
            ]
          }
        `,
      },
    ],

    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Nuxt 3 Boilerplate` : 'Nuxt 3 Boilerplate'; //Replace with your own content. TitleChunk is a variable that can be filled from within each page.
    },
  })

  useSeoMeta({
    ogSiteName: "Nuxt 3 Boilerplate",
    ogLocale: "nl_NL",
    twitterCard: "summary_large_image",
  })
</script>
