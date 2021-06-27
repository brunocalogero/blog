<template>
<!-- TODO: use about layout? -->
<div class="wrapper">
  <div class="left w-1/4"></div>
  <div class="container w-2/4">
    <VueShowdown 
      markdown="## markdown text"
      flavor="github"
      :options="{ emoji: true }" />
  </div>
  <div class="right w-1/4"></div>
</div>
</template>

<script>
import { VueShowdown } from 'vue-showdown'
import me from '../content/about/me.md'

export default {
  components: {
    VueShowdown,
  },
  created() {
    console.log(me);
  }
}
</script>

<style lang="postcss">

.wrapper {
  width: 100%;
  height: 100%;

  display: flex;

}

.container {
  width: 100%;
  /* flex: 1; */
  align-self: center;

}

</style>