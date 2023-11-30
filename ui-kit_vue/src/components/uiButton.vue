<template>
    <button :class="[
        'btn', 
        `btn__${color}`,
        {'btn__rounded': rounded},
        {'btn__outline': outline},
        {'btn__icon': icon},
        {'btn__large': size === 'large'}]"
        @click="clickOnButton"
        :disabled="disable">
        <span v-if="icon">
            <font-awesome-icon :icon="`fa-regular fa-${icon}`" />
        </span>
        <span v-else>{{ label }}</span>
    </button>
</template>

<script setup>
    const props = defineProps({
        label:{
            type:String,
            default: 'button'
        },
        color:{
            type:String,
            default:'primary'
        },
        rounded:{
            type: Boolean,
            required: false
        },
        disable:{
            type: Boolean,
            required: false
        },
        outline:{
            type: Boolean,
            required: false
        },
        icon:{
            type:String,
            required:false
        },
        size:{
            type:String,
            default: 'normal'
        }

    })
    const emit = defineEmits(['click'])
    const clickOnButton = () => {
        emit('click')
    }
</script>

<style lang="sass" scoped>
.btn
    // margin-right: 10px
    margin-bottom: 10px
    padding: 0 20px
    height: 40px
    color: #fff
    border-radius: 7px
    border: none
    cursor: pointer
    font-size: 15px
    transition: all 0.2s ease
    &__success
        background: var(--success)
        border: 1px solid var(--success)
        &:enabled:hover
            background: var(--success-hover)
    &__info
        background: var(--info)
        border: 1px solid var(--info)
        &:enabled:hover
            background: var(--info-hover)
    &__warning
        background: var(--warning)
        border: 1px solid var(--warning)
        &:enabled:hover
            background: var(--warning-hover)
    &__danger
        background: var(--danger)
        border: 1px solid var(--danger)
        &:enabled:hover
            background: var(--danger-hover)
    &__primary
        background: var(--primary)
        border: 1px solid var(--primary)
        &:enabled:hover
            background: var(--primary-hover)
    &__second
        background: var(--second)
        border: 1px solid var(--second)
        &:enabled:hover
            background: var(--second-hover)
    &__rounded
        border-radius: 15px
    &:disabled
        opacity: 0.6
        cursor: default
    &__outline
        background: transparent
        color: #333
        &:hover
            color: #fff
    &__icon
        padding: 0
        width: 40px
        height: 40px
        border-radius: 50%
    &__large
        height: 48px
        padding: 0 30px

</style>