<!-- 文章列表 -->
<template>
  <el-row class="sharelistBox">
    <!-- <div v-if="this.$route.name=='Share'&&!this.$route.query.keywords" class="shareTitle">
      <div class="ui label">
        <a :href="'#/Share?classId='+classId">{{className}}</a>
      </div>
      <ul v-if="sonclassList" class="shareclassTwo">
        <li v-for="(citem,index) in sonclassList">
          <a :href="'#/Share?classId='+classId+'&classtwoId='+citem.class_id" :class="citem.class_id==classtwoId?'active':''">{{citem.cate_name}}</a>
        </li>
      </ul>
    </div> -->
    <el-col :span="24" class="s-item tcommonBox" v-for="(item,index) in articleList" :key="'article'+index">
      <span class="s-round-date">
        <span class="month" v-html="showInitDate(item.create_time,'month')+'月'"></span>
        <span class="day" v-html="showInitDate(item.create_time,'date')"></span>
      </span>
      <header class="article-head">
        <h1 class="article-head-title">
          <a :href="'#/DetailShare?aid='+item.id" target="_blank">
            {{item.title}}
          </a>
        </h1>
        <h2 class="article-head-count">
          <i class="fa fa-fw fa-user"></i>发表于
          <i class="fa fa-fw fa-clock-o"></i><span v-html="showInitDate(item.create_time,'all')">{{showInitDate(item.create_time,'all')}}</span> •
          <i class="fa fa-fw fa-eye"></i>{{item.browse_count}} 次围观 •
          <i class="fa fa-fw fa-comments"></i>活捉 {{item.comment_count}} 条 •
          <span class="rateBox">
            <i class="fa fa-fw fa-heart"></i>{{item.like_count?item.like_count:0}}点赞 •
            <i class="fa fa-fw fa-star"></i>{{item.collect_count?item.collect_count:0}}收藏
          </span>
        </h2>
        <div class="ui label">
          <a :href="'#/Share?classId='+item.class_id">{{item.cate_name}}</a>
        </div>
      </header>
      <div class="article-content">
        <div class="article-description" >
          {{item.description}}
        </div>
        <div class="article-img">
          <img :src="item.image" alt="" class="maxW">
        </div>
      </div>
      <div class="viewdetail">
        <a class="tcolors-bg" :href="'/detail/'+item.id" target="_blank">
          阅读全文
          <i class="el-icon-d-arrow-right"></i>
        </a>
      </div>
    </el-col>
    <!-- <el-col class="viewmore h5-viewmore">
      <a v-show="hasMore" class="tcolors-bg" href="javascript:void(0);" @click="addMoreFun">点击加载更多</a>
      <a v-show="!hasMore" class="tcolors-bg" href="javascript:void(0);">暂无更多数据</a>
    </el-col> -->
    <el-col class="tcommonBox">
      <el-pagination class="pagination-list" background :page-size="10" :pager-count="5" layout="prev, pager, next" :total="1000">
      </el-pagination>
    </el-col>

  </el-row>
</template>

<script>
// import {ShowArticleAll,ArtClassData,initDate} from '../utils/server.js'
import { initDate } from '@/utils/index.js'
export default {
  name: 'Share',
  data () { //选项 / 数据
    return {
      artId: 0,
      classId: 0,
      sendId: '',
      className: '',
      sonclassList: '',//二级分类
      classtwoId: 5,
      keywords: '',
      hasMore: true,
      level: 1,
      shareClass: [
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
      ],
      queryClass: 1,
      articleList: [
        {
          'create_time': "2020-06-16 15:26:52",
          'like_count': 55,
          'browse_count': 333,
          'collect_count': 88,
          'cate_name': '分类标签',
          'comment_count': 777,
          'title': '文章标题',
          'class_id': 3,
          'description': 'ddwfwefwerwerwerwer',
          'image': 'asdfdsf',
          'id': 'sd'
        },
        {
          'create_time': "2020-06-16 15:26:52",
          'like_count': 55,
          'browse_count': 333,
          'collect_count': 88,
          'cate_name': '分类标签',
          'comment_count': 777,
          'title': '文章标题',
          'class_id': 3,
          'description': 'ddwfwefwerwerwerwer',
          'image': 'asdfdsf',
          'id': 'sd'
        },
        {
          'create_time': "2020-06-16 15:26:52",
          'like_count': 55,
          'browse_count': 333,
          'collect_count': 88,
          'cate_name': '分类标签',
          'comment_count': 777,
          'title': '文章标题',
          'class_id': 3,
          'description': 'ddwfwefwerwerwerwer',
          'image': 'asdfdsf',
          'id': 'sd'
        },
        {
          'create_time': "2020-06-16 15:26:52",
          'like_count': 55,
          'browse_count': 333,
          'collect_count': 88,
          'cate_name': '分类标签',
          'comment_count': 777,
          'title': '文章标题',
          'class_id': 3,
          'description': 'ddwfwefwerwerwerwer',
          'image': 'asdfdsf',
          'id': 'sd'
        },
        {
          'create_time': "2020-06-16 15:26:52",
          'like_count': 55,
          'browse_count': 333,
          'collect_count': 88,
          'cate_name': '分类标签',
          'comment_count': 777,
          'title': '文章标题',
          'class_id': 3,
          'description': 'ddwfwefwerwerwerwer',
          'image': 'asdfdsf',
          'id': 'sd'
        }
      ],
    }
  },

  methods: { //事件处理器
    showInitDate: function (oldDate, full) {
      console.log(oldDate, full);
      return initDate(oldDate, full)
    },
    showSearchShowList: function (initpage) {//展示数据
      var that = this;
      that.classId = (that.$route.query.classId == undefined ? 0 : parseInt(that.$route.query.classId));//获取传参的classId
      that.keywords = that.$store.state.keywords;//获取传参的keywords
      that.classtwoId = that.$route.query.classtwoId == undefined ? '' : parseInt(that.$route.query.classtwoId);//获取传参的classtwoId
      that.sendId = that.classtwoId ? that.classtwoId : that.classId;
      that.level = that.keywords ? 0 : that.classtwoId ? 0 : 1;
      // console.log(that.classId);
      // ArtClassData(function(msg){
      // console.log(msg);
      // that.shareClass = msg;
      // })
      //判断当前显示的分类名称 以及子分类
      // for(var i=0;i<that.shareClass.length;i++){
      //     if(that.classId==that.shareClass[i].class_id){
      //         that.className = that.shareClass[i].cate_name;
      //         if(that.shareClass[i].ChildsSon&&that.shareClass[i].ChildsSon.length>0){
      //             that.sonclassList = that.shareClass[i].ChildsSon;
      //         }else{
      //             that.sonclassList = '';
      //         }
      //     }
      // }
      //初始化 文章id为0开始
      that.artId = initpage ? 0 : that.artId;
      // ShowArticleAll(that.artId,that.sendId,that.keywords,that.level,(result)=>{
      // console.log(result);
      // if(result.code==1001){
      //     var msg = result.data;
      //     if(msg.length>0&&msg.length<10){
      //         that.hasMore = false
      //     }else{
      //         that.hasMore = true;
      //     }
      //     that.articleList = initpage ? msg : that.articleList.concat(msg);
      //     that.artId = msg[msg.length-1].id;
      //     // console.log(that.artId);
      // }else{
      //     that.hasMore = false;
      //     that.articleList = initpage ? [] : that.articleList;
      // }
      // })
    },
    addMoreFun: function () {//查看更多
      this.showSearchShowList(false);
    },
    routeChange: function () {
      // var that = this;
      this.showSearchShowList(true);
    }
  },
  components: { //定义组件

  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    //  '$route':'routeChange',
    //  '$store.state.keywords':'routeChange'
  },
  created () { //生命周期函数
    // console.log(this.$route);
    // var that = this;
    // that.routeChange();
  }
}
</script>

<style>
/*文章列表*/
.sharelistBox {
  transition: all 0.5s ease-out;
  font-size: 15px;
}
.pagination-list {
  text-align: center;
}
.pagination-list.el-pagination.is-background .el-pager li,
.pagination-list.el-pagination.is-background .btn-next,
.pagination-list.el-pagination.is-background .btn-prev {
  border-radius: 5px;
}
.pagination-list.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #97dffd;
}
.pagination-list.el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #97dffd;
  color: #ffffff;
}
/* .pagination-list.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #ffffff;
} */
</style>
<style lang="less" scoped>
.sharelistBox{
  .article-head {
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
  }
  .article-head .article-head-title {
    padding: 20px 0 10px 0;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    line-height: 30px;
  }
  .article-head .article-head-count{
    margin: 10px 0;
    line-height: 24px;
    text-align: center;
    color: #555;
    font-size: 14px;
    .rateBox {
      display: inline-block;
    }
    i {
      font-size: 16px;
    }
  }
  .article-description{
    text-indent:2em;
  }
  .article-img{
    max-height:300px;
    overflow:hidden;
    text-align:center;
  }
  section p {
    line-height: 24px;
    margin: 10px 0;
  }
}
</style>


