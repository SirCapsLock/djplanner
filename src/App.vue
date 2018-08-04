<template>
  <div id="app">
    <div class="flex flex-wrap min-h-screen">
      <sidebar></sidebar>
      <main class="w-full lg:w-4/5 flex-no-shrink bg-white p-8">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/main.css';
import Sidebar from '@/components/containers/sidebar/Sidebar';

export default {
  name: 'App',
  components: { Sidebar },
};
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
