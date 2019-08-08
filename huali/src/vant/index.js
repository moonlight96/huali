import Vue from 'vue'
import {
  Swipe,
  SwipeItem,
  Icon,
  Tabbar,
  TabbarItem,
  TreeSelect
} from 'vant'
export default () => {
  Vue.use(Swipe).use(SwipeItem)
  Vue.use(Tabbar).use(TabbarItem)
  Vue.use(Icon)
  Vue.use(TreeSelect)
}
