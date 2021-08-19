import request from './index'
const PATH = '/article'

function getList(params) {
  return request({
    url: `${PATH}/getList`,
    method: 'get',
    params
  })
}

function getInfo(params) {
  return request({
    url: `${PATH}/getInfo`,
    method: 'get',
    params
  })
}

export default {
  getList,
  getInfo
}
