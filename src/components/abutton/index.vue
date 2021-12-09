<!-- 首页 -->
<template>
  <span
    :class="[
      'tcolors-bg',
      'abutton',
      size == 'small' ? 'abutton-small' : 'abutton-large'
    ]"
    @click="handle"
  >
    <slot />
    <i v-if="icon" :class="icon" />
  </span>
</template>

<script>
export default {
  name: 'AButton',
  components: {
    // 定义组件
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'small'
    }
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
    handle() {
      this.$emit('click')
    }
  }
}
</script>

<style>
.abutton {
  color: #fff;
  font-size: 12px;
  padding: 0 10px;
  line-height: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
}
.abutton-large {
  display: block;
}
.abutton-small {
  display: inline-block;
}
</style>
