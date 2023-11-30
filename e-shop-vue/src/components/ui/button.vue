<template>
    <button 
        v-if="type === 'button'"
        :class="['btn', 
            {'btn-primary': color === 'primary'}, 
            {'btn-secondary': color === 'secondary'}, 
            {'btn-lightGray': color === 'lightGray'},
            {'btn-dark': color === 'dark'},
            {' btn-white': color === 'white'}]">
        <slot/>
    </button>
    <router-link 
        v-else
        :to="to"
        :class="['btn', 
            {'btn-primary': color === 'primary'}, 
            {'btn-secondary': color === 'secondary'}, 
            {'btn-lightGray': color === 'lightGray'}]">
        <slot/>
    </router-link>
</template>

<script setup>
    const props = defineProps({
        color:{
            type:String,
            default: 'primary'
        },
        type:{
            type:String,
            default:'button'
        },
        to:{
            type:String,
            required:false
        }
    })
</script>
    
<style scoped>
.btn{
    padding: 0px 32px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    font-size: 16px;
    height: 56px;
}
.btn:hover{
    opacity: 0.8;
    text-decoration: underline;
}
.btn-primary{
    color: var(--white);
    background-color:var(--whiteTransparent);
}
.btn-secondary{
    background-color: rgba(249, 249, 249, 0.15);
    color: var(--black);
}
.btn-lightGray{
    background-color: #f9f9f9;
    color:var(--black);
}
.btn-dark{
    background-color: var(--black);
    color: var(--white);
}
.btn-white{
    background-color: #fff;
    color:var(--black)
}
</style>