<template>
    <router-link :to="this.route" tag="li" exact>
      <li class="flex p-5 cursor-pointer">
        <div class="w-1/5">
          ()
        </div>
        <div class="w-4/5 capitalize">
            {{ title }}
        </div>
      </li>
    </router-link>
</template>

<script>
export default {
  props: ['title', 'icon', 'route'],
  data() {
    return {
    };
  },
};
</script>

<style>

</style>
