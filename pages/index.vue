<template>
  <div class="container">
    <div class="md:flex">
      <IndexCard v-for="item in menuItems" :key="item.name" :title="item.name" class="m-2"/>
    </div>
  </div>
</template>

<script>
export default {

  data: () => ({
    menuItems: [
      {name: 'About'}, 
      // {name: 'Stuff'},
      {name: 'Blog (Coming Soon)'}, 
    ]

  })
}
</script>



<style lang="postcss">
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
