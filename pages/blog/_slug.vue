<template>
  <div class="mx-auto px-10">
    <article class="mx-auto prose prose-sm sm:prose lg:prose-lg box-content md:px-8">
      <nuxt-content :document="post" />
    </article>
  </div>
</template>

<script>
export default {
  layout: 'slug',

  async asyncData({ $content, params }) {

      const post = await $content('blog', params.slug).fetch()

    return { post }
  }
}
</script>
