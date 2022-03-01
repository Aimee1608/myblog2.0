// 初始化时间
import Moment from 'moment'
import { OwOlist } from '@/utils/constants'
export const initDate = (oldDate, full) => {
  var odate = new Date(oldDate)
  var year = odate.getFullYear()
  var month =
    odate.getMonth() < 9 ? '0' + (odate.getMonth() + 1) : odate.getMonth() + 1
  var date = odate.getDate() < 10 ? '0' + odate.getDate() : odate.getDate()
  if (full === 'year') {
    return year
  } else if (full === 'month') {
    return odate.getMonth() + 1
  } else if (full === 'date') {
    return date
  } else if (full === 'newDate') {
    return year + '年' + month + '月' + date + '日'
  } else {
    return Moment(oldDate).format('YYYY-MM-DD HH:mm:ss')
  }
}

// export function initDate(time, type = 'YYYY-MM-DD HH:mm:ss') {
//   return time ? Moment(time).format(type) : '--'
// }

export function filterName(list, value) {
  // console.log('state', state)
  const item = list.find((item) => item._id === value) || {}
  return item.name
}

export function analyzeEmoji(cont) {
  // 编译表情替换成图片展示出来
  var pattern1 = /\[[\u4e00-\u9fa5]+\]/g
  var pattern2 = /\[[\u4e00-\u9fa5]+\]/
  var content = cont.match(pattern1)
  var str = cont
  if (content) {
    for (var i = 0; i < content.length; i++) {
      for (var j = 0; j < OwOlist.length; j++) {
        if ('[' + OwOlist[j].title + ']' === content[i]) {
          var src = OwOlist[j].url
          break
        }
      }
      str = str.replace(
        pattern2,
        '<img src="' + require('@/assets/img/emot/image/' + src) + '"/>'
      )
    }
    // console.log(str);
  }
  return str
}

export function getTimeLine(time) {
  return Moment(time).format('MM-DD')
}

export function throttle(fn, time) {
  let last = Date.now()
  return (...arg) => {
    let now = Date.now()
    if (last + time <= now) {
      fn(...arg)
      last = now
    }
  }
}
