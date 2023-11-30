<template>
    <div class="form-input" >
        <input 
            class="input-text"
            :type="type" 
            :placeholder="placeholder" 
            :name="name" 
            :id="name" 
            :value="value"
            @input="updateValue">
            <label :for="name" class="input-label">{{ label }}</label>
            <transition-group>
                <div class="form-error" v-for="element of error" :key="element.$uid">
                    <div class="form-error__message">{{ element.$message }}</div>
                </div>
            </transition-group>
    </div>
</template>

<script setup>
    const emit = defineEmits(['update:value'])
    const props = defineProps({
        value:{
            type:String,
            default: ''
        },
        name:{
            type:String,
            required: true
        },
        type:{
            type:String,
            default: 'text'
        },
        placeholder:{
            type:String,
            required: true
        },
        label:{
            type:String,
            required: true
        },
        error:{
            type:Array,
            required: false
        }

    })
    const updateValue = (e) => {
        emit('update:value', e.target.value)
    }
</script>

<style lang="sass" scoped>
.form 
    &-input 
        margin-top: 30px
        position: relative
        max-width: 300px
    &-error 
        background: var(--danger)
        margin-top: 4px
        border-radius: 7px
        font-size: 13px
        color: #fff
        padding: 5px
.input 
    &-text 
        border: 1px solid var(--primary)
        padding: 0 10px
        height: 40px
        border-radius: 7px
        font-size: 15px
        width: 100%
        position: relative
        z-index: 1
        &:focus 
            & + .input-label 
                z-index: 1
                opacity: 1
                top: -20px
        
        &:not(:placeholder-shown) 
            & + .input-label 
                z-index: 1
                opacity: 1
                top: -20px

    &-label 
        font-weight: bold
        display: block
        position: absolute
        top: 20px
        opacity: 0
        z-index: -1
        transition: .3s
        font-size: 13px
        color: var(--primary)
.v-enter-active,.v-leave-active 
    transition: opacity 0.5s ease
.v-enter-from,.v-leave-to 
    opacity: 0

</style>