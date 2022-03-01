<template>
  <div>
    <div class="headBack">
      <el-row class="container">
        <el-col :span="24">
          <!-- pc端导航 -->
          <PCHead
            class="pc-head"
            :activeIndex="activeIndex"
            :projectList="projectList"
            :haslogin="haslogin"
            @searchEnterFun="searchEnterFun"
            @searchChangeFun="searchChangeFun"
            @logoinFun="logoinFun"
            @goHandle="goHandle"
            @userlogout="userlogout"
          />
          <!-- 移动端 -->
          <H5Head
            class="h5-head"
            :activeIndex="activeIndex"
            :projectList="projectList"
            :haslogin="haslogin"
            @searchEnterFun="searchEnterFun"
            @searchChangeFun="searchChangeFun"
            @logoinFun="logoinFun"
            @userlogout="userlogout"
          />
        </el-col>
      </el-row>
    </div>
    <el-dialog title="登录说明" :visible.sync="showLoginModal" width="50%" center class="login-dialog">
      <div>本博客支持github 和 微博授权登录，仅获取对外开放的用户信息</div>
      <div slot="footer" class="dialog-footer">
        <AButton @click="useLogin(false)">github授权</AButton>
        <AButton @click="useLogin(true)">新浪微博授权</AButton>
      </div>
    </el-dialog>
    <div class="headImgBox">
      <div class="scene">
        <div>
          <span id="luke" />
        </div>
      </div>
      <div class="h-information">
        <span @click="goHandle({ name: 'Aboutme' })">
          <img src="@/assets/img/tou.png" alt />
        </span>
        <div class="h-description">
          <span @click="goHandle({ name: 'Aboutme' })">Write the Code. Change the World.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { MessageBox } from 'element-ui'
import H5Head from './components/h5-head.vue'
import PCHead from './components/pc-head.vue'
import { projectList } from '@/utils/constants'
import Typeit from '@/utils/Typeit'
import { loginType } from '@/utils/constants'
import AButton from '@/components/abutton'
export default {
  name: 'Head',
  components: {
    H5Head,
    PCHead,
    AButton
  },
  data() {
    return {
      activeIndex: '/',
      projectList,
      searchkey: '',
      showLoginModal: false,
      pMenu: true // 手机端菜单打开
    }
  },
  computed: {
    ...mapState('user', ['haslogin']),
    ...mapGetters(['sidebar', 'username', 'userId', 'avatar'])
  },
  async created() {
    this.activeIndex =
      '/' +
      (window.location.hash.split('/').length > 1
        ? window.location.hash.split('/')[1]
        : '')
    // console.log('path', this.activeIndex)
    this.changeTitle()
    this.setLogId()
    await this.getActiveCate()
  },
  mounted() {
    // 页面元素加载完成
    const timer = setTimeout(() => {
      Typeit('#luke') // 打字机效果
      clearTimeout(timer)
    }, 500)
  },
  methods: {
    ...mapActions('user', ['getInfo', 'login', 'logout']),
    ...mapActions('common', ['getActiveCate']),
    ...mapActions('app', ['setLogId']),
    searchEnterFun() {
      // console.log('9999', this.searchkey)
      if (this.searchkey) {
        this.$router.push({
          name: 'Home',
          query: {
            keywords: this.searchkey
          }
        })
      }
    },
    searchChangeFun(value) {
      this.searchkey = value
      // console.log('999988', this.searchkey)
      if (!this.searchkey) {
        this.$router.push({ name: 'Home' })
      }
    },
    logoinFun() {
      this.showLoginModal = true
    },
    useLogin(isWeibo) {
      this.login(!isWeibo ? loginType.GITHUB : loginType.WEIBO)
    },
    async userlogout() {
      MessageBox.confirm('是否确认退出?', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await this.logout()
      })
    },
    goHandle(path) {
      this.$router.push(path)
    },
    changeTitle() {
      var hiddenProperty =
        'hidden' in document
          ? 'hidden'
          : 'webkitHidden' in document
          ? 'webkitHidden'
          : 'mozHidden' in document
          ? 'mozHidden'
          : null
      var visibilityChangeEvent = hiddenProperty.replace(
        /hidden/i,
        'visibilitychange'
      )
      var onVisibilityChange = () => {
        if (document[hiddenProperty]) {
          // 被隐藏
          document.title = '藏好啦(つд⊂)'
        } else {
          document.title = '被发现啦(*´∇｀*)' // 当前窗口打开
        }
      }
      document.addEventListener(visibilityChangeEvent, onVisibilityChange)
    }
  }
}
</script>

<style scoped lang="less">
/*********头部导航栏********/
/*头部导航栏盒子*/

.headBack {
  width: 100%;
  background: rgba(40, 42, 44, 0.6);
  /*margin-bottom:30px;*/
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
}

/*头部背景图*/

.headImgBox {
  height: 650px;
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center 50%;
  background-repeat: no-repeat;
  margin-bottom: 90px;
  background-image: url('./../../assets/img/headbg05.jpg');
}

.h-information {
  text-align: center;
  width: 70%;
  margin: auto;
  position: relative;
  top: 498px;
  padding: 40px 0;
  font-size: 16px;
  opacity: 0.98;
  background: rgba(230, 244, 249, 0.8);
  border-radius: 5px;
  z-index: 1;
  animation: b 1s ease-out;
  -webkit-animation: b 1s ease-out;
}
.h-description {
  margin: 20px 0 0;
  span {
    font-size: 18px;
    font-weight: 700;
    color: #97dffd;
    text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
      0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
      0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
      0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
      0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
      0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
      0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
      0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
      0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
      0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
  }
}

@-webkit-keyframes b {
  0% {
    -webkit-transform: translateY(90px);
    transform: translateY(90px);
  }
  80% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  90% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes b {
  0% {
    -webkit-transform: translateY(90px);
    transform: translateY(90px);
  }
  80% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  90% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.h-information img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  object-fit: cover;
}

.h-information img:hover {
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
}

.h-information h2 {
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
  /*font-family: 'Sigmar One';*/
}
.h-information h2 a {
  background: linear-gradient(to right, #df2050, #48456d);
  -webkit-background-clip: text;
  color: transparent;
}
.headImgBox .scene {
  width: 100%;
  /*height:300px;*/
  text-align: center;
  font-size: 100px;
  font-weight: 200;
  color: #fff;
  position: absolute;
  left: 0;
  top: 160px;
  font-family: 'Sigmar One', Arial;
  text-shadow: 0 2px 2px #47456d;
}

.headImgBox .scene span {
  transform: matrix(1, 0, 0, 1, 0, 0);
  -webkit-transform: matrix(1, 0, 0, 1, 0, 0);
  text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
}

.saying:after {
  content: '|';
  font-family: Arial, sans-serif;
  font-size: 1em;
  /*line-height: 0;*/
  display: inline-block;
  vertical-align: baseline;
  opacity: 1;
  text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
  animation: caret 500ms infinite;
}

@keyframes caret {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
<style lang="less">
.login-dialog {
  .el-dialog__body {
    text-align: center;
  }
  .dialog-footer {
    span {
      margin: 0 10px;
    }
  }
}
</style>
