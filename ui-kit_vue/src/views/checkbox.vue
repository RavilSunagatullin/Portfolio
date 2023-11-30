<template>
    <div>
        <h1 class="heading-1">Checkbox</h1>
        <h2 class="heading-2">Checkbox active</h2>
        <div class="line">
            <uiCheckbox
                label="Checkbox active"
                id="checkboxActive"
                name="checkboxActive"
                value="checkboxActive"
                v-model:checked="checkboxActive"/>
        </div>
        <h2 class="heading-2">Checkbox disabled</h2>
        <div class="line">
            <uiCheckbox
                label="Checkbox disabled"
                id="checkboxDisabled"
                name="checkboxDisabled"
                value="checkboxDisabled"
                :disabled="checkboxDisabled"
                v-model:checked="checkboxDisabledChecked"/>
        </div>
        <h2 class="heading-2">Checkbox group</h2>
        <div class="line line__block">
            <p>Selected checks: {{ selectedCheck }}</p>
            <CheckboxGroup 
                :options="listOfChecks" 
                name="checks" 
                v-model:value="selectedCheck"
                />
        </div>
        <h2 class="heading-2">switch</h2>
        <div class="line line__block">
            <p>switch: {{ switchProfessional }}</p>
            <uiCheckbox
                label="switch example"
                id="switchProfessional"
                name="switchProfessional"
                value="switchProfessional"
                type="switch"
                v-model:checked="switchProfessional"/>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import uiCheckbox from '@/components/checkbox/uiCheckbox.vue';
import CheckboxGroup from '@/components/checkbox/checkboxGroup.vue';

const checkboxActive = ref(true)
const checkboxDisabled = ref(true)
const checkboxDisabledChecked = ref(true)

const listOfChecks = ref([
    {name: 'First check',id: 'Check-1'},
    {name: 'Second check',id: 'Check-2'},
    {name: 'Third check',id: 'Check-3'},
    {name: 'Fourth check',id: 'Check-4'},
])
const selectedCheck = ref(['Check-1'])

const switchProfessional = ref(false)
</script>

<style lang="sass" scoped>

</style>