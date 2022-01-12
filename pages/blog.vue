<template>  
  <div class="">
    <!-- TODO: figure out better margin spacing & single blogpost centering.. -->
    <div 
      class="grid justify-items-center md:grid-cols-3 gap-4 place-items-center grid-cols-1"
      v-for="page in pages" :key="page.title"  
    >
      <BlogPost
        :title="page.title"
        :createdAt="page.created_at"
        :createdBy="page.created_by"
        :tags="page.tags"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  transition: 'blog',
  layout: 'blog',

  async asyncData({ $content }) {
    const pages = await $content("blog").sortBy('created_at', 'desc').fetch();
    return {
      pages
    };
  },
};
</script>


<style lang="postcss">
</style>