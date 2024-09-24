<template>
  <div class="box">
    <h1>Nuxt 3 boilerplate - About page (dark theme)</h1>
    <p>This is a second page. Edit it or remove it and make your own.</p>

    <!-- Nuxt Viewport demo -->
    <h2>Nuxt viewport demo</h2>
    <p>Open your browsers devtools and look at this page from a mobile view.</p>
    <div v-if="viewport.isLessThan('tablet')" class="viewport-box">Nuxt Viewport demo. You can only see me on your mobile device!</div>

    <!-- Nuxt Image demo -->
    <h2>Nuxt Image demo</h2>
    <span>Ordiginal file size: 307kb</span>
    <NuxtImg fit="cover" src="/flowers-portrait.jpg" alt="Nuxt Image demo" height="200" width="800"></NuxtImg>
    <span>Image 1: NuxtImg with fit=cover, file size: 10.8kb</span>
    <NuxtImg fit="contain" src="/flowers-portrait.jpg" alt="Nuxt Image demo" height="200" width="800"></NuxtImg>
    <span>Image 2: NuxtImg with fit=contain, file size: 5.1kb</span>
    <NuxtImg fit="fill" src="/flowers-portrait.jpg" alt="Nuxt Image demo" height="200" width="800"></NuxtImg>
    <span>Image 3: NuxtImg with fit=fill, filesize: 13.8kb</span>
  </div>
</template>

<script setup>
  //Nuxt viewport demo, see template.
  const viewport = useViewport()

  //Define layout for this page. Can be omitted with default layout.
  definePageMeta({
    layout: "default"
  })

  useHead({
    title: "Blog", //This is the titleChunk, defined in app.vue 
    //Apply css classes to the body (in this case used as a theme)
    bodyAttrs: {
      class: 'theme--dark' 
    },
  })

  //Set page specific meta tags for SEO 
  useSeoMeta({
    ogTitle: 'About - Nuxt 3 Boilerplate', //Replace text with your own. This title text is shown when a link to this page is shared on Social Media.
    description: 'Nuxt 3 Boilerplate about page', //Replace text with your own. This text is shown in meta description tag in the <head> section of your website.
    ogDescription: 'Nuxt 3 Boilerplate about page', //Replace text with your own. This description text is shown when a link to this page is shared on Social Media.
    ogImage: 'https://dummyimage.com/1200X630/000/fff', //Replace image with your own. This image is shown when a link to this page is shared on Social Media. Best dimension is 1200x630px.
  })
</script>

<style lang="scss" scoped>
  //Use local styling as little as possible, every vue file with a styling block in it, creates a render blocking css file.
  //For best performance, use only one stylesheet and a CSS system like BEM. An example is located in /assets/css

  //Local scoped styling example. Only content of this file is targeted. You can see the h1 on the homepage is still default black.
  h1 {
    background-image: linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  .viewport-box {
    padding: 1rem;
    background-color: green;
    color: white;
    font-size: 2rem;
    font-weight: 600;
  }

  img {
    border: 2px solid #02cdd4;
    border-image: linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%) 1;
  }
</style>