<template>
    <div>
        <h1  style="padding: 15px;">in develop</h1>
        <productDetail :product="currentProduct"/>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import {useRoute, useRouter} from'vue-router'
    import api from '@/api.js'
    import productDetail from '@/components/productDetail.vue';

    const route = useRoute()
    const router = useRouter()
    let currentProduct = ref({})

    onMounted(async () => {
        currentProduct = await api.getProduct(route.params.id)
    })
</script>

<style scoped>

</style>