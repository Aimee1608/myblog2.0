<!-- 留言板 -->
<template>
  <div class="messageBox">
    <div class="tMSGbox tcommonBox">
      <div class="message-title">留言板</div>
      <section>
        <h2>
          走过路过不要错过！交流、咨询、吐槽、感叹、勾搭都在这里，尽情畅谈！
        </h2>
        <h2>
          欢迎加博主微信进前端学习交流群，不定期会发送学习资料，共同进步哦！
        </h2>
        <!-- <h2>感兴趣的也可以关注博主微信公众号 微信搜索 Aimee来啦</h2> -->
        <div class="">
          <img src="@/assets/img/timg.jpg" class="maxW" alt="">
        </div>
      </section>
    </div>
    <Message id="message" />
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
.messageBox {
  .message-title {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    padding: 30px 0;
  }
  // .aboutmeImg {
  //   max-width: 100%;
  //   /*height:300px;*/
  // }
  // .aboutme-description {
  //   font-size: 15px;
  //   line-height: 25px;
  //   padding: 10px 30px;
  // }
}
.tMSGbox section h2 {
  font-weight: bold;
  line-height: 24px;
  padding: 10px 20px;
}
.tMSGbox section div {
  margin: 15px 0;
}
</style>
