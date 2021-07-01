<template>
  <!-- TODO: use layout? -->
  <div class="container mx-auto px-10 py-32">
    <nuxt-content class="text-center text-lg leading-10" :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("about", "me").fetch();

    return {
      page
    };
  }
};
</script>

<style lang="postcss">
</style>