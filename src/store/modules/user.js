import userAPI from '@/api/user'

import { GITHUB_OAUTH, WEIBO_OAUTH } from '@/config'
import { getToken, removeToken } from '@/utils/auth'
import { loginType } from '@/utils/constants'

const getDefaultState = () => {
  return {
    token: getToken(),
    username: '',
    userId: '',
    role: 'normal',
    status: 3,
    avatar: '',
    haslogin: false,
    userInfo: {}
  }
}

const defaultState = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, username) => {
    state.username = username
  },
  SET_ID: (state, userId) => {
    state.userId = userId
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLE: (state, status) => {
    const userRole = {
      3: 'normal',
      2: 'admin',
      1: 'superAdmin'
    }
    state.role = userRole[status]
    state.status = status
  },
  SET_USER: (state, userInfo) => {
    state.userInfo = userInfo
    state.haslogin = true
  }
}

const actions = {
  // user login
  login({ commit, state }, type = loginType.GITHUB) {
    window.location.href =
      type === loginType.GITHUB ? GITHUB_OAUTH.url : WEIBO_OAUTH.url
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      userAPI
        .getInfo(state.token)
        .then((response) => {
          const { data } = response
          // console.log(data)
          if (!data) {
            return reject('Verification failed, please Login again.')
          }
          const { userId, username, status, avatar } = data
          commit('SET_ID', userId)
          commit('SET_NAME', username)
          commit('SET_ROLE', status)
          commit('SET_AVATAR', avatar)
          commit('SET_USER', data)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ state }) {
    return new Promise((resolve, reject) => {
      userAPI
        .logout(state.token)
        .then(() => {
          removeToken() // must remove  token  first
          // window.location.replace(sso.urls.logout)
          // router.push('/')
          window.location.replace(window.location.origin)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  },

  edit({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      userAPI
        .edit(userInfo)
        .then((response) => {
          const { data } = response
          const { userId, username, status, avatar } = data
          commit('SET_ID', userId)
          commit('SET_NAME', username)
          commit('SET_ROLE', status)
          commit('SET_AVATAR', avatar)
          commit('SET_USER', data)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
}
