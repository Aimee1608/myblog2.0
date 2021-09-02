import request from './index'
const PATH = '/comment'

function getList(params) {
  return request({
    url: `${PATH}/getList`,
    method: 'get',
    params
  })
}

function add(data) {
  return request({
    url: `${PATH}/add`,
    method: 'post',
    data
  })
}

function getInfo(params) {
  return request({
    url: `${PATH}/getInfo`,
    method: 'get',
    params
  })
}

function getTopComment(params) {
  return request({
    url: `${PATH}/getTopComment`,
    method: 'get',
    params
  })
}
export default {
  getList,
  getInfo,
  add,
  getTopComment
}
