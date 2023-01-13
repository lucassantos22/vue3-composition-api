import { createRouter, createWebHashHistory } from 'vue-router'

import Notes from '@/views/Notes.vue'
import Stats from '@/views/Stats.vue'

const routes = [
    {
        path: '/',
        name: 'notes',
        component: Notes
    },
    {
        path: '/stats',
        name: 'stats',
        component: Stats
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})