<template>
    <div>
        <h1 class="heading-1">Progress</h1>
        <h2 class="heading-2">Progress bar</h2>
        <div class="line line__block">
            <uiProgress
                :percent="percentBar"/>
            <div class="line">
                <uiButton
                    label="add 15%" @click="addPercentBar(15)"/>
                <uiButton
                    label="remove 10%" @click="removePercentBar(10)" />
            </div>
        </div>
        <h2 class="heading-2">Position start</h2>
        <div class="line line__block">
            <uiProgress
                :percent="percentBar"
                position="start"/>
        </div>
        <h2 class="heading-2">Colors</h2>
        <div class="line line__block">
            <uiProgress
                :percent="percentBar"
                color="second"/>
            <uiProgress
                :percent="percentBar"
                color="success"/>
            <uiProgress
                :percent="percentBar"
                color="info"/>
            <uiProgress
                :percent="percentBar"
                color="warning"/>
            <uiProgress
                :percent="percentBar"
                color="danger"/>
        </div>
        <h2 class="heading-2">Progress circle</h2>
        <div class="line line-circle">
            <uiProgressCircle
                :percent="percentBar"
                />
            <uiProgressCircle
                :percent="percentBar"
                color="warning"
                />
            <uiProgressCircle
                :percent="percentBar"
                color="success"
                />
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import uiProgress from '@/components/progress/uiProgress.vue';
import uiProgressCircle from '@/components/progress/uiProgressCircle.vue';
import uiButton from '@/components/uiButton.vue';
const percentBar = ref(35)

const addPercentBar = (num) =>{
    percentBar.value += num
    if(percentBar.value > 100){
        percentBar.value = 100
    }
}
const removePercentBar = (num) =>{
    percentBar.value -= num
    if(percentBar.value < 0){
        percentBar.value = 0
    }
}
</script>

<style lang="sass" scoped>
.line-circle 
    gap: 20px
    justify-content: start
@media  (max-width: 540px)
    .line-circle 
        justify-content: center
</style>