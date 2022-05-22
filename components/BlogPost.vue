<template>
  <NuxtLink 
    :to="{ name: 'blog-slug', params: { slug: post.slug } }" 
    class="border-2 hover:border-black rounded-xl px-16 py-12 
    hover:shadow-lg transition duration-300 ease-out
    m-2
    cursor-pointer
    flex flex-col justify-center items-center
    text-center
    "
  >
    <div>{{ post.title }}</div>
    <div class="mt-2">{{ post.created_at | formatDate }}</div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
}
</script>