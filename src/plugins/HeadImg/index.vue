<template>
  <img :src="src" :onerror="errorAvatar" />
</template>
<script>
export default {
  name: 'HeadImg',
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      errorAvatar:
        'this.onerror=null;this.src="' + require('@/assets/img/tou.jpg') + '"'
    }
  }
}
</script>
