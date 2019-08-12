import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//全局更改
import qs from "qs";//配合qs模块转化post请求的参数，记得先npm install qs
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
// import './assets/iconfont.css'
import Vant from './vant/index.js'
import Toast from './vant/index'
import './vant/index.css'
Vant()
Vue.prototype.$toast = Toast;

// Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
