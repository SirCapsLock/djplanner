<template>
  <div class="flex items-center justify-between py-6 px-4 border-b-2 border-orange bg-black">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <img src="@/assets/logos/logo-header.png" alt="">
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-white">
      <div class="lg:flex-grow"></div>
      <div>
        <ProfileBox></ProfileBox>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileBox from '@/components/modules/ProfileBox';

export default {
  components: { ProfileBox },
};
</script>


<style>

</style>

