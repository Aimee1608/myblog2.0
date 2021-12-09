<!-- 首页 -->
<template>
  <div class="likeCollect">
    <div v-if="like" class="likeCollect-title">喜欢</div>
    <div v-if="collect" class="likeCollect-title">收藏</div>
    <Article :type="like ? 'like' : 'collect'" />
  </div>
</template>

<script>
import Article from '@/components/article/index'
export default {
  name: 'LikeCollect',
  components: {
    // 定义组件
    Article
  },
  data() {
    // 选项 / 数据
    return {
      like: 0,
      collect: 0
    }
  },
  watch: {
    $route: 'routerChange'
  },
  created() {
    // 生命周期函数
    this.routerChange()
  },
  methods: {
    // 事件处理器
    routerChange() {
      const { like, collect } = this.$route.query
      this.like = like
      this.collect = collect
      // console.log('this.like---999', this.like, this.collect)
    }
  }
}
</script>

<style lang="less">
.likeCollect {
  .likeCollect-title {
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 5px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 25px;
    font-weight: 700;
    background: #fff;
  }
}
</style>
