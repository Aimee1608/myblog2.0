import articleCateAPI from '@/api/articleCate'
const defaultState = {
  activeCateList: []
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  FILTER_NAME(state, value) {
    console.log('state', state)
    const item = state.activeCateList.find(item => item._id === value) || {}
    console.log('item', item.name)
    return item.name
  }
}

const actions = {
  async getActiveCate({ commit }, data) {
    const res = await articleCateAPI.getAllList()
    commit('CHANGE_SETTING', { key: 'activeCateList', value: res.data })
  }
}

export default {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
}

