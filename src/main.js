import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import {
  Row,
  Col,
  Pagination,
  Submenu,
  Menu,
  MenuItem,
  Input,
  Tooltip,
  Timeline,
  TimelineItem,
  Alert,
  Steps,
  Step,
  Table,
  Radio,
  Switch,
  RadioGroup,
  Link,
  Loading,
  TableColumn,
  Message,
  Dialog
} from 'element-ui'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
// import 'element-ui/lib/theme-chalk/index.css'
import HeadImg from '@/plugins/HeadImg'
import '@/utils/permission'
import '@/assets/css/sigmar.css'

Vue.config.productionTip = false

Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Tooltip)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Alert)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Table)
Vue.use(Radio)
Vue.use(Switch)
Vue.use(RadioGroup)
Vue.use(Link)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.prototype.$message = Message
Vue.prototype.$loading = Loading.service

Vue.component(CollapseTransition.name, CollapseTransition)

Vue.component(HeadImg.name, HeadImg)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
