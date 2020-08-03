import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/font-awesome.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
