<!-- 关于我 -->
<template>
  <div class="aboutmeBox">
    <div class="tcommonBox">
      <div class="aboutme-title">关于我</div>
      <section class="aboutme-content">
        <p class="">
          <img src="@/assets/img/maoto.png" alt="" class="aboutmeImg" />
        </p>
        <p class="aboutme-description">
          欢迎来到Mango
          Ya！我是Aimee，是一个可爱的girl，前端程序媛，喜欢各种有趣的事物，爱好各种动手的小玩意儿
        </p>
        <p class="aboutme-description">90后小姐姐😍，前端小萌新，</p>
        <p class="aboutme-description">
          爱美食，爱动手做美食，想长胖的尽管来。
        </p>
        <p class="aboutme-description">博客2021年9月16日更新2.0</p>
      </section>
    </div>
    <Message id="aboutme" />
  </div>
</template>

<script>
import Message from './../../components/message/index'
export default {
  components: {
    // 定义组件
    Message
  },
  data() {
    // 选项 / 数据
    return {}
  },
  created() {
    // 生命周期函数
  },
  methods: {
    // 事件处理器
  }
}
</script>

<style scoped lang="less">
.aboutmeBox {
  .aboutme-title {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    padding: 30px 0;
  }
  .aboutmeImg {
    max-width: 100%;
    /*height:300px;*/
  }
  .aboutme-description {
    font-size: 15px;
    line-height: 25px;
    padding: 10px 30px;
  }
}
</style>
