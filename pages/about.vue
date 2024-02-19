<script setup>
const n = ref(0);
</script>
<template>
  <div>
    About view
  </div>
  
  <button @click="n++">Increase <span>{{ n }}</span></button>
</template>

<style scoped lang="scss">
button {
  border: 2px solid #ddd;
  padding: 5px;
  border-radius: 8px;

  span {
    background: #ddd;
    padding: 2px 5px;
    border-radius: 5px;
  }
}
</style>