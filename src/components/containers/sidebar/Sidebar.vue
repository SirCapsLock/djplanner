<template>
    <aside class="w-full lg:w-1/6 bg-grey-darkest flex-no-shrink text-white pt-4">
      <NavMenu></NavMenu>
    </aside>
</template>

<script>
import SideHeader from '@/components/containers/sidebar/SideHeader';
import NavMenu from '@/components/navigation/NavMenu';

export default {
  components: { SideHeader, NavMenu },
  data() {
    return {

    };
  },
};
</script>

<style>

</style>

