<template>
  <div class="box">
    <h1>Nuxt 3 boilerplate</h1>
    <p>This Nuxt 3 application is stille empty. You can start here to build your own pages and components.</p>

    <h2 v-if="viewport.isLessThan('tablet')">You can only see me on your mobile device!</h2>
  </div>
</template>

<script setup>
  const viewport = useViewport()
</script>

<style lang="scss" scoped>
  //Use inline styling as little as possible, every vue file with a styling block in it, creates a render blocking css file.
  //For best performance, use only one stylesheet. An example is located in /assets/css
  //Scoped styling example. Only content of this file is targeted. You can see the h1 on the about page is still default black.
  h1 {
    color: red
  }
</style>