<template>
  <Header/>
  <div class="app">
    <slot/>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'App'
})
</script>