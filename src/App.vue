<template>
  <div id="app">
    <Head />
    <div class="container">
      <el-row :gutter="30">
        <el-col
          :sm="24"
          :md="16"
          style="transition: all 0.5s ease-out; margin-bottom: 30px"
        >
          <router-view />
        </el-col>
        <el-col :sm="24" :md="8">
          <Right />
        </el-col>
      </el-row>
    </div>
    <Foot />
    <canvas id="evanyou" ref="evanyou" class="evanyou" />
  </div>
</template>

<script>
import Head from './components/head/index'
import Foot from './components/foot/index'
import Right from './components/right/index'
import CursorSpecialEffects from '@/utils/cursor-effect'
import evanyouFun from '@/utils/evanyou'
export default {
  name: 'App',
  components: {
    Head,
    Foot,
    Right
  },
  data() {
    return {
      // hidden: false
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      const cursorSpecialEffects = new CursorSpecialEffects()
      cursorSpecialEffects.init()
      evanyouFun(this.$refs.evanyou)
    }, 800)
  }
}
</script>

<style lang="less">
@import url('@/assets/css/reset.less');
// 原博客主提色
@tcolors: #97dffd; //按钮和标签颜色
@tcolorm: #64609e; //分类的选中的颜色
@tcolord: #48456d; //按钮hover 的颜色

// /***** 粉红色主题****/
// @tcolors:#97dffd;//按钮和标签颜色
// @tcolorm:#64609E;//分类的选中的颜色
// @tcolord:#48456D;//按钮hover 的颜色
//
// /******淡黄色主题*****/
// @tcolors:#97dffd;//按钮和标签颜色
// @tcolorm:#64609E;//分类的选中的颜色
// @tcolord:#48456D;//按钮hover 的颜色
//
// /****** 淡紫色主题 ****/
// @tcolors:#97dffd;//按钮和标签颜色
// @tcolorm:#64609E;//分类的选中的颜色
// @tcolord:#48456D;//按钮hover 的颜色
body {
  font-family: Arial, 'STHeiti', Helvetica, sans-serif;
  background: #efefef;
  font-size: 14px;
  color: #444 !important;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  cursor: url('./assets/img/cursor.png'), auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
  color: #444;
}
.container {
  max-width: 80%;
  margin: 0 auto;
  padding: 0 10px;
  /* overflow-x: hidden; */
  /* -webkit-overflow-x: hidden; */
}

.evanyou {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background: #efefef;
}
/* //时间和标题 */
.s-round-date {
  position: absolute;
  top: -20px;
  left: -35px;
  height: 60px;
  width: 70px;
  padding-top: 10px;
  border-radius: 100px;
  color: #fff;
  background: @tcolors;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.s-round-date span {
  text-align: center;
  display: block;
}
.s-round-date .day {
  font-size: 30px;
  font-weight: 700;
}
/* // 相同的标题副标题 */
.tcommonBox {
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  position: relative;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 40px;
  font-size: 15px;
}

// .s-item .article-content {
//   font-size: 15px;
//   white-space: normal;
//   word-wrap: break-word;
//   word-break: break-all;
// }
// /* //标题和按钮 */
// .s-item .article-content p {
//   margin: 10px 0;
//   line-height: 24px;
// }
.s-item .viewdetail {
  margin: 10px 0;
  line-height: 24px;
  text-align: center;
}
.s-item .viewdetail a {
  color: #fff;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 5px;
}

.viewmore {
  text-align: center;
  width: 100%;
}
.viewmore a {
  /*background:  #97dffd;*/
  /*padding:6px 0;*/
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  height: 30px;
  line-height: 30px;
  display: block;
}

.tcolors {
  color: @tcolors;
}
.tcolorm {
  color: @tcolorm;
}
.tcolord {
  color: @tcolord;
}
.tcolors-bg {
  background: @tcolors;
  transition: all 0.3s ease-in-out;
}
.tcolord-bg {
  background: @tcolord;
}
.tcolors-bg:hover {
  background: @tcolord;
}

.paginationBox li.active {
  background: @tcolorm;
}
.paginationBox li:hover {
  color: @tcolord;
}
.el-pagination button:hover {
  color: @tcolord;
}

.fitImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.maxW {
  max-width: 100%;
}
.fwb {
  font-weight: bold;
}
.right {
  float: right;
}
.left {
  float: left;
}
.btnone {
  border-top: none !important;
}
.brone {
  border-right: medium none !important;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
.smalltitle {
  /*height:36px;*/
  /*line-height: 36px;*/
}

.logoImg {
  width: 160px;
  height: 50px;
  display: inline-block;
  padding: 5px 5px;
  vertical-align: top;
}

.logoImg img {
  width: 100%;
  height: 100%;
}

//公共标签
.ui.label {
  border-color: @tcolors;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: @tcolors;
  margin: 5px 0 15px 2px;
  font-size: 14px;
  position: relative;
  left: -32px;
  border-radius: 0 4px 4px 0;
  padding: 7px 11.2px 7px 32px;
  display: inline-block;
  color: #fff;
}
.ui.label::after {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  border-top: 0 solid transparent;
  border-right-width: 1em;
  border-right-color: @tcolord;
  border-right-style: solid;
  border-bottom: 1em solid transparent;
  border-left: 0 solid transparent;
  width: 0;
  height: 0;
}
.ui.label a {
  color: #fff;
  line-height: 100%;
}

#nprogress .bar {
  background: @tcolorm !important; //自定义颜色
}
</style>
<style lang="less">
@media screen and (max-width: 500px) {
  //500px 手机尺寸
  .dlikeColBox {
    //点赞收藏手机端换行
    display: block !important;
    float: none !important;
    margin: 10px auto !important;
    text-align: center !important;
  }
  .el-message-box {
    //提示弹框手机框展示
    max-width: 80%;
  }
  .userInfoBox .el-input,
  .userInfoBox .el-textarea {
    //用户中心表框
    max-width: 280px !important;
  }
  .userInfoBox li {
    //li 更改padding  缩小距离
    padding: 15px 10px !important;
  }
  .userInfoBox li .el-radio-group .el-radio {
    //标签样式调整
    margin-left: 15px !important;
    margin-bottom: 5px;
  }
  .tFriendsBox .tf-item a {
    //好友列表自适应缩小尺寸
    padding: 0 5px 0 60px !important;
    img {
      width: 50px !important;
      height: 50px !important;
      left: 5px !important;
    }
  }
}
@media screen and (max-width: 700px) {
  .pc-head {
    display: none;
  }
  .h5-head {
    //手机端导航栏显示
    display: block;
  }
  .headImgBox {
    height: 450px !important;
    margin-bottom: -140px !important;
  }
  .h-information {
    display: none;
  }
  .headImgBox .scene {
    font-size: 50px !important;
    top: 120px;
  }
}

@media screen and (min-width: 701px) {
  .headBox {
    display: block;
  }
  .mobileBox {
    display: none;
  }
}
@media screen and (max-width: 800px) {
  .container {
    max-width: 100% !important;
    margin: 0 auto;
  }
  .s-round-date {
    width: 0 !important;
  }
  .ui.label {
    left: -18px !important;
    padding-left: 18px !important;
  }
  .ui.label::after {
    border: none !important;
  }
  .headBox li.el-menu-item,
  .headBox .el-submenu__title {
    padding: 0 15px;
  }
  .toTop {
    display: none !important;
  }
  //隐藏上滑图标
  .hidden {
    display: none !important;
  }
}
@media screen and (min-width: 801px) {
  .headBox li.el-menu-item,
  .headBox .el-submenu__title {
    padding: 0 12px;
  }
}
@media screen and (max-width: 990px) {
  // .hidden{
  //     display: none!important;
  // }
  div.rightlistBox .rs2.fixed {
    position: relative;
    top: 0;
    width: auto;
  }
}
@media screen and (min-width: 991px) {
  .headBox li.el-menu-item,
  .headBox .el-submenu__title {
    padding: 0 20px;
  }
}
</style>
