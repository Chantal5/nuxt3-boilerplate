export default defineI18nLocale(async locale => {
  // Simulate fetching translations from an API
  return {
    "nav": {
      "home": "Home",
      "about": "About" 
    },
    "footer": {
      "preLink": "This Nuxt boilerplate is created by ",
      "postLink": ", Nuxt/Vue developer and webdesigner.",
    },
    "homepage": {
      "title": "Nuxt 3 boilerplate",
      "message": "This Nuxt 3 application is still empty. You can start here to build your own pages and components. Navigate to the about page to view some examples.",
    },
    "aboutPage": {
      "title": "Nuxt 3 boilerplate - About page",
      "message": "This is a second page. Edit it or remove it and make your own.",
      "viewportTitle": "Nuxt viewport demo",
      "viewportMessage": "Open your browsers devtools and look at this page from a mobile view.",
      "viewportBox": "Nuxt Viewport demo. You can only see me on your mobile device!",
      "imageTitle": "Nuxt Image demo",
      "imageMessage": "Original file size: 307kb",
      "image1Message": "Image 1: NuxtImg with fit=cover, file size: 10.8kb",
      "image2Message": "Image 2: NuxtImg with fit=contain, file size: 5.1kb",
      "image3Message": "Image 3: NuxtImg with fit=fill, filesize: 13.8kb",
    }
  }
})