<template>
    <div>
        <h1 class="heading-1">Table</h1>
        <span class="heading-3">Type sort: {{ typeSort }}</span><br>
        <span class="heading-3">Sort field: {{ sortField }}</span>
        <uiTable 
            :head="tableHeads"
            :columnTemplates="tableSizeColumns"
            @sorting="setSort">
            <uiTableRow
                v-for="book of sorting" :key="book.id"
                :columnTemplates="tableSizeColumns"
                :bgRow="book.bg">
                <uiTableColumn :columnTitle="tableHeads[0]+':'">{{ book.id }}</uiTableColumn>
                <uiTableColumn :columnTitle="tableHeads[1]+':'">{{ book.author }}</uiTableColumn>
                <uiTableColumn :columnTitle="tableHeads[2]+':'">{{ book.title }}</uiTableColumn>
                <uiTableColumn :srcImg="book.image" image/>
                <uiTableColumn><uiButton label="read online"/></uiTableColumn>
            </uiTableRow>
        </uiTable>
    </div>
</template>

<script setup>
import uiTable from '@/components/table/uiTable.vue';
import uiTableRow from '@/components/table/uiTableRow.vue';
import uiTableColumn from '@/components/table/uiTableColumn.vue';
import uiButton from '@/components/uiButton.vue';
import {ref, computed} from 'vue'

const tableHeads = ['Id', 'Author', 'Title', 'Cover', '']
const tableSizeColumns = '50px 1fr 2fr 150px 140px'

const sortField = ref('id')
const typeSort = ref('asc')

const setSort = (name) => {
    if (sortField.value === name) {
    if (typeSort.value === 'asc') {
        typeSort.value = 'desc'
    } else {
        typeSort.value = 'asc'
    }
    } else {
        sortField.value = name
    }
}

const books = ref([
{
    id: 1,
    author: 'Dmitry Glukhovsky',
    title: 'Metro 2033',
    image: 'https://upload.wikimedia.org/wikipedia/ru/6/64/%D0%9C%D0%B5%D1%82%D1%80%D0%BE_2035.jpg',
    bg: 'var(--warning)'
},
{
    id: 12,
    author: 'James Clear',
    title: 'Atomic Habits: An Easy',
    image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: 'var(--success)'
},
{
    id: 2,
    author: 'J. K. Rowling',
    title: 'Harry Potter and the Order of the Phoenix',
    image: 'https://img4.labirint.ru/rc/5916ab9999d5dee135b5b4175916592b/363x561q80/books4/35604/cover.jpg?1280394613',
    bg: 'var(--second)'
}
])
const sorting = computed(()=>{
    return books.value.sort((a,b)=>{
        let modifier = 1
        if(typeSort.value === 'desc') modifier = -1
        if(a[sortField.value] < b[sortField.value]) return -1*modifier
        if(a[sortField.value] > b[sortField.value]) return 1*modifier
        return 0
    })
})
</script>

<style lang="sass" scoped>

</style>