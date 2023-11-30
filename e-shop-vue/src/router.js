import {createRouter, createWebHistory} from 'vue-router'
import index from '@/views/index.vue'
import productPage from '@/views/productPage.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/products/:id',
            name: 'productPage',
            component: productPage
        },
        { 
            path: '/:pathMatch(.*)*',
            name: '404',
            component: PageNotFound }
    ]
})
export default router