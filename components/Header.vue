<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink></li>
        <li><NuxtLink to="/about">{{ $t('nav.about') }}</NuxtLink></li>
      </ul>
    </nav>

    <div class="language-switch">
      <NuxtLink :to="switchLocalePath('en')"><Icon name="twemoji:flag-united-kingdom" title="English" /></NuxtLink>
      <NuxtLink :to="switchLocalePath('nl')"><Icon name="twemoji:flag-netherlands" title="Nederlands" /></NuxtLink>
    </div>

    <select v-model="colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </header>
</template>

<script setup>
//Localiziton
const switchLocalePath = useSwitchLocalePath()

//Color mode initialization
const colorMode = useColorMode()
</script>