<template>
  <!-- pc端导航 -->
  <div class="headBox">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :router="true"
      text-color="#ffffff"
      active-text-color="#ffffff"
    >
      <el-menu-item index="/">
        <i class="fa fa-wa fa-home" /> 首页
      </el-menu-item>
      <el-submenu index :popper-append-to-body="false">
        <template slot="title">
          <i class="fa fa-wa fa-flask" /> 实验室
        </template>
        <el-menu-item v-for="(item, index) in projectList" :key="'class2' + index" index>
          <a :href="item.nav_url" target="_blank">{{ item.nav_name }}</a>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/archive">
        <i class="fa fa-wa fa-archive" /> 归档
      </el-menu-item>
      <el-menu-item index="/reward">
        <i class="fa fa-wa fa-cny" /> 赞赏
      </el-menu-item>
      <el-menu-item index="/friendslink">
        <i class="fa fa-wa fa-users" /> 伙伴
      </el-menu-item>
      <el-menu-item index="/message">
        <i class="fa fa-wa fa-pencil" /> 留言板
      </el-menu-item>
      <el-menu-item index="/aboutme">
        <i class="fa fa-wa fa-vcard" /> 关于
      </el-menu-item>
      <div class="pcsearchbox">
        <i class="el-icon-search pcsearchicon" />
        <div class="pcsearchinput" :class="searchkey ? 'hasSearched' : ''">
          <el-input v-model="searchkey" placeholder="搜索" @keyup.enter.native="searchEnterFun" @change="searchChangeFun">
            <i slot="suffix" class="el-input__icon el-icon-search" @click="searchEnterFun" />
          </el-input>
        </div>
      </div>
      <div class="userInfo">
        <div v-show="!haslogin" class="nologin">
          <el-tooltip effect="dark" content="登录" placement="left-end">
            <a href="javascript:void(0);" @click="logoinFun(1)">登录</a>
          </el-tooltip>
        </div>
        <div v-show="haslogin" class="haslogin">
          <i class="fa fa-fw fa-user-circle userImg" />
          <ul class="haslogin-info">
            <li>
              <a @click="goHandle({ name: 'User' })">个人中心</a>
            </li>
            <li>
              <a @click="goHandle({ name: 'LikeCollect', query: { like: 1 } })">喜欢列表</a>
            </li>
            <li>
              <a @click="
                  goHandle({ name: 'LikeCollect', query: { collect: 1 } })
                ">收藏列表</a>
            </li>
            <li>
              <a href="javascript:void(0);" @click="userlogout">退出登录</a>
            </li>
          </ul>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'PCHead',
  components: {},
  props: ['activeIndex', 'projectList', 'haslogin'],
  data() {
    return {
      searchkey: ''
    }
  },
  created() {},
  methods: {
    searchEnterFun() {
      this.$emit('searchEnterFun')
    },
    searchChangeFun(value) {
      this.$emit('searchChangeFun', value)
    },
    logoinFun() {
      this.$emit('logoinFun')
    },
    userlogout() {
      this.$emit('userlogout')
    },
    goHandle(value) {
      this.$emit('goHandle', value)
    }
  }
}
</script>

<style>
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: none !important;
}

.headBox .el-menu {
  background: transparent;
  border-bottom: none !important;
}
.headBox .el-submenu__title i,
.headBox .el-menu-item i {
  color: #ffffff;
}
.headBox .el-menu-demo li.el-menu-item,
.headBox .el-menu--horizontal .el-submenu .el-submenu__title {
  height: 38px;
  line-height: 38px;
  border-bottom: none !important;
}

.headBox .el-submenu li.el-menu-item {
  height: 38px;
  line-height: 38px;
  background-color: #48456c;
}
.headBox .el-submenu li.el-menu-item a {
  display: inline-block;
  width: 100%;
  color: #ffffff;
}
.headBox li .fa-wa {
  vertical-align: baseline;
}

.headBox .el-menu--horizontal .el-submenu > .el-menu {
  top: 38px;
  border: none;
  padding: 0;
}

.headBox > ul.el-menu li.el-menu-item:hover,
.headBox > ul.el-menu li.el-submenu:hover div.el-submenu__title,
.headBox > ul.el-menu li.el-submenu .el-submenu__title:hover {
  background-color: #48456c;
  border-bottom: none;
}

.headBox > ul.el-emnu li.el-submenu ul.el-menu,
.headBox > ul.el-emnu li.el-submenu .el-menu .el-menu-item {
  background-color: #48456c;
}

.headBox > ul.el-menu li.el-submenu ul.el-menu .el-menu-item:hover {
  background-color: #64609e;
}
.headBox > ul.el-menu .el-menu--popup {
  background-color: #48456c;
}

.headBox .pcsearchbox .el-input {
  width: 100%;
}

.headBox .el-input__inner {
  height: 30px;
  border: none;
  background: #fff;
  /*border: 1px solid #333;*/
  border-radius: 2px;
  padding-right: 10px;
}

.headBox li.is-active,
.headBox .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
  background-color: rgba(73, 69, 107, 0.7);
}
</style>

<style scoped>
/*********头部导航栏********/

/*pc搜索框*/

.headBox .pcsearchbox {
  padding: 0;
  max-width: 170px;
  /*min-width: 30px;*/
  height: 100%;
  line-height: 38px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.headBox .pcsearchbox:hover .pcsearchinput {
  opacity: 1;
  /*transform: scaleX(1);*/
  visibility: visible;
}

.headBox .pcsearchbox i.pcsearchicon {
  color: #fff;
  padding-left: 10px;
}

.headBox .pcsearchbox .pcsearchinput {
  width: 180px;
  padding: 10px 20px 10px 20px;
  background: rgba(40, 42, 44, 0.6);
  border-radius: 0 0 2px 2px;
  position: absolute;
  right: 0;
  top: 38px;
  opacity: 0;
  visibility: hidden;
  /*transform: scaleX(0);*/
  transform-origin: right;
  transition: all 0.3s ease-out;
}

.headBox .pcsearchbox .hasSearched {
  opacity: 1;
  /*transform: scaleX(1);*/
  visibility: visible;
}

.headBox .userInfo {
  height: 100%;
  line-height: 38px;
  position: absolute;
  right: 30px;
  top: 0;
  color: #fff;
}

.headBox .userInfo a {
  color: #fff;
  font-size: 13px;
  transition: all 0.2s ease-out;
}

.headBox .userInfo a:hover {
  color: #48456c;
}

.headBox .nologin {
  text-align: right;
}

.headBox .haslogin {
  text-align: right;
  position: relative;
  min-width: 80px;
  cursor: pointer;
}

.headBox .haslogin:hover ul {
  visibility: visible;
  opacity: 1;
}

.headBox .haslogin ul {
  background: rgba(40, 42, 44, 0.6);
  padding: 5px 10px;
  position: absolute;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-out;
}

.headBox .haslogin ul li {
  border-bottom: 1px solid #48456c;
}

.headBox .haslogin ul li:last-child {
  border-bottom: 1px solid transparent;
}
</style>
