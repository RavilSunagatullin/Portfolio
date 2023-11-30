<template>
    <div class="tab-nav">
        <span 
            :class="['tab-nav__item', {'selected': selectedTab === tab.name}]" 
            v-for="tab in names"
            @click="clickOnTab(tab.name)">
            {{ tab.name }}
        </span>
    </div>
    <div class="tab-content">
        <slot/>
    </div>
</template>

<script setup> 
    const emit = defineEmits(['changeTab'])
    const props = defineProps({
        names:{
            type: Array,
            required: true
        },
        selectedTab:{
            type:String,
            required:false
        },

    })
    const clickOnTab = (tabName) => {
        emit('changeTab', tabName)
    }   
</script>

<style lang="sass" scoped>
.tab 
    &-nav 
        display: flex
        align-items: center
        margin-bottom: 20px
        &__item 
            height: 40px
            display: flex
            align-items: center
            justify-content: center
            margin-right: 10px
            border-radius: 7px
            cursor: pointer
            border: 1px solid var(--primary)
            padding: 0 20px
            font-size: 15px
            &:hover 
                background: var(--primary-hover)
                color: #fff
                transition: 0.2s
            &.selected 
                background: var(--primary)
                color: #fff
    &-content 
        padding: 20px
        border-radius: 7px
        background: #fff
        
@media (max-width: 345px)
    .tab-nav
        display: block
        &__item 
            margin-top: 15px
</style>