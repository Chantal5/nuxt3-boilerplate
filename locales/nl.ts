export default defineI18nLocale(async locale => {
  // Simulate fetching translations from an API
  return {
    "nav": {
      "home": "Hoofdpagina",
      "about": "Over-pagina" 
    },
    "footer": {
      "preLink": "Deze Nuxt starter template is gemaakt door ",
      "postLink": ", Nuxt/Vue developer en webdesigner.",
    },
    "homepage": {
      "title": "Nuxt 3 starter setup",
      "message": "Deze Nuxt 3 application is nog leeg. Je kunt zelf je eigen pagina's en componenten maken. Navigeer naar de over-pagina om wat voorbeelden te bekijken.",
    },
    "aboutPage": {
      "title": "Nuxt 3 starter setup - Over pagina",
      "message": "Dit is een tweede pagina. Bewerk hem of verwijder heb en maak je eigen pagina's.",
      "viewportTitle": "Nuxt viewport demo",
      "viewportMessage": "pen je browsers devtools en bekijk deze pagina in een mobiele weergave.",
      "viewportBox": "Nuxt Viewport demo. Je ziet mij alleen op kleine beeldschermen!",
      "imageTitle": "Nuxt Image demo",
      "imageMessage": "Originele bestandsgrootte: 307kb",
      "image1Message": "afbeelding 1: NuxtImg met fit=cover, bestandsgrootte: 10.8kb",
      "image2Message": "Afbeelding 2: NuxtImg met fit=contain, bestandsgrootte: 5.1kb",
      "image3Message": "Afbeelding 3: NuxtImg met fit=fill, bestandsgrootte: 13.8kb",
    }
  }
})