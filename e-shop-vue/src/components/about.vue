<template>
    <div class="about">
        <h3 class="about-title">What makes our brand different</h3>
        <div class="about-elements container--small">
            <router-link  
                :to="element.path"
                v-for="(element, i) of about"
                :key="i"
                class="about-element">
                <img :src="element.img" :alt="element.title">
                <h4 class="about-element__title">
                    {{ element.title }}
                </h4>
                <span class="about-element__description">
                    {{ element.description }}
                </span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const about = [
        {
            img: '/svg/delivery.svg',
            title: 'Next day as standard',
            description: 'Order before 3pm and get your order the next day as standard',
            path:'benefits'
        },
        {
            img: '/svg/checkmarkDark.svg',
            title: 'Made by true artisans',
            description: 'Handmade crafted goods made with real passion and craft man ship',
            path:'benefits'
        },
        {
            img: '/svg/purchase.svg',
            title: 'Unbeatable prices',
            description: 'For our materials and quality you will not find better prices anywhere',
            path:'benefits'
        },
        {
            img: '/svg/sprout.svg',
            title: 'Recycled packaging',
            description: 'We use 100% recycled to ensure our footprint is more manageable',
            path:'benefits'
        },
    ]
</script>

<style scoped>
.about{
    padding: 80px 5px 80px 5px;
}
.about-title{
    text-align: center;
    font-size: 24px;
    color:var(--black);
    margin: 0 0 84px 0;
    font-family: var(--clashDisplay);
}
.about-elements{
    display: grid;
    grid-template-columns: repeat(4, 305px);
    margin: 0 auto;
    justify-content: space-between;
}
.about-element:hover .about-element__title{
    text-decoration: underline;
}
.about-element{
    padding: 48px;
    background-color: #f9f9f9;
    text-decoration: none;
    color: var(--black);
}
.about-element img{
    margin-bottom: 12px;
}
.about-element__title{
    margin-bottom: 12px;
    font-family: var(--clashDisplay);
    font-size: 20px;
}
@media (max-width: 1225px){
    .about-elements{
        grid-template-columns: repeat(2, 1fr);
        column-gap: 20px;
        row-gap: 20px;
    }
}
@media (max-width: 435px){
    .about-elements{
        grid-template-columns: repeat(1, 1fr);
        column-gap: 20px;
        row-gap: 20px;
    }
}
</style>