<!-- 文章列表 -->
<template>
  <el-row class="sharelistBox">
    <el-col v-for="(item, index) in list" :key="'article' + index" :span="24" class="s-item tcommonBox">
      <articleHead :item="item" />
      <div class="article-content-list" @click="goDetail(item._id)">
        <Content :content="item.content" />
        <!-- <div class="article-description" >
          {{ item.description }}
        </div>-->
        <!-- <div class="article-img">
          <img :src="item.image"
               alt=""
               class="maxW">
        </div>-->
      </div>
      <div class="viewdetail">
        <!-- <a class="tcolors-bg"
           @click="goDetail(item._id)">
          阅读全文
          <i class="el-icon-d-arrow-right" />
        </a>-->
        <AButton icon="el-icon-d-arrow-right" @click="goDetail(item._id)">阅读全文</AButton>
      </div>
    </el-col>
    <el-col v-if="!listLoading" class="tcommonBox">
      <el-pagination
        class="pagination-list"
        background
        :page-size="pageSize"
        :current-page.sync="current"
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange"
      />
    </el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex'
import articleAPI from '@/api/article'
import articleHead from '@/components/articleHead'
import Content from '@/components/content'
import AButton from '@/components/abutton'
export default {
  name: 'Article',
  components: {
    // 定义组件
    articleHead,
    Content,
    AButton
  },
  props: ['type'],
  data() {
    // 选项 / 数据
    return {
      keywords: '',
      hasMore: true,
      list: [],
      pageSize: 10,
      current: 1,
      total: 0,
      totalPage: 0,
      listLoading: true
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    // 'type': 'routeChange',
    $route: 'routeChange'
  },
  async created() {
    // 生命周期函数
    await this.routeChange()
  },

  methods: {
    // 事件处理器
    ...mapActions('common', ['goDetail']),
    async getList() {
      const options = {
        keywords: this.keywords,
        like: this.like,
        collect: this.collect,
        pageSize: this.pageSize,
        currentPage: this.current
      }
      const res = await articleAPI.getList(options)
      // console.log('list---data', res.data, options)
      const { list, pagination } = res.data
      this.list = list
      this.total = pagination.total
      this.totalPage = pagination.totalPage
      this.current = pagination.currentPage
      this.listLoading = false
      // this.loadingInstance && this.loadingInstance.close()
    },

    handleCurrentChange(val) {
      this.current = val
      this.getList()
    },

    async routeChange() {
      // this.loadingInstance = this.$loading({ target: this.$refs.article })
      const { keywords } = this.$route.query

      this.keywords = keywords
      this.like = this.type === 'like' ? 1 : 0
      this.collect = this.type === 'collect' ? 1 : 0
      // console.log('this.like', this.like, this.collect, this.type)
      await this.getList()
    }
  }
}
</script>

<style>
/*文章列表*/
.sharelistBox {
  transition: all 0.5s ease-out;
  font-size: 15px;
  min-height: 500px;
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
.article-content-list {
  // overflow: hidden;
  // max-height: 300px;
}
</style>
