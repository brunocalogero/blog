<template>
  <div class="flex flex-col p-10 items-center">
    <NuxtLink class="m-2 flex items-center" to="/">
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
