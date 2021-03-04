// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './views/App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

import mainNavBar from './components/common/mainNavBar.vue';

Vue.use(VueAxios, axios)
Vue.use(ElementUI);

Vue.config.productionTip = false

// 引用axios，并设置基础URL为后端服务api地址

axios.defaults.baseURL = "http://localhost:8090"
//设置全局，每次ajax请求携带cookies
// axios.defaults.withCredentials = true
// 将API方法绑定到全局
Vue.prototype.$axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App,mainNavBar},
  template: '<App/>'
})
