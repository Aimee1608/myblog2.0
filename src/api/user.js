import request from './index'
const PATH = '/user'

function login() {
  return request({
    url: `${PATH}/login`,
    method: 'get'
  })
}

function logout() {
  return request({
    url: `${PATH}/logout`,
    method: 'get'
  })
}

function getInfo() {
  return request({
    url: `${PATH}/getUserInfo`,
    method: 'get'
  })
}

export default {
  login,
  logout,
  getInfo
}
