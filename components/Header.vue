<template>
  <div class="flex flex-col p-10 items-center">
    <!-- TODO: try to animate arrow -->
    <NuxtLink class="border-2 hover:border-black rounded-xl px-3 py-3 
      hover:shadow-lg transition duration-300 ease-out
      m-2 flex items-center
      cursor-pointer" to="/">
      <ArrowLeftIcon class="back"/>
      <div class="ml-2">Home</div>
    </NuxtLink>
  </div>
</template>

<script>
import ArrowLeftIcon from "~/static/misc/arrow-left.svg?inline";

export default {
  components: {
    ArrowLeftIcon
  },
}
</script>
