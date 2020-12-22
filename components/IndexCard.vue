<template>
  <div class="border-2 hover:border-black rounded-xl px-16 py-12 
    hover:shadow-lg transition duration-300 ease-out"> 
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>