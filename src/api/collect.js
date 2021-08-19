import request from './index'
const PATH = '/collect'

function edit(data) {
  return request({
    url: `${PATH}/edit`,
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

export default {
  getInfo,
  edit
}
