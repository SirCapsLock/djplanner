<template>
  <img class="rounded-full border-2 border-orange" :src="this.src" alt="">
</template>

<script>
import defaultImage from '@/assets/default.jpg';

export default {
  props: {
    src: {
      type: String,
      default: defaultImage,
    },
  },
};
</script>

<style>

</style>
