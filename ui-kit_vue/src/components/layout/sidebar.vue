<template>
    <div :class="['sidebar', {sidebar__open: openSidebar}]" >
        <router-link 
            class="sidebar__link "
            v-for="link in links" 
            :key="link.name"
            :to="link.href">{{ link.name }}</router-link>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    const props =defineProps({
        openSidebar:{
            type:Boolean,
            required: true
        }
    })

    const links =  ref([
        {
                name:'Typography',
                href:  '/typography'
        },    
        {
            name:'Button',
            href:'/button'
        },
        {
            name:'Checkbox',
            href:  '/checkbox'
        },
        {
            name:'Radio button',
            href:  '/radio-button'
        },
        {
            name:'Progress bar',
            href:  '/progress-bar'
        },
        {
            name:'Input',
            href:  '/input'
        },
        {
            name:'Tabs',
            href:  '/tabs'
        },
        {
            href:'/table',
            name: 'Table',
        },
    ])
</script>

<style lang="sass" scoped>
.sidebar
    left: 0
    top: 62px
    height: 100%
    background: #fff
    position: fixed
    width: 250px
    padding: 30px
    transition: all 0.2s ease
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.07)
    transform: translateX(-250px)
    z-index: 10
    &__open
        transform: translateX(0)
    &__link
        padding-left: 10px
        display: block
        border-radius: 12px
        border: 2px solid #fff
        transition: all 0.2s        
        font-weight: 400
        font-size: 20px
        margin-bottom: 10px
        color: inherit
        &:hover
            color: var(--primary)
    
    
</style>