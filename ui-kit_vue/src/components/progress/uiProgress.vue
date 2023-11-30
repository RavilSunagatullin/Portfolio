<template>
    <div class="progress-container" :style="[{'max-width': maxWidth}]">
        <span class="progress-percent" :style="[{'text-align': position, 'color': `var(--${color})`}]">{{ percent }}%</span>
        <div class="progress" :style="[{'background-color': `var(--${color}-hover)`}]">
            <div class="progress-bar" :style="[{'width': `${percent}%`, 'background-color': `var(--${color})`}]"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    maxWidth: {
        type: String,
        default: '500px'
    },
    percent:{
        type:Number,
        required:true
    },
    position:{
        type: String,
        default: 'center'
    },
    color:{
        type: String,
        default: 'primary'
    }
})
</script>

<style lang="sass" scoped>
.progress 
    height: 10px
    border-radius: 4px
    &-container 
        margin-bottom: 20px
        overflow: hidden
    &-bar
        background: #000
        height: 100%
        border-radius: 4px
        transition: .5s
    &-percent 
        display: block
        text-align: start
        font-weight: bold 
        font-size: 17px
        margin-bottom: 10px
        margin-left: 5px

</style>