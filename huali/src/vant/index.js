import Vue from 'vue'
import {
  Swipe,
  SwipeItem,
  Icon,
  Tabbar,
  TabbarItem,
  TreeSelect,
  Card ,
  Stepper,
  Toast,
  Field,
  Cell, 
  CellGroup,
  Button
} from 'vant'
export default () => {
  Vue.use(Swipe).use(SwipeItem)
  Vue.use(Tabbar).use(TabbarItem)
  Vue.use(Icon)
  Vue.use(TreeSelect)
  Vue.use(Card);
  Vue.use(Stepper);
  Vue.use(Toast);
  Vue.use(Field);
  Vue.use(Button);
  Vue.use(Cell).use(CellGroup);
}
