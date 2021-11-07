<template>
  <div class="container mx-auto px-10 py-32">
    <article class="mx-auto prose prose-sm sm:prose lg:prose-lg box-content md:px-8">
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  transition: 'about',
  async asyncData({ $content }) {
    const page = await $content("blog", "git-basics-at-riskledger").fetch();

    return {
      page
    };
  },
};
</script>

<style>

</style>