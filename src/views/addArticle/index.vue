<template>
  <!-- 添加文章 -->
  <div class="wrap">
    <div class="mark">
      <textarea id=""
                v-model="markValue"
                name=""
                cols="25"
                rows="10"
                class="editor" />
      <div class="show"
           v-html="currentValue" />
    </div>
    <el-button class=""
               @click="save">
      保存
    </el-button>
    <el-button @click="add">
      新增
    </el-button>
  </div>

</template>

<script>
import Marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import articleAPI from '@/api/article'
Marked.setOptions({
  renderer: new Marked.Renderer(),
  highlight(code) {
    return hljs.highlightAuto(code).value
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})
export default {
  name: 'AddArticle',
  components: { // 定义组件

  },
  data() {
    return {
      markValue: ''
    }
  },
  computed: {
    currentValue() {
      return Marked(this.markValue)
    }
  },
  created() { // 生命周期函数

  },
  methods: { // 事件处理器
    async add() {
      const res = await articleAPI.add()
    }
  }
}
</script>

<style lang="less">
.t {
  width: 300px;
  height: 100px;
}

.mark {
  width: 1200px;
  // height: 600px;
  margin: 0 auto;
}

.editor,
.show {
  width: 550px;
  height: 600px;
  border: 1px solid #666;
}
</style>
