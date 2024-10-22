<template>
  <div class="box">
    <h1>{{ $t('homepage.title') }}</h1>
    <p>{{ $t('homepage.message') }}</p>
  </div>
</template>

<script setup>
  //Set page specific meta tags for SEO 
  useSeoMeta({
    ogTitle: 'Home - Nuxt 3 Boilerplate', //Replace text with your own. This title text is shown when a link to this page is shared on Social Media.
    description: 'Nuxt 3 Boilerplate homepage', //Replace text with your own. This text is shown in meta description tag in the <head> section of your website.
    ogDescription: 'Nuxt 3 Boilerplate homepage', //Replace text with your own. This description text is shown when a link to this page is shared on Social Media.
    ogImage: 'https://dummyimage.com/1200X630/000/fff', //Replace image with your own. This image is shown when a link to this page is shared on Social Media. Best dimension is 1200x630px.
  })
</script>