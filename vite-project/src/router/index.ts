import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'

const routes = [
    {
        path: '/', redirect: (to: any) => {
            return { path: '/main/index' }
        },
    },
    {
        path: '/main',
        component: Layout,
        name: 'Main',
        children: [
            {
                path: 'index',
                name: 'Index',
                component: () => import('../views/main.vue'),
            }
        ]
    },
    {
        path: '/app-vue:afterUser(.*)',
        name: 'appVue',
        component: Layout,
    },
    {
        path: '/app-react:afterUser(.*)',
        name: 'appReact',
        component: Layout,
    },
    {
        path: '/app-angular',
        name: 'appAngular',
        component: Layout,
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/'
    },
    {
        path: '/nav',
        component: Layout,
        name: 'Nav',
        children: [
            {
                path: 'table',
                name: 'Table',
                component: () => import('../views/table.vue'),
            },
            {
                path: 'list',
                name: 'List',
                component: () => import('../views/list.vue'),
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router


