<template>
    <div 
        class="table-row" 
        :style="{'grid-template-columns': columnTemplates, 'background-color': bgRow}">
        <slot></slot>
    </div>
</template>

<script setup>
    const props = defineProps({
        columnTemplates:{
            type: String,
            required: false
        },
        bgRow:{
            type:String,
            required: false
        }
    })
</script>

<style lang="sass" scoped>
.table-row
    border-bottom: 2px solid #eeeff4
    position: relative
    display: grid
    column-gap: 10px
    align-items: center
    padding: 0 16px
    border-radius: 8px
    @media screen and (max-width:767px)
        display: block
    &:last-child
        border-bottom: none
    &--items-center
        justify-content: center
</style>