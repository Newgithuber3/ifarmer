import Vue from 'vue'
import Router from 'vue-router'
import product_main from "../views/product_main";


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/product_main',
      name: 'product_main',
      component: () => import('@/views/product_main')
    },
    {
      path: '/product_detail',
      name: 'product_detail',
      component: () => import('@/views/product_detail')
    },
    {
      path:'/login',
      name:'login',
      component: () => import('views/login')
    },
    {
      path:'/register',
      name:'register',
      component: () => import('views/register')
    },
    {
      path:'/cart',
      name:'cart',
      component: () => import('views/cart')
    },
    {
      path:'/order',
      name:'order',
      component: () => import('views/order')
    },
    {
      path:'/user_settings',
      name:'user_settings',
      component: () =>import('views/user_settings')
    },
    {
      path:'/page1.vue',
      name:'page1.vue',
      component: () =>import('views/page1.vue')
    },
    {
      path:'/page2.vue',
      name:'page2.vue',
      component: () =>import('views/page2.vue')
    }
  ]
})
