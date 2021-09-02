import request from './index'
const PATH = '/love'

function add(data) {
  return request({
    url: `${PATH}/add`,
    method: 'post',
    data
  })
}

export default {
  add
}
