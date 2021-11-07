<template>
  <NuxtLink 
    :to="title" 
    class="border-2 hover:border-black rounded-xl px-16 py-12 
    hover:shadow-lg transition duration-300 ease-out
    m-2
    cursor-pointer
    flex w-1/4 justify-center">
    <div>{{ title | capitalize }}</div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
}
</script>