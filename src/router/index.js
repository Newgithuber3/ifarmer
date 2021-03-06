import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { getToken } from "@/utils/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { keepAlive: true }
  },
  {
    path: "/productList",
    name: "ProductList",
    component: () => import("@/views/product/index"),
    meta: { keepAlive: true }
  },
  {
    path: "/detail",
    name: "ProductDetail",
    component: () => import("@/views/product/detail"),
    meta: { keepAlive: true }
  },
  {
    path: "/userInfo",
    name: "UserInfo",
    component: () => import("@/views/userInfo/index"),
    meta: { keepAlive: true }
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/cart/index"),
    meta: { keepAlive: true, auth: true }
  },
  {
    path: "/order",
    name: "MakeOrder",
    component: () => import("@/views/order/index"),
    meta: { keepAlive: true, auth: true }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index"),
    meta: { keepAlive: false }
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/login/register/index"),
    meta: { keepAlive: false }
  }
];

const router = new VueRouter({
  routes
});
const createRouter = () =>
  new VueRouter({
    routes
  });

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

router.beforeEach((to, from, next) => {
  // to要跳转到的路径
  // from从哪个路径来
  // next往下执行的回调
  // 在localStorage中获取token
  let token = getToken();
  // 判断该页面是否需要登录
  if (to.meta.auth) {
    // 如果token存在直接跳转
    if (token) {
      next();
    } else {
      // 否则跳转到login登录页面
      next({
        path: "/login",
        // 跳转时传递参数到登录页面，以便登录后可以跳转到对应页面
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    // 如果不需要登录，则直接跳转到对应页面
    next();
  }
});
export default router;
