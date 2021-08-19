import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'
import common from './modules/common'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    common
  },
  // state() {
  //   return {
  //     name: 'aimee',
  //     errorAvatar: 'this.onerror=null;this.src="' + require('./../assets/img/tou.jpg') + '"'
  //   }
  // },
  getters
})

export default store
