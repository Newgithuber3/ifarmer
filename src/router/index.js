import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('views/home')
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
      component: () =>import('views/cart')
    }
  ]
})
