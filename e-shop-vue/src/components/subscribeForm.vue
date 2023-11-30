<template>
    <form class="subscribe-form">
        <input 
            type="text" 
            class="text" 
            placeholder="your@email.com" 
            :style="{backgroundColor: bgInput,color:colorText} ">
        <uiButton :color="colorButton ||  'primary'">Sign up</uiButton>
    </form>
</template>

<script setup>
    import uiButton from '@/components/ui/button.vue';
    const props =defineProps({
        bgInput:{
            type:String,
            required: false
        },
        colorButton:{
            type:String,
            required: false
        },
        colorText:{
            type:String,
            required: false
        }
    })
</script>

<style scoped>
.subscribe-form{
    width: fit-content;
    margin: auto;
    margin-top: 40px;
}
.text{
    height: 56px;
    width: 354px; 
    padding: 0 32px;
    font-size: 16px;
    border: none;
}
@media (max-width:1188px) {
    .text{
        width: auto;
    }
}
@media( max-width: 432px){
    .subscribe-form{
        display: flex;
        flex-direction: column;
    }
}
</style>