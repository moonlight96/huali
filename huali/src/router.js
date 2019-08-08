import Vue from 'vue'
import Router from 'vue-router'
// import { Tabbar } from 'vant';
import Tabbars from './views/Tabbars'
import Detail from './views/Detail'
// import axios from 'axios'
const Home = () => import('./views/tabbar/Home')
const List = () => import('./views/tabbar/List')
const Bag = () => import('./views/tabbar/Bag')
const Mine = () => import('./views/tabbar/Mine')
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'tabbar',
      path: '/tabbar',
      component: Tabbars,
      children: [{
        path: 'home',
        name: 'home',
        component: Home
      }, {
        path: 'list',
        name: 'list',
        component: List
      }, {
        path: 'bag',
        name: 'bag',
        component: Bag
      }, {
        path: 'mine',
        name: 'mine',
        component: Mine
      }]
    },
    {
      path: '/detail',
        name: 'detail',
        component: Detail
    },
    {
      path: '/',
      alias: '/index.html',
      redirect: () => {
        return '/tabbar/home'
      }
    }
  ]
})
