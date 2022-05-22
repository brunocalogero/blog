<template>  
  <div class="m-10">
    <!-- TODO: figure out better margin spacing & single blogpost centering.. -->
    <!-- TODO: reduce gap, (btw cant use flex to limit to three articles per row) -->
    <div 
      class="grid md:grid-cols-3 gap-3 place-items-center grid-cols-1"
    >
      <BlogPost
        v-for="page in pages" :key="page.title"  
        :post="page"
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