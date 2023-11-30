<template>
    <div>
        <h1 class="heading-1">Tabs</h1>
        <uiTabs
            :names="tabs"
            :selectedTab="selectedTab"
            @changeTab="changeTab">
        <div class="" v-if="selectedTab === 'About'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident reprehenderit sint soluta, distinctio laudantium, alias error enim cum iure veritatis, fugit accusantium est ratione iusto numquam recusandae. Totam, ullam.</div>
        <div class="" v-if="selectedTab === 'About2'">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae itaque, officiis voluptates animi tempora facilis sit? Optio itaque deleniti saepe ad? Harum hic ex deleniti cum amet, corporis minus repellat?</div>
        <div class="" v-if="selectedTab === 'About3'">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit obcaecati similique vel doloribus aspernatur suscipit, delectus nostrum rem ab maiores enim quam sed amet eius ipsam quisquam. Maiores, saepe a.</div>
        </uiTabs>
    </div>
</template>

<script setup>
    import uiTabs from '@/components/uiTabs.vue';
    import {ref} from 'vue'

    const tabs = [
        {name:'About', label:'Something about the project'},
        {name:'About2', label:'Something about the project'},
        {name:'About3', label:'Something about the project'},
    ]

    const selectedTab = ref('About')

    const changeTab = (tabName) => {
        selectedTab.value = tabName
    }
</script>

<style lang="sass" scoped>

</style>