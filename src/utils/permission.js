import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
NProgress.configure({
  showSpinner: false
}) // NProgress Configuration
// const whiteList = ['/login'] // no redirect whitelist
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  const hasToken = getToken()
  // console.log('888')
  if (hasToken && !store.state.user.haslogin) {
    // console.log('999', store)
    await store.dispatch('user/getInfo')
  }
  next()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
