<template>
  <div class="container">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script setup>
  import Header from '@/components/layout/header.vue';
  import Footer from '@/components/layout/footer.vue';
</script>

<style>
  @import url('/src/assets/style/global.css');
</style>
