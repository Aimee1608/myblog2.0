<template>
  <!-- 添加文章 -->
  <div>
    <span class="s-round-date">
      <span class="month"
            v-html="showInitDate(item.createDate,'month')+'月'" />
      <span class="day"
            v-html="showInitDate(item.createDate,'date')" />
    </span>
    <header class="article-head">
      <h1 class="article-head-title">
        <a :href="'#/DetailShare?aid='+item._id"
           target="_blank">
          {{ item.title }}
        </a>
      </h1>
      <h2 class="article-head-count">
        <i class="fa fa-fw fa-user" />发表于
        <i class="fa fa-fw fa-clock-o" /><span>{{ showInitDate(item.createDate) }}</span> •
        <i class="fa fa-fw fa-eye" />{{ item.browseCount }} 次围观 •
        <i class="fa fa-fw fa-comments" />活捉 {{ item.commentCount }} 条 •
        <span class="rateBox">
          <i class="fa fa-fw fa-heart" />{{ item.likeCount?item.likeCount:0 }}点赞 •
          <i class="fa fa-fw fa-star" />{{ item.collectCount?item.collectCount:0 }}收藏
        </span>
      </h2>
      <div v-if="activeCateList.length>0"
           class="ui label">
        <a :href="'#/Share?classId='+item.classId">{{ filterName(activeCateList, item.classId) }}</a>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { initDate, filterName } from '@/utils/index.js'
export default {
  name: 'ArticleHead',
  props: {
    item: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      markValue: ''
    }
  },
  computed: {
    ...mapState('common', ['activeCateList'])
  },
  created() { // 生命周期函数

  },
  methods: { // 事件处理器
    filterName,
    showInitDate: initDate
  }
}
</script>

<style lang="less">
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
.article-head .article-head-count {
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
.article-description {
  text-indent: 2em;
}
.article-img {
  max-height: 300px;
  overflow: hidden;
  text-align: center;
}
</style>
