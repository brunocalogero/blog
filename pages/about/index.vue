<template>
  <div class="mx-auto px-10">
    <article class="mx-auto prose prose-sm sm:prose lg:prose-lg box-content md:px-8">
       <nuxt-content :document="page" />
    </article>  
  </div>
</template>

<script>
export default {
  name: 'about',
  layout: 'about',
  transition: 'about',
  
  async asyncData({ $content }) {
    const page = await $content("about", "me").fetch();
    return {
      page
    };
  }, 
};
</script>

<style lang="postcss">
  .about-enter-active, .about-leave-active { transition: opacity .35s; }
  .about-enter, .about-leave-active { opacity: 0; }

  .nuxt-content a {
    font-weight: bold;
    font-style: italic;
    
    &:hover {
      text-decoration: underline;
    }
  }

</style>