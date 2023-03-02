import { createRouter, createWebHashHistory } from 'vue-router'

import Notes from '@/views/Notes.vue'
import Stats from '@/views/Stats.vue'
import Auth from '@/views/Auth.vue'
import EditNote from '@/views/EditNote.vue'

const routes = [
    {
        path: '/',
        name: 'notes',
        component: Notes
    },
    {
        path: '/edit/:id',
        name: 'edit-note',
        component: EditNote
    },
    {
        path: '/stats',
        name: 'stats',
        component: Stats
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})