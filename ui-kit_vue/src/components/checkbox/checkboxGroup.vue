<template>
    <div v-for="option in options" :key="option.id">
        <uiCheckbox
            :label="option.name"
            :id="option.id"
            :name="name"
            :value="option.name"
            :checked="value.includes(option.id)"
            group
            @updateCheckboxGroup="check"/>
    </div>
</template>

<script setup>
import uiCheckbox from '@/components/checkbox/uiCheckbox.vue';

const emit = defineEmits(['update:value'])
const props =  defineProps({
    options:{
        type:Array,
        required: true,
        validator:(value) =>{
            const hasNameKey = value.every((option) => Object.keys(option).includes('name'))
            const hasIdKey = value.every((option) => Object.keys(option).includes('id'))
            return hasIdKey && hasNameKey
        }
    },
    name:{
        type:String,
        required: true,
    },
    value:{
        type:Array,
        required:true
    },
})
const check = (params) =>{
    let updateValue= [...props.value]
    if(params.checked){
        updateValue.push(params.optionId)
    }
    else{
        updateValue.splice(updateValue.indexOf(params.optionId), 1)
    }
    emit('update:value', updateValue)
}
</script>

<style lang="sass" scoped>

</style>