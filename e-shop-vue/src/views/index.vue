<template>
    <div class="container">

      <Hero/>
      <About/>
      <loader v-if="loading"/>
      <Products v-else :products="popularProducts"/>
      <Ideas/>
      <Subscribe/>
      
    </div>
</template>
  
<script setup>
  import { onMounted, ref } from 'vue';
  import api from '@/api.js';

  import loader from '@/components/ui/loader.vue';
  import Hero from '@/components/hero.vue';
  import About from '@/components/about.vue'
  import Products from '@/components/products.vue';
  import Ideas from '@/components/ideas.vue'
  import Subscribe from '@/components/Subscribe.vue'
  
  const popularProducts = ref([])
  const loading = ref(true)

  onMounted(async () => {
    popularProducts.value = await api.getPopularProducts()
    loading.value = false
  })
</script>
  
<style>

</style>
