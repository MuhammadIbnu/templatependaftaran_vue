import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: ()   =>  import('@/views/home.vue') 
    },
    {
        path:'/transaksi',
        name: 'transaksi',
        component:  ()  =>  import('@/views/transaksi.vue')
    }

] 

const Router = createRouter({
    history:createWebHistory(),
    routes
})

export default Router