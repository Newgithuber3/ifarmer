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
      path: '/product',
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
      path:'/user_settings',
      name:'user_settings',
      component: () =>import('views/user_settings')
    },
    {
      path:'/page1',
      name:'page1',
      component: () =>import('views/page1')
    },
    {
      path:'/page2',
      name:'page2',
      component: () =>import('views/page2')
    }
  ]
})
