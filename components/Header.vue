<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/test">Test</RouterLink>
  </header>
</template>
<style lang="scss">
header {
  display: flex;
  gap: 10px;
  margin-bottom: 50px;
  border-bottom: 1px solid #ddd;
}
</style>