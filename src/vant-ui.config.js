import { Button, Tabbar, TabbarItem, Tab, Tabs, Icon, Cell, CellGroup, Field, Swipe, SwipeItem, Lazyload, PullRefresh, TreeSelect } from 'vant'

const components = [Button, Tabbar, TabbarItem, Tab, Tabs, Icon, Cell, CellGroup, Field, Swipe, SwipeItem, Lazyload, PullRefresh, TreeSelect]

export default {
  install(Vue) {
    components.forEach(c => Vue.use(c))
  }
}
