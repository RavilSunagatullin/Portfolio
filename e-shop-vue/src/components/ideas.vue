<template>
    <div class="ideas container--small">
        <div class="ideas-info">
            <heroInfo
                title="It started with a small idea"
                description="A global brand with local beginnings, our story began in a small studio in South London in early 2014"
                link="View collection"
                path="/path2"
                background="var(--black)"
                colorTitle="#fff"
                colorDescription="#fff"
                colorLink="primary"
            />
        </div>
        <div class="ideas-image">
            <img src="/image/feature.jpg" alt="room">
        </div>
    </div>
</template>

<script setup>
    import heroInfo from '@/components/hero-info.vue';
</script>

<style scoped>
.ideas{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    margin-bottom: 60px;
}
.ideas-image{
    overflow: hidden;
    object-fit: cover;
    height: 100%;
}
@media (max-width:700px){
    .ideas{
        margin-left:calc((100vw - 630px)/2);
        display: flex;
        flex-direction: column;
    }

}
@media (max-width:637px){
    .ideas{
        margin: 60px 0;
    }
}
</style>