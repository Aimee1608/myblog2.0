import request from './index'
const PATH = '/resource'

function getResourceList(params) {
  return request({
    url: `${PATH}/getList`,
    method: 'get',
    params
  })
}

function uploadResource(data) {
  return request({
    url: `${PATH}/add`,
    method: 'post',
    data
  })
}

function uploadFile(data) {
  return request({
    url: `${PATH}/upload`,
    method: 'post',
    data,
    headers: { 'Content-Type': '*' }
  })
}

// 删除
function deleteResource(data) {
  return request({
    url: `${PATH}/delete`,
    method: 'post',
    data
  })
}

export default {
  getResourceList,
  uploadResource,
  deleteResource,
  uploadFile
}
