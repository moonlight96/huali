import Vue from 'vue'
import Router from 'vue-router'
// import { Tabbar } from 'vant';
import Tabbars from './views/Tabbars'
import Detail from './views/Detail'
import Shopbag from './views/Shopbag'
import Login from './views/Login'
import Reg from './views/Reg'
import axios from 'axios'
const Home = () => import('./views/tabbar/Home')
const List = () => import('./views/tabbar/List')
const Bag = () => import('./views/tabbar/Bag')
const Mine = () => import('./views/tabbar/Mine')
Vue.use(Router)

const router = new Router({
  routes: [{
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
        component: Mine,
        meta: {
          requireAuth: true
        }
      }]
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/shopbag',
      name: 'shopbag',
      component: Shopbag
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
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

router.beforeEach(async (to, from, next) => {
  // ${//to and from are Route Object,next() must be called to resolve the hook}
  // params: {
  //   token: 'asdfghjhgfdsasdtyrtetw'
  // }
  let isLogin = localStorage.getItem('isLogin')
  if (isLogin ||  to.name === 'home' ||  to.name === 'reg'|| to.name === 'detail' || to.name == 'bag'||to.name=='mine'||to.name =="login") {
    next()
    return
  } else {
    next({
      name: 'login'
    })
  }
})
export default router;
