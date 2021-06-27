<template>
<!-- TODO: use about layout? -->
<div class="container mx-auto px-10 py-32">
  <!-- <div class="left w-1/4"></div> -->
  <!-- <div class="container w-2/4"> -->
  <nuxt-content class='text' :document="page" />
  <!-- </div> -->
  <!-- <div class="right w-1/4"></div> -->
</div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('about', 'me').fetch()

    return {
      page
    }
  },
}
</script>

<style lang="postcss">
/* .wrapper {
  @apply container mx-auto;
} */

/* 
.wrapper {
  width: 100%;
  height: 100%;

  display: flex;
}

.container {
  width: 100%;
  /* flex: 1; */
  /* align-self: center; */
/* } */
</style>