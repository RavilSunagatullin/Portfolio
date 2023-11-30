<template>
  <div class="product-container">
    <div class="products container--small">
        <Product
            v-for="product of products" 
            :key="product.id"
            :id="product.id"
            :img="product.img" 
            :title="product.title"
            :price="product.price"/>
    </div>
    <div class="products-link">
      <uiButton 
            color="lightGray" 
            type="button" 
            >View collection</uiButton>
    </div>
  </div>
    
</template>

<script setup>

    import Product from '@//components/product.vue';
    import { ref } from 'vue';
    import uiButton from '@/components/ui/button.vue';

    const props =defineProps ({
      products:{
        required:true
      }
    })
</script>

<style scoped>
.product-container{
  margin-bottom: 56px;
  padding: 5px;
}
.products{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    margin: 0 auto;
}
.products-link{
  text-align: center;
}
@media (max-width: 788px) {
  .products{
    grid-template-columns: repeat(2, 1fr);
    place-content: center;
  }
}
</style>