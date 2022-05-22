<template>
  <div class="container mx-auto px-10 py-32">
    <article class="mx-auto prose prose-sm sm:prose lg:prose-lg box-content md:px-8">
      <nuxt-content :document="post" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {

      const post = await $content('blog', params.slug).fetch()

    return { post }
  }
}
</script>
