<template>
  <div class="article-content markdown-body"
       v-html="xss(contentInner)" />
</template>

<script>
import Marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import xss from 'xss'
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
  name: 'Content',
  components: {},
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    contentInner() {
      return Marked(this.content)
    }
  },
  created() { },
  methods: {
    xss
  }
}
</script>

<style lang="less">
@import '@/assets/css/markdown.less';
</style>
