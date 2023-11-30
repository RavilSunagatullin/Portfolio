<template>
    <div class="product">
        <router-link :to="`/products/${id}`" >
            <img :src="img" :alt="title" class="product-image">
        </router-link>
        <router-link :to="`/products/${id}`"  class="product-name">{{ title }}</router-link>
        <span class="product-price">£ {{ price }}</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        id:{
            type:String,
            required: true
        },
        img: {
            type:String,
            required: true
        },
        title: {
            type:String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
    })
</script>

<style scoped>
.product{
    margin-bottom: 48px;
}
.product:hover .product-name{
    text-decoration: underline;
}
.product-image{
    display: block;
    margin-bottom: 24px;
    width: 100%;
}
.product-name{
    font-family: var(--clashDisplay);
    display: block;
    color: var(--black);
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
    text-decoration: none;
}
.product-price{
    display: block;
    font-size: 18px;
    color: var(--black)
}
</style>