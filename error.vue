<template>
  <NuxtLayout>
    <h1>{{ error.statusCode }}</h1>
    <p>Something went wrong...</p>
  </NuxtLayout>
</template> 

<script setup>
  import '@/assets/css/style.scss'
  
  const error = useError();
</script>