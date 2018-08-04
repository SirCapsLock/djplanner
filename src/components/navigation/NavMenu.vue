<template>
    <ul class="list-reset">
        <NavMenuItem title="dashboard" route="/"></NavMenuItem>
        <NavMenuItem title="music" route="music"></NavMenuItem>
        <NavMenuItem title="timeline" route="timeline"></NavMenuItem>
        <NavMenuItem title="bridal party" route="bridal-party"></NavMenuItem>
    </ul>
</template>

<script>
import NavMenuItem from './NavMenuItem';

export default {
  components: { NavMenuItem },
  data() {
    return {

    };
  },

};
</script>

<style>

</style>
