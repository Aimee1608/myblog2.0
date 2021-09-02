import Vue from 'vue'
import Router from 'vue-router'
import detail from '@/views/detail/index'
import home from '@/views/home/index'
import friendslink from '@/views/friendslink/index'
import archive from '@/views/archive/index'
import aboutme from '@/views/aboutme/index'
import reward from '@/views/reward/index'
import user from '@/views/user/index'
import likeCollect from '@/views/likeCollect'

Vue.use(Router)
let savedPosition = false
export default new Router({
  mode: 'hash',
  scrollBehavior: (to, from) => {
    // console.log('to, from, savedPosition', to, from, savedPosition)
    if (savedPosition) {
      return {
        y: 670
      }
    } else {
      savedPosition = true
      return {
        y: 0
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: detail,
      meta: {
        title: '详情页'
      }
    },

    {
      path: '/archive',
      name: 'Archive',
      component: archive,
      meta: {
        title: '归档'
      }
    },
    {
      path: '/friendslink',
      name: 'Friendslink',
      component: friendslink,
      meta: {
        title: '友链'
      }
    },
    {
      path: '/reward',
      name: 'Reward',
      component: reward,
      meta: {
        title: '赞赏'
      }
    },
    {
      path: '/aboutme',
      name: 'Aboutme',
      component: aboutme,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/user',
      name: 'User',
      component: user,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/likeCollect',
      name: 'LikeCollect',
      component: likeCollect,
      meta: {
        title: '喜欢/收藏'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
