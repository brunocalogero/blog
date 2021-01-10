<template>
  <div class="container">
    <img class="avatar" src="../static/img/pp.jpeg">
    <div class="md:flex md:flex-wrap place-content-center md:w-8/12">
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
  @apply min-h-screen flex flex-col justify-center items-center mx-auto;
}

.avatar {
  @apply object-cover rounded-full h-48 w-48 mb-40 shadow-lg; 
}
</style>
