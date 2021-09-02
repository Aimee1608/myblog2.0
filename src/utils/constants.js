const shareClass = [
  {
    classId: 1, name: '技术分享', detshare: [
      { classId: 5, name: '移动端H5', pid: 1 },
      { classId: 6, name: 'pc端web', pid: 1 },
      { classId: 7, name: '小程序', pid: 1 },
      { classId: 8, name: 'php', pid: 1 },
      { classId: 9, name: 'nodejs', pid: 1 },
      { classId: 10, name: '软件', pid: 1 },
      { classId: 11, name: '其他', pid: 1 }
    ]
  },
  { classId: 2, name: '闲言碎语' },
  { classId: 3, name: '事件簿' },
  { classId: 4, name: '创作集' }
]
const OwOlist = [// 表情包和表情路径
  { 'title': '微笑', 'url': 'weixiao.gif' },
  { 'title': '嘻嘻', 'url': 'xixi.gif' },
  { 'title': '哈哈', 'url': 'haha.gif' },
  { 'title': '可爱', 'url': 'keai.gif' },
  { 'title': '可怜', 'url': 'kelian.gif' },
  { 'title': '挖鼻', 'url': 'wabi.gif' },
  { 'title': '吃惊', 'url': 'chijing.gif' },
  { 'title': '害羞', 'url': 'haixiu.gif' },
  { 'title': '挤眼', 'url': 'jiyan.gif' },
  { 'title': '闭嘴', 'url': 'bizui.gif' },
  { 'title': '鄙视', 'url': 'bishi.gif' },
  { 'title': '爱你', 'url': 'aini.gif' },
  { 'title': '泪', 'url': 'lei.gif' },
  { 'title': '偷笑', 'url': 'touxiao.gif' },
  { 'title': '亲亲', 'url': 'qinqin.gif' },
  { 'title': '生病', 'url': 'shengbing.gif' },
  { 'title': '太开心', 'url': 'taikaixin.gif' },
  { 'title': '白眼', 'url': 'baiyan.gif' },
  { 'title': '右哼哼', 'url': 'youhengheng.gif' },
  { 'title': '左哼哼', 'url': 'zuohengheng.gif' },
  { 'title': '嘘', 'url': 'xu.gif' },
  { 'title': '衰', 'url': 'shuai.gif' },
  { 'title': '吐', 'url': 'tu.gif' },
  { 'title': '哈欠', 'url': 'haqian.gif' },
  { 'title': '抱抱', 'url': 'baobao.gif' },
  { 'title': '怒', 'url': 'nu.gif' },
  { 'title': '疑问', 'url': 'yiwen.gif' },
  { 'title': '馋嘴', 'url': 'chanzui.gif' },
  { 'title': '拜拜', 'url': 'baibai.gif' },
  { 'title': '思考', 'url': 'sikao.gif' },
  { 'title': '汗', 'url': 'han.gif' },
  { 'title': '困', 'url': 'kun.gif' },
  { 'title': '睡', 'url': 'shui.gif' },
  { 'title': '钱', 'url': 'qian.gif' },
  { 'title': '失望', 'url': 'shiwang.gif' },
  { 'title': '酷', 'url': 'ku.gif' },
  { 'title': '色', 'url': 'se.gif' },
  { 'title': '哼', 'url': 'heng.gif' },
  { 'title': '鼓掌', 'url': 'guzhang.gif' },
  { 'title': '晕', 'url': 'yun.gif' },
  { 'title': '悲伤', 'url': 'beishang.gif' },
  { 'title': '抓狂', 'url': 'zhuakuang.gif' },
  { 'title': '黑线', 'url': 'heixian.gif' },
  { 'title': '阴险', 'url': 'yinxian.gif' },
  { 'title': '怒骂', 'url': 'numa.gif' },
  { 'title': '互粉', 'url': 'hufen.gif' },
  { 'title': '书呆子', 'url': 'shudaizi.gif' },
  { 'title': '愤怒', 'url': 'fennu.gif' },
  { 'title': '感冒', 'url': 'ganmao.gif' },
  { 'title': '心', 'url': 'xin.gif' },
  { 'title': '伤心', 'url': 'shangxin.gif' },
  { 'title': '猪', 'url': 'zhu.gif' },
  { 'title': '熊猫', 'url': 'xiongmao.gif' },
  { 'title': '兔子', 'url': 'tuzi.gif' },
  { 'title': '喔克', 'url': 'ok.gif' },
  { 'title': '耶', 'url': 'ye.gif' },
  { 'title': '棒棒', 'url': 'good.gif' },
  { 'title': '不', 'url': 'no.gif' },
  { 'title': '赞', 'url': 'zan.gif' },
  { 'title': '来', 'url': 'lai.gif' },
  { 'title': '弱', 'url': 'ruo.gif' },
  { 'title': '草泥马', 'url': 'caonima.gif' },
  { 'title': '神马', 'url': 'shenma.gif' },
  { 'title': '囧', 'url': 'jiong.gif' },
  { 'title': '浮云', 'url': 'fuyun.gif' },
  { 'title': '给力', 'url': 'geili.gif' },
  { 'title': '围观', 'url': 'weiguan.gif' },
  { 'title': '威武', 'url': 'weiwu.gif' },
  { 'title': '话筒', 'url': 'huatong.gif' },
  { 'title': '蜡烛', 'url': 'lazhu.gif' },
  { 'title': '蛋糕', 'url': 'dangao.gif' },
  { 'title': '发红包', 'url': 'fahongbao.gif' }
]
const userTag = [
  '天然呆',
  '小萌新',
  '学霸',
  '萌萌哒',
  '技术宅',
  '忠实粉'
]
const projectList = [
  {
    nav_url: 'http://food.mangoya.cn/',
    nav_name: '美食美荟'
  },
  {
    nav_url: './static/img/meishi.jpg',
    nav_name: '美食美荟小程序'
  },
  {
    nav_url: 'http://aimee.mangoya.cn/',
    nav_name: 'resume'
  }
]
export {
  shareClass,
  OwOlist,
  userTag,
  projectList
}
