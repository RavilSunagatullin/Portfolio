import { createRouter, createWebHistory } from "vue-router";
import index from '@/views/index.vue'
import typography from '@/views/typography.vue'
import button from '@/views/button.vue'
import checkbox from '@/views/checkbox.vue'
import radioButton from '@/views/radioButton.vue'
import progress from '@/views/progress.vue'
import input from '@/views/input.vue'
import tabs from '@/views/tabs.vue'
import table from '@/views/table.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'index',
            component: index
        },
        {
            path:'/button',
            name: 'button',
            component: button
        },
        {
            path:'/typography',
            name: 'typography',
            component: typography
        },
        {
            path:'/checkbox',
            name: 'checkbox',
            component: checkbox
        },
        {
            path:'/radio-button',
            name: 'radioButton',
            component: radioButton
        },
        {
            path:'/progress-bar',
            name: 'progress',
            component: progress
        },
        {
            path:'/input',
            name: 'input',
            component: input
        },
        {
            path:'/tabs',
            name: 'tabs',
            component: tabs
        },
        {
            path:'/table',
            name: 'table',
            component: table
        },

    ]
})

export default router