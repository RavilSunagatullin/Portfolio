<template>
    <div class="product">
        <div>
            <img :src="product.image" :alt="product.name">
        </div>
        <div>description</div>
    </div>
</template>

<script setup>
    const props = defineProps({
        product: {
            type: Object,
            default: () => {},
            required:  true
        }
    })
    
</script>

<style scoped>
    .product{
        padding: 50px 80px;
        background-color: #f9f9f9;
        display: grid;
        grid-template-columns: 1fr 500px;
        column-gap: 65px;
    }
</style>