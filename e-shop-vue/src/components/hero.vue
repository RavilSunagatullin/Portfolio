<template>
    <div class="hero">
        <heroInfo
            title="Luxury homeware for people who love timeless design quality"
            description="Shop the new Spring 2022 collection today"
            link="View collection"
            path="/path1"
            colorTitle="var(--black)"
            colorDescription="var(--black)"
            colorLink="lightGray"
            height="50%"
        />
    </div>
</template>

<script setup>
    import heroInfo from '@/components/hero-info.vue';
</script>

<style scoped>
.hero{
    height: 80vh;
    background-image: url('/image/Hero.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 80px;
}
@media (max-width:750px) {
    .hero{
        padding: 10px 20px;
        align-items: start;
    }
}
</style>