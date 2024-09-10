<template>
  <div class="box">
    <h1>Nuxt 3 boilerplate - About page</h1>
    <p>This is a second page. Use it, or remove it and make your own.</p>
  </div>
</template>

<script setup>
  //Apply css classes to the body
  useHead({
    bodyAttrs: {
      class: 'theme--pink'
    },
  })
</script>