<template>
  <div id="app">
    <Header></Header>
    <div class="flex flex-wrap min-h-screen">
      <sidebar></sidebar>
      <main class="w-full lg:w-5/6 flex-no-shrink bg-white p-8">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/main.css';
import Header from '@/components/containers/header/Header';
import Sidebar from '@/components/containers/sidebar/Sidebar';

export default {
  name: 'App',
  components: { Header, Sidebar },
};
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
