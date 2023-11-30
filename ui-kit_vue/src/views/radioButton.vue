<template>
    <div>
        <h1 class="heading-1">Radio button</h1>
        <h2 class="heading-2">Basic</h2>
        <div class="line line__block">
            <p>Selected radio button: {{ selectedBtn }}</p>
            <div 
                v-for="radioBtn in radioButtons"
                :key="radioBtn.id">
                    <uiRadioButton
                        :value="radioBtn.name"
                        :label="radioBtn.name"
                        :id="radioBtn.id"
                        name="radioBtn"
                        v-model:checkedValue="selectedBtn"/>
            </div>
        </div>
        <h2 class="heading-2">Disabled</h2>
        <div class="line line__block">
            <uiRadioButton
                value="Radiobutton is disable"
                label="Radiobutton is disable"
                id="RadiobuttonDisable"
                name="disable"
                v-model:checkedValue="disabledRadioChecked"
                :disabled="disabledRadio"/>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import uiRadioButton from '@/components/uiRadioButton.vue';
const radioButtons = ref([
    {
        name: 'first radio',
        id: 'radio-1'
    },
    {
        name: 'second radio',
        id: 'radio-2'
    },
    {
        name: 'third radio',
        id: 'radio-3'
    },
    {
        name: 'fourth radio',
        id: 'radio-4'
    },
])
const selectedBtn = ref('')

const disabledRadio = ref(true)
const disabledRadioChecked = ref(true)
</script>

<style lang="sass" scoped>

</style>