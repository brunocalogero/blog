<template>
  <NuxtLink 
    :to="title" 
    class="border-2 hover:border-black rounded-xl px-16 py-12 
    hover:shadow-lg transition duration-300 ease-out
    m-2
    cursor-pointer
    flex flex-col justify-center items-center
    text-center
    "
  >
    <div>{{ title }}</div>
    <div class="mt-2">{{ createdAt | formatDate }}</div>
  </NuxtLink>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    createdBy: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>