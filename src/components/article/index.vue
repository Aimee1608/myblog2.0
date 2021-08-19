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
    <el-col v-for="(item,index) in list"
            :key="'article'+index"
            :span="24"
            class="s-item tcommonBox">
      <articleHead :item="item" />
      <div class="article-content"
           @click="goDetail(item._id)">
        <div class="article-description">
          {{ item.description }}
        </div>
        <div class="article-img">
          <img :src="item.image"
               alt=""
               class="maxW">
        </div>
      </div>
      <div class="viewdetail">
        <a class="tcolors-bg"
           @click="goDetail(item._id)">
          阅读全文
          <i class="el-icon-d-arrow-right" />
        </a>
      </div>
    </el-col>
    <!-- <el-col class="viewmore h5-viewmore">
      <a v-show="hasMore" class="tcolors-bg" href="javascript:void(0);" @click="addMoreFun">点击加载更多</a>
      <a v-show="!hasMore" class="tcolors-bg" href="javascript:void(0);">暂无更多数据</a>
    </el-col> -->
    <el-col class="tcommonBox">
      <el-pagination class="pagination-list"
                     background
                     :page-size="pageSize"
                     :current-page.sync="current"
                     layout="prev, pager, next"
                     :total="total"
                     @current-change="handleCurrentChange" />
    </el-col>

  </el-row>
</template>

<script>
// import {ShowArticleAll,ArtClassData,initDate} from '../utils/server.js'
import { mapState } from 'vuex'
import { initDate, filterName } from '@/utils/index.js'
import { shareClass } from '@/utils/constants'
import articleAPI from '@/api/article'
import articleHead from '@/components/articleHead'
export default {
  name: 'Share',
  components: { // 定义组件
    articleHead
  },
  data() { // 选项 / 数据
    return {
      artId: 0,
      classId: 0,
      sendId: '',
      className: '',
      sonclassList: '', // 二级分类
      classtwoId: 5,
      keywords: '',
      hasMore: true,
      level: 1,
      shareClass,
      queryClass: 1,
      list: [],
      pageSize: 10,
      current: 1,
      total: 0,
      totalPage: 0
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    //  '$route':'routeChange',
    //  '$store.state.keywords':'routeChange'
  },
  async created() { // 生命周期函数
    // console.log(this.$route);
    // var that = this;
    // that.routeChange();

    await this.getList()
  },

  methods: { // 事件处理器
    async getList() {
      const options = {
        keywords: this.keywords,
        pageSize: this.pageSize,
        currentPage: this.current
      }

      const res = await articleAPI.getList(options)
      console.log('list---data', res.data)
      const {
        list,
        pagination
      } = res.data
      this.list = list
      this.total = pagination.total
      this.totalPage = pagination.totalPage
      this.current = pagination.currentPage
      this.listLoading = false
    },
    showSearchShowList(initpage) { // 展示数据
      var that = this
      that.classId = (that.$route.query.classId === undefined ? 0 : parseInt(that.$route.query.classId))// 获取传参的classId
      that.keywords = that.$store.state.keywords// 获取传参的keywords
      that.classtwoId = that.$route.query.classtwoId === undefined ? '' : parseInt(that.$route.query.classtwoId)// 获取传参的classtwoId
      that.sendId = that.classtwoId ? that.classtwoId : that.classId
      that.level = that.keywords ? 0 : that.classtwoId ? 0 : 1

      // console.log(that.classId);
      // ArtClassData(function(msg){
      // console.log(msg);
      // that.shareClass = msg;
      // })
      // 判断当前显示的分类名称 以及子分类
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
      // 初始化 文章id为0开始
      that.artId = initpage ? 0 : that.artId
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
    handleCurrentChange(val) {
      this.current = val
      this.getList()
    },
    addMoreFun() { // 查看更多
      this.showSearchShowList(false)
    },
    routeChange() {
      // var that = this;
      this.showSearchShowList(true)
    },
    goDetail(id) {
      console.log('this.$route', this.$route, id)
      this.$router.push({
        name: 'Detail',
        params: {
          id
        }
      })
    }
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
.sharelistBox {
  section p {
    line-height: 24px;
    margin: 10px 0;
  }
}
</style>

