<!-- 赞赏模块 -->
<template>
  <div class="tRewardBox tcommonBox">
    <div class="reward-title">赞赏</div>
    <div class="reward-img">
      <img src="@/assets/img/timg.jpg" alt="" class="maxW" />
    </div>
    <div class="reward-description-title">@赞赏说明：</div>
    <div class="reward-content">
      若无特殊说明，赞赏之款项用于给我补充大脑（*/∇＼*）
    </div>
    <div class="reward-content">
      如果我给你带来过欢乐，或者对你有所帮助，欢迎赞赏支持:)
    </div>
    <hr />
    <div class="reward-description-title">@赞赏方式：</div>
    <el-row :gutter="30">
      <el-col :span="12" class="donate-item">
        <div class="donate-tip">
          <img src="@/assets/img/aimee/reward-wechat.jpg" />
          <span>微信扫一扫，向我赞赏</span>
        </div>
      </el-col>
      <el-col :span="12" class="donate-item">
        <div class="donate-tip">
          <img src="@/assets/img/aimee/reward-zfb.jpg" />

          <span>支付宝扫一扫，向我赞赏</span>
        </div>
      </el-col>
    </el-row>
    <div class="reward-description-title">@赞赏记录：</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="pay_time" label="日期" align="center" />
      <el-table-column prop="name" label="赞赏人" align="center" />
      <el-table-column prop="money" label="金额" align="center" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Reward',
  components: {
    // 定义组件
  },
  data() {
    // 选项 / 数据
    return {
      tableData: [
        {
          // 赞赏数据
          pay_time: '2020-05-02',
          name: '若水',
          money: '1.5'
        }
      ]
    }
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
.tRewardBox {
  padding-bottom: 40px;
  .reward-description-title {
    font-size: 20px;
    font-weight: 700;
    padding: 10px;
    margin-bottom: 10px;
  }
  .reward-title {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    padding: 30px 0;
  }
  .reward-content {
    font-size: 15px;
    line-height: 24px;
    padding: 5px 20px;
  }
}

.tRewardBox .donate-item {
  text-align: right;
  color: #44b549;
}
.tRewardBox .donate-item:last-child {
  text-align: left;
  color: #00a0e9;
}
.tRewardBox .donate-item img {
  width: 100%;
  display: block;
  height: auto;
}
.tRewardBox .donate-item div {
  display: inline-block;
  width: 160px;
  padding: 0 6px;
  text-align: center;
  box-sizing: border-box;
}
.tRewardBox .donate-item div span {
  display: inline-block;
  width: 100%;
  margin: 10px 0;
  text-align: center;
}
.tRewardBox .el-table__body-wrapper {
  overflow: hidden;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background: transparent;
}
</style>
