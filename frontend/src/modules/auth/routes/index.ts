import { RouteRecordRaw } from "vue-router";

export const authRoutes: RouteRecordRaw = {
    path:'/',
    name:'auth',
    redirect: {name:'login'},
    component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
    children:[
        {
            path: 'login',
            name: 'login',
            component: () => import('@/modules/auth/views/LoginView.vue')
        },
        {
            path: 'register',
            name: 'register',
            component: () => import('@/modules/auth/views/RegisterView.vue')
        },
    ]

}
