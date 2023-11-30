<template>
    <div class="container">
        <div class="sidebar-toggle" @click="toggleMenu">&#5125;</div>
        <layoutHeader/>
        <layoutSidebar :openSidebar="isOpenMenu"/>
        <div :class="['content', {content__full:  !isOpenMenu}]">
            <router-view/>
        </div> 
    </div>
</template>

<script setup>
import layoutHeader from '@/components/layout/header.vue'
import layoutSidebar from '@/components/layout/sidebar.vue'

import {ref} from 'vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
}
</script>

<style lang="sass" scoped>
.content
    max-width: 1440px
    margin-left: 230px
    padding: 70px
    transition: all 0.2s
    &__full
        margin-left: 0
.sidebar-toggle
    position: fixed
    left: 0
    width: 20px
    background-color: var(--primary)
    height: 100%
    z-index: 11
    cursor: pointer
    color: #fff
    display: flex
    align-items: center
    justify-content: center


@media (max-width:632px)
    .content
        margin-left: 0
@media (max-width:400px)
    .content
        padding: 30px
        padding-top: 70px
</style>
