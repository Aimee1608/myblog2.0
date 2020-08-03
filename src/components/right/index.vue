<template>
  <div class="rightlistBox">
    <section>
      <div class="r1-head">
        <img src="@/assets/img/headtou02.jpg" alt="">
        <h1>
          <span>女王</span>Aimee
        </h1>
      </div>
      <div class="r1-body">
        <p>你能抓到我么？</p>
        <div class="catch-me">
          <div class="">
            <el-tooltip class="item" content="Github" placement="top">
              <a :href="catchMeObj.git" target="_blank"><i class="fa fa-fw fa-github"></i></a>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="QQ" placement="top">
              <a :href="catchMeObj.qq" target="_blank"><i class="fa fa-fw fa-qq"></i></a>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="微博" placement="top">
              <a :href="catchMeObj.sina" target="_blank"><i class="fa fa-fw fa-weibo"></i></a>
            </el-tooltip>
          </div>
          <div class="">
            <el-tooltip class="item" effect="dark" content="微信" placement="top">
              <a :href="catchMeObj.wechat" target="_blank"><i class="fa fa-fw fa-wechat"></i></a>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="CSDN" placement="top">
              <a :href="catchMeObj.csdn" target="_blank"><i class="">C</i></a>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="简历" placement="top">
              <a :href="catchMeObj.job" target="_blank"><i class="fa fa-fw fa-file-word-o"></i></a>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="更多" placement="top">
              <a href="#/Aboutme"><i class="el-icon-more"></i></a>
            </el-tooltip>
          </div>
        </div>
      </div>
    </section>
    <section :class="fixDo?'rs2 fixed':'rs2'" @click="lovemeFun">
      <p>
        Do you like me?
      </p>
      <div class="">
        <i :class="loveme?'heart active':'heart'"></i>
        <span>{{likeNum}}</span>
      </div>
    </section>
    <div v-show="fixDo" class="rs2 rs2-block"></div>
    <section></section>
    <section class="rs3">
      <h2 class="ui label">
        这些人都排着队来跟我说话
      </h2>
      <ul class="rs3-textwidget">
        <li class="rs3-item" v-for="(item,index) in artCommentList" :key="'artCommentList'+index">
          <a :href="'#/DetailShare?aid='+item.id" target="_blank">
            <div class="rs3-photo">
              <img :src="item.avatar" :onerror="errorAvatar" />
            </div>
            <div class="rs3-inner">
              <p class="rs3-author">{{item.nickname}} 在「{{item.title}}」中说:</p>
              <p class="rs3-text">{{item.content}}</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <section class="rs4">
      <h2 class="ui label">
        大家都排队来看这些
      </h2>
      <ul>
        <li v-for="(item,index) in browseList" :key="'browseList'+index">
          <a :href="'#/DetailShare?aid='+item.id">{{item.title}}</a> —— {{item.browse_count}} 次围观
        </li>
      </ul>
    </section>
    <!-- 右侧上滑小图片 -->
    <div class="toTop  hidden" :style="'top:'+top" @click="toTopfun">
      <img src="@/assets/img/scroll.png" alt="">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Right',
  data () {
    return {
      top: 0, // 小猫高度
      fixDo: false,
      loveme: false,
      gotoTop: false,//返回顶部
      going: false,//是否正在执行上滑动作
      browseList: [
        {
          id: '2',
          title: 'ddsfsdfsdfsdfsd',
          browse_count: '99999'
        },
        {
          id: '3',
          title: 'ddsfsdfsdfsdfsd',
          browse_count: '99999'
        },
        {
          id: '4',
          title: 'ddsfsdfsdfsdfsd',
          browse_count: '999998888'
        }
      ],//浏览量最多
      artCommentList: [
        {
          id: '1',
          avatar: '../../assets/img/tou.jpg',
          nickname: 'aimee',
          title: 'dffffffff',
          content: 'fsdfsdfsdfsdfsdfsdfsdfsdf00'
        },
        {
          id: '2',
          avatar: '../../assets/img/tou.jpg',
          nickname: 'aimee',
          title: 'dffffffff',
          content: 'fsdfsdfsdfsdfsdfsdfsdfsdf'
        },
        {
          id: '3',
          avatar: '../../assets/img/tou.jpg',
          nickname: 'aimee',
          title: 'dffffffff',
          content: 'fsdfsdfsdfsdfsdfsdfsdfsdf'
        },
        {
          id: '4',
          avatar: '../../assets/img/tou.jpg',
          nickname: 'aimee',
          title: 'dffffffff',
          content: 'fsdfsdfsdfsdfsdfsdfsdfsdf'
        }
      ],//评论量最多
      likeNum: 0,//do you like me 点击量
      initLikeNum: 0,//初始化喜欢数量
      catchMeObj: {//抓住我 个人信息{
        git: 'https://github.com/Aimee1608',
        qq: 'static/img/aimee/QQ.jpg',
        sina: 'https://weibo.com/u/2242812941',
        wechat: 'static/img/aimee/erwm.jpg',
        csdn: 'http://blog.csdn.net/Aimee1608',
        job: 'http://aimee.mangoya.cn'

      },
    }
  },
  computed: {
    ...mapState([
      'errorAvatar'
    ])
  },
  methods: {
    lovemeFun () {
      if (!this.loveme) {
        this.likeNum += 1
        // GetLike(1,function(){
        // })
      }
      this.loveme = true;
      var timer = setTimeout(() => {
        this.loveme = false
        clearTimeout(timer)
      }, 3000)
    },
    toTopfun () {
      this.gotoTop = false;
      this.going = true;
      var timer = setInterval(() => {
        //获取滚动条距离顶部高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        var ispeed = Math.floor(-osTop / 7);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        //到达顶部，清除定时器
        if (osTop == 0) {
          this.going = false;
          clearInterval(timer);
          timer = null;
        }
      }, 30)
    },
  },
  created () {
    const clientHeight = document.documentElement.clientHeight
    let topHieght = 0
    if (clientHeight < 900) {
      topHieght = 1000 - clientHeight
    } else {
      topHieght = 100
    }
    this.top = '-950px'
    window.addEventListener('scroll', () => {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(t);
      if (!this.going) {
        if (t > 600) {
          this.gotoTop = true;
          this.top = -topHieght + 'px'
        } else {
          this.gotoTop = false;
          this.top = '-950px'
        }
      }
      if (t > 1200) {
        this.fixDo = true;
      } else {
        this.fixDo = false;
      }

    })
  }
}
</script>

<style lang="less">
.rightlistBox {
  position: relative;
}
.rightlistBox section {
  transition: all 0.2s linear;
  position: relative;
  background: #fff;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
}
.rightlistBox section:hover {
  transform: translate(0, -2px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
.rightlistBox .r1-head {
  text-align: center;
  border-radius: 4px 4px 0 0;
  text-align: center;
  position: relative;
  /*box-shadow: inset 0 -70px 100px -50px rgba(0,0,0,.5);*/
}
.rightlistBox .r1-head img {
  width: 100%;
  min-height: 100px;
}
.rightlistBox .r1-head h1 {
  position: absolute;
  bottom: 5px;
  margin: 0 0 0 -65px;
  font-size: 20px;
  letter-spacing: 0.5px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
  font-weight: 700;
  width: 130px;
  left: 50%;
}
.rightlistBox .r1-head h1 span {
  opacity: 0.3;
}
.rightlistBox .r1-body p {
  font-size: 14px;
  margin: 5px 0 8px 0;
  font-weight: 700;
  text-align: center;
}
.rightlistBox .r1-body .catch-me {
  text-align: center;
}
.rightlistBox .r1-body .catch-me a {
  display: inline-block;
  margin-bottom: 7px;
  position: relative;
  text-decoration: none;
}
.rightlistBox .r1-body .catch-me a:hover i {
  color: #fff;
  background: #f4692c;
}
.rightlistBox .r1-body .catch-me a i {
  display: inline-block;
  font-size: 18px;
  width: 42px;
  height: 42px;
  line-height: 42px;
  border-radius: 42px;
  color: rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  font-style: normal;
  margin: 0 3.2px;
}

/*************do you like me*******************/
.rightlistBox .rs2 {
  /*padding:10px 0 4px 0;*/
  min-height: 100px;
}
.rightlistBox .rs2.fixed {
  position: fixed;
  top: 40px;
  width: 22%;
}
.rightlistBox .rs2 p {
  color: #df2050;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  margin-top: 10px;
  font-weight: 500;
}
.rightlistBox .rs2 div {
  color: #df2050;
  cursor: pointer;
  text-align: center;
  font-size: 40px;
  position: absolute;
  width: 100%;
  height: 100px;
  line-height: 100px;
  left: 0;
  top: 30px;
}
.rightlistBox .rs2 div i.heart {
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 100px;
  margin-left: -20px;
  margin-top: -5px;
  background: url(../../assets/img/heart.png) no-repeat;
  background-position: 0 0;
  cursor: pointer;
  -webkit-transition: background-position 1s steps(28);
  transition: background-position 1s steps(28);
  -webkit-transition-duration: 0s;
  transition-duration: 0s;
  vertical-align: middle;
}
.rightlistBox .rs2 div i.heart:hover {
  transform: scale(1.15);
  -webkit-transform: scale(1.15);
}
.rightlistBox .rs2 div i.heart.active {
  -webkit-transition-duration: 1s;
  transition-duration: 1s;
  background-position: -2800px 0;
}
.rightlistBox .rs2 div span {
  margin-left: -30px;
}
.rightlistBox .rs2-block {
  height: 130px;
}
/**********排队来说*************/
.rightlistBox .rs3 .rs3-item {
  font-size: 13px;
  line-height: 20px;
}
.rightlistBox .rs3 .rs3-item a {
  display: block;
  padding: 5px;
  transition: all 0.3s ease-out;
  border-bottom: 1px solid #ddd;
  margin: 5px 0;
}
.rightlistBox .rs3 .rs3-item a:hover {
  background: rgba(230, 244, 250, 0.5);
  border-radius: 5px;
}
.rightlistBox .rs3 .rs3-photo {
  float: left;
}
.rightlistBox .rs3 .rs3-photo img {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  object-fit: cover;
}
.rightlistBox .rs3 .rs3-inner {
  margin-left: 40px;
}
.rightlistBox .rs3 .rs3-inner .rs3-author {
  font-weight: 700;
}
.rightlistBox .rs3 .rs3-inner .rs3-text {
  font-size: 12px;
  text-align: justify;
}
.rightlistBox .rs3 .rs3-item:last-child a {
  border-bottom: none;
}
/************排队看这些***************/
.rightlistBox .rs4 li {
  padding: 8px 0;
  text-align: justify;
}
.rightlistBox .rs4 li a {
  font-weight: 600;
}
.rightlistBox .rs4 li a:hover {
  color: #64609e;
}

/*回到顶部*/
/*返回到顶部*/
.toTop {
  position: fixed;
  right: 40px;
  z-index: 99;
  width: 70px;
  height: 900px;
  transition: all 0.5s 0.3s ease-in-out;
  cursor: pointer;
}

.toTop img {
  width: 100%;
  height: auto;
}

@keyframes toflow {
  0% {
    /*top:400px;*/
    transform: scale(0.95) translate(0, 10px);
  }
  50% {
    /*top:410px;*/
    transform: scale(1) translate(0, 0px);
  }
  100% {
    /*top:400px;*/
    transform: scale(0.95) translate(0, 10px);
  }
}
</style>