import Cookies from 'js-cookie'
import md5 from 'md5'
const sidebarStatus = 'log-admin-sidebarStatus'
const defaultState = {
  sidebar: {
    opened: window.localStorage.getItem(sidebarStatus)
      ? !!+window.localStorage.getItem(sidebarStatus)
      : true,
    withoutAnimation: false
  },
  device: 'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    window.localStorage.setItem(sidebarStatus, state.sidebar.opened ? 1 : 0)
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    window.localStorage.setItem(sidebarStatus, 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_LOGID: (state) => {
    const logId = Cookies.get('aimee_blog_log_id')
    if (!logId) {
      const newLogId = md5(
        window.navigator.userAgent +
          parseInt(Math.random() * 1000, 10) +
          new Date().getTime()
      )
      Cookies.set('aimee_blog_log_id', newLogId, {
        expires: 1 / 12,
        domain: '.mangoya.cn'
      })
    }
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setLogId({ commit }) {
    commit('SET_LOGID')
  }
}

export default {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
}
