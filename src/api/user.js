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

function getWebBlogUser() {
  return request({
    url: `${PATH}/getWebBlogUser`,
    method: 'get'
  })
}
function edit(data) {
  return request({
    url: `${PATH}/edit`,
    method: 'post',
    data
  })
}

export default {
  login,
  logout,
  getInfo,
  edit,
  getWebBlogUser
}
