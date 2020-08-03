import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state () {
        return {
            name: 'aimee',
            errorAvatar: 'this.onerror=null;this.src="' + require('./../assets/img/tou.jpg') + '"'
        }
    },
    actions,
    mutations
})