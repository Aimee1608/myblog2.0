<!-- 文章详情模块 -->
<template>
  <div class="detailBox tcommonBox">
    <articleHead :item="detailObj" />
    <Content :content="content" />
    <div class="dshareBox bdsharebuttonbox"
         data-tag="share_1">
      <div class="dlikeColBox">
        <div class="dlikeBox"
             @click="likecollectHandle(1)">
          <i :class="likeArt?'fa fa-fw fa-heart':'fa fa-fw fa-heart-o'" />喜欢 | {{ detailObj.likeCount }}
        </div>
        <div class="dcollectBox"
             @click="likecollectHandle(2)">
          <i :class="collectArt?'fa fa-fw fa-star':'fa fa-fw fa-star-o'" />收藏 | {{ detailObj.collectCount }}
        </div>
      </div>
    </div>
    <div class="donate">
      <div class="donate-word">
        <span @click="pdonate=!pdonate">赞赏</span>
      </div>
      <el-row :class="pdonate?'donate-body':'donate-body donate-body-show'"
              :gutter="30">
        <el-col :span="12"
                class="donate-item">
          <div class="donate-tip">
            <img src="./../../assets/img/aimee/reward-wechat.jpg">
            <span>微信扫一扫，向我赞赏</span>
          </div>
        </el-col>
        <el-col :span="12"
                class="donate-item">
          <div class="donate-tip">
            <img src="./../../assets/img/aimee/reward-zfb.jpg">
            <span>支付宝扫一扫，向我赞赏</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <Message :id="id" />
  </div>
</template>

<script>
// import {getArticleInfo,getArtLikeCollect,initDate} from '../utils/server.js'
import { mapActions, mapState } from 'vuex'

import articleAPI from '@/api/article'
import collectAPI from '@/api/collect'
import likeAPI from '@/api/like'
import { initDate } from '@/utils'
import articleHead from '@/components/articleHead'
import Message from '@/components/message'
import Content from '@/components/content'
import _ from 'lodash'

export default {
  name: 'Detail',
  components: { // 定义组件
    articleHead,
    Message,
    Content
  },
  data() { // 选项 / 数据
    return {
      aid: '', // 文章ID
      pdonate: true, // 打开赞赏控制,
      detailObj: {}, // 返回详情数据
      likeArt: false, // 是否点赞
      likeCount: 400, // 点赞数量
      collectCount: 500, // 收藏数量
      collectArt: false, // 是否收藏
      create_time: '',
      content: '',
      id: ''
    }
  },
  computed: {
    ...mapState('user', [
      'haslogin'
    ])
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'routeChange'
  },
  async created() { // 生命周期函数
    await this.routeChange()
  },
  methods: { // 事件处理器
    ...mapActions('user', ['login']),
    showInitDate: initDate,
    async likecollectHandle(islike) { // 用户点击喜欢0,用户点击收藏1
      if (this.haslogin) { // 判断是否登录
        var tip = ''
        let res
        if (islike === 1) {
          if (!this.likeArt) {
            this.likeCount += 1
            this.likeArt = true
            tip = '已点赞'
          } else {
            this.likeCount -= 1
            this.likeArt = false
            tip = '已取消点赞'
          }
          res = await likeAPI.edit({ id: this.id, value: this.likeArt })
        } else {
          if (!this.collectArt) {
            this.collectCount += 1
            this.collectArt = true
            tip = '已收藏'
          } else {
            this.collectCount -= 1
            this.collectArt = false
            tip = '已取消收藏'
          }
          res = await collectAPI.edit({ id: this.id, value: this.collectArt })
        }
        if (res.code == 0) {
          this.$message({
            message: tip,
            type: 'success'
          })
          await this.getInfo(this.id)
        }
      } else { // 未登录 前去登录。
        this.$confirm('登录后即可点赞和收藏，是否前往登录页面?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => { // 确定，跳转至登录页面
          // 储存当前页面路径，登录成功后跳回来
          localStorage.setItem('logUrl', this.$route.fullPath)
          this.login()
        }).catch(() => { // 取消关闭弹窗

        })
      }
    },
    async getInfo(id) {
      const res = await articleAPI.getInfo({ id })
      console.log('articleAPI.info---res', res)

      this.detailObj = _.cloneDeep(res.data)
      this.content = this.detailObj.content
      if (this.haslogin) {
        const likeRes = await likeAPI.getInfo({ id })
        const collectRes = await collectAPI.getInfo({ id })
        if (likeRes.code === 0 && likeRes.data._id) {
          this.likeArt = true
        }
        if (collectRes.code === 0 && collectRes.data._id) {
          this.collectArt = true
        }
      }
    },
    async routeChange() {
      this.id = this.$route.params.id
      await this.getInfo(this.id)
    }
  }

}
</script>

<style lang="less">
// .detailBox .article-content {
//   font-size: 15px;
//   white-space: normal;
//   word-wrap: break-word;
//   word-break: break-all;
//   overflow-x: hidden;
// }
// .detailBox .article-content p {
//   margin: 10px 0;
//   line-height: 24px;
//   word-wrap: break-word;
//   word-break: break-all;
//   overflow-x: hidden;
// }
// .detailBox .article-content pre {
//   word-wrap: break-word;
//   word-break: break-all;
//   overflow-x: hidden;
// }
// .detailBox .article-content img {
//   max-width: 100% !important;
//   height: auto !important;
//   overflow-x: hidden;
// }
// .detailBox .article-content a {
//   color: #df2050 !important;
// }
// .detailBox .article-content a:hover {
//   text-decoration: underline;
//   color: #f00 !important;
// }
// .detailBox .article-content i {
//   font-style: italic;
// }
// .detailBox .article-content strong {
//   font-weight: bold;
// }
// .detailBox .article-content ul {
//   list-style-type: disc !important;
//   list-style: disc !important;
//   padding-left: 40px !important;
//   li {
//     list-style-type: disc !important;
//     list-style: disc !important;
//   }
// }
// .detailBox .article-content h1,
// .detailBox .article-content h2,
// .detailBox .article-content h3 {
//   font-size: 200%;
//   font-weight: bold;
// }
// .detailBox .article-content h4,
// .detailBox .article-content h5,
// .detailBox .article-content h6 {
//   font-size: 150%;
//   font-weight: bold;
// }
.detailBox .viewdetail {
  margin: 10px 0;
  line-height: 24px;
  text-align: center;
}
/*分享图标*/
.dshareBox {
  margin-top: 40px;
  position: relative;
  display: flex;
  justify-content: flex-end;
}

/*点赞 收藏*/
.dlikeColBox {
}
.dlikeBox,
.dcollectBox {
  display: inline-block;
  padding: 0 10px;
  height: 35px;
  color: #e26d6d;
  line-height: 35px;
  border-radius: 35px;
  border: 1px solid #e26d6d;
  cursor: pointer;
  margin-left: 10px;
}

/*赞赏*/
.donate-word {
  margin: 40px 0;
  text-align: center;
}
.donate-word span {
  display: inline-block;
  width: 80px;
  height: 34px;
  line-height: 34px;
  color: #fff;
  background: #e26d6d;
  margin: 0 auto;
  border-radius: 4px;
  cursor: pointer;
}
.donate-body {
  display: none;
}
.donate-body-show {
  display: block;
}
.donate-item {
  text-align: right;
}
.donate-item:last-child {
  text-align: left;
}
.donate-item img {
  width: 100%;
  display: block;
  height: auto;
}
.donate-item div {
  display: inline-block;
  width: 150px;
  padding: 0 6px;
  box-sizing: border-box;
  text-align: center;
}
.donate-item div span {
  display: inline-block;
  width: 100%;
  margin: 10px 0;
  text-align: center;
}
.donate-body .donate-item:first-of-type div {
  color: #44b549;
}
.donate-body .donate-item:nth-of-type(2) div {
  color: #00a0e9;
}

.bd_weixin_popup {
  position: fixed !important;
}
</style>
