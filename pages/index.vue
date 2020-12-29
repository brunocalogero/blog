<template>
  <div class="container">
    <div class="md:flex items-center">
      <IndexCard v-for="item in menuItems" :key="item.name" :title="item.name"/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuItems: [
      {name: 'About'}, 
      {name: 'Blog'}, 
    ]
  })
}
</script>

<style lang="postcss">
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
