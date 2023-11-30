<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-top">
                <div class="footer-menu">
                    <div class="footer-menu-column">
                        <span class="footer-menu-title">Menu</span>
                        <router-link to="/" class="footer-menu__link">New  arrivals</router-link>
                        <router-link to="/" class="footer-menu__link">Best sellers</router-link>
                        <router-link to="/" class="footer-menu__link">Recently viewed</router-link>
                        <router-link to="/" class="footer-menu__link">Popular this week</router-link>
                        <router-link to="/" class="footer-menu__link">All products</router-link>
                    </div>
                    <div class="footer-menu-column">
                        <span class="footer-menu-title">Categories</span>
                        <router-link to="/" class="footer-menu__link">Crockery</router-link>
                        <router-link to="/" class="footer-menu__link">Furniture</router-link>
                        <router-link to="/" class="footer-menu__link">household products</router-link>
                        <router-link to="/" class="footer-menu__link">Plant pots</router-link>
                        <router-link to="/" class="footer-menu__link">Chairs</router-link>
                        <router-link to="/" class="footer-menu__link">Crockery</router-link>
                    </div>
                    <div class="footer-menu-column">
                        <span class="footer-menu-title">Our company</span>
                        <router-link to="/" class="footer-menu__link">About us</router-link>
                        <router-link to="/" class="footer-menu__link">Vacancies</router-link>
                        <router-link to="/" class="footer-menu__link">Contact us</router-link>
                        <router-link to="/" class="footer-menu__link">Privacy</router-link>
                        <router-link to="/" class="footer-menu__link">Returns policy</router-link>
                    </div>
                </div>
                <div class="footer-subscribe">
                    <subscribeForm colorButton="white" bgInput="#4e4d93" colorText="#ffffff"/>
                </div>
            </div>
            <div class="footer-bottom">
                <span class="copyright">
                    Copyright 2022 Avion LTD
                </span>
                <div class="socials">
                    <router-link to="/" class="socials__link"><img class="social__img" src="/svg/linkedin.svg" alt=""></router-link>
                    <router-link to="/" class="socials__link"><img class="social__img" src="/svg/facebook.svg" alt=""></router-link>
                    <router-link to="/" class="socials__link"><img class="social__img" src="/svg/instagram.svg" alt=""></router-link>
                    <router-link to="/" class="socials__link"><img class="social__img" src="/svg/skype.svg" alt=""></router-link>
                    <router-link to="/" class="socials__link"><img class="social__img" src="/svg/twitter.svg" alt=""></router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script  setup>
    import subscribeForm from '@/components/SubscribeForm.vue'
</script>

<style scoped>
.footer {
    background-color: var(--black);
    color: var(--white);
}
.footer-content{
    padding: 58px 82px ;
}
.footer-top {
    display: grid;
    grid-template-columns: 540px 1fr;
    column-gap: 110px;
    border-bottom: 1px solid #4e4d93;
    padding-bottom: 48px;
}
.footer-menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
}
.footer-menu-title {
    width: 120px;
    font-size: 16px;
    display: block;
    margin-bottom: 12px;
}
.footer-menu__link {
    display: block;
    color: var(--white);
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 12px;
}
.footer-menu__link:last-child{
    margin-bottom: 0;
}
.footer-menu__link:hover{
    text-decoration: underline;
}
.footer-bottom {
    padding-top: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.copyright {
    font-size: 14px;
}
.socials {
    display: flex;
    gap:24px;
}
@media (max-width:1288px){
    .footer-top{
        column-gap: 10px
    }
}
@media (max-width: 1069px){
    .footer-top{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
    }
    .footer-menu{
        place-items: center;
        align-items: start
    }
    .footer-content{
        padding: 29px 41px;
    }
}
@media (max-width: 550px) {
    .footer-menu {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 20px;
    }
}
</style>