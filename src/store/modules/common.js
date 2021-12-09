import articleCateAPI from '@/api/articleCate'
import router from '@/router'
const defaultState = {
  activeCateList: []
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  async getActiveCate({ commit }, data) {
    const res = await articleCateAPI.getAllList()
    commit('CHANGE_SETTING', { key: 'activeCateList', value: res.data })
  },
  async goDetail({ commit }, id) {
    router.push({
      name: 'Detail',
      params: {
        id
      }
    })
  }
}

export default {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
}
