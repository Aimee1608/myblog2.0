<template>
  <!-- 移动端导航 -->
  <div class="mobileBox">
    <div class="hideMenu">
      <i class="el-icon-menu" @click="pMenu = !pMenu" />
      <el-collapse-transition>
        <el-menu
          v-show="!pMenu"
          :default-active="activeIndex"
          class="mlistmenu"
          :unique-opened="true"
          :router="true"
        >
          <el-menu-item index="/">
            <i class="fa fa-wa fa-home" /> 首页
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="fa fa-wa fa-flask" /> 实验室
            </template>
            <el-menu-item
              v-for="(item, index) in projectList"
              :key="'class2' + index"
              index
            >
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
          <el-menu-item v-show="!haslogin" index @click="logoinFun(1)"
            >登录</el-menu-item
          >
          <el-submenu v-show="haslogin" index="3">
            <template slot="title">
              <i class="fa fa-wa fa-user-circle-o" /> 我的
            </template>
            <el-menu-item index="/user">个人中心</el-menu-item>
            <el-menu-item index="/likeCollect?like=1">喜欢的文章</el-menu-item>
            <el-menu-item index="/likeCollect?collect=1"
              >收藏的文章</el-menu-item
            >
            <el-menu-item index @click="userlogout">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-collapse-transition>
      <div class="searchBox">
        <el-input
          placeholder
          @keyup.enter.native="searchEnterFun"
          @change="searchChangeFun"
        >
          <i
            slot="suffix"
            class="el-input__icon el-icon-search"
            @click="searchEnterFun"
          />
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'H5Head',
  components: {},
  props: ['activeIndex', 'classList', 'projectList', 'haslogin'],
  data() {
    return {
      pMenu: false
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
    }
  }
}
</script>

<style lang="less">
.hideMenu .el-submenu .el-menu {
  background: #64609e;
}
.hideMenu li.el-menu-item,
.hideMenu .el-submenu .el-submenu__title {
  height: 40px;
  line-height: 40px;
  color: #ffffff;
}
.mobileBox .searchBox .el-input__inner {
  display: block;
  border-radius: 2px;
  border: none;
  height: 25px;
}
.hideMenu ul.mlistmenu .el-submenu__icon-arrow,
.mobileBox li.el-menu-item a {
  color: #fff;
}

.hideMenu > ul li.el-menu-item:hover,
.hideMenu > ul li.el-menu-item.is-active,
.hideMenu .el-submenu__title:focus,
.hideMenu .el-submenu__title:hover {
  background: #48456d;
}
</style>
<style lang="less">
/*******移动端*******/

.mobileBox {
  position: relative;
  height: 38px;
  line-height: 38px;
  color: #fff;
}

.hideMenu {
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 38px;
}

.hideMenu ul.mlistmenu {
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  box-sizing: border-box;
  z-index: 999;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 0 8px 0 rgba(0, 0, 0, 0.04);
  // background: #48456c;
  background: #64609e;
  color: #fff;
  border-right: none;
}

.hideMenu > i {
  position: absolute;
  left: 10px;
  top: 12px;
  width: 30px;
  height: 30px;
  font-size: 16px;
  color: #fff;
}
.hideMenu .el-menu-item,
.hideMenu .el-menu-item i,
.hideMenu .el-submenu__title i {
  color: #ffffff;
}
.mobileBox .searchBox {
  padding-left: 40px;
  width: 100%;
  box-sizing: border-box;
  .el-input__suffix,
  .el-input__icon {
    line-height: 25px;
  }
}

.hideMenu ul.mlistmenu.pshow {
  display: block;
}
</style>
