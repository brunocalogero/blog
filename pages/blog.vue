<template>
<div class="container">
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
        <BlogPost
          :title="page.title"
          :createdAt="page.created_at"
          :createdBy="page.created_by"
          :tags="page.tags"
        />
        <BlogPost
          :title="page.title"
          :createdAt="page.created_at"
          :createdBy="page.created_by"
          :tags="page.tags"
        />
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
  transition: 'about',
  data() {
    return {
    };
  },

  async asyncData({ $content }) {
    const pages = await $content("blog").sortBy('created_at', 'desc').fetch();
    return {
      pages
    };
  },
  watch: {
    pages(val) {
      console.log(val);
    },
  },
};
</script>


<style lang="postcss">
.container {
  @apply min-h-screen flex flex-col justify-center items-center mx-auto;
}

</style>