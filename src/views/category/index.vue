<template>
  <div>
    <div class="shareTitle">
      <div class="ui label">
        <a>{{ className }}</a>
      </div>
      <ul v-if="tagList"
          class="shareclassTwo">
        <li v-for="item in tagList"
            :key="item.id">
          <a href=""
             :class="item.id==tagId?'active':''">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <Article />
  </div>
</template>

<script>
import Article from '@/components/article/index'
export default {
  name: '',
  components: {
    Article
  },
  data() {
    return {
      classId: 1,
      className: '分享镜',
      tagId: 2,
      tagList: [
        {
          id: 1,
          name: 'tag1'
        },
        {
          id: 2,
          name: 'tag2'
        }
      ]
    }
  },
  created() { },
  methods: {}
}
</script>

<style scoped lang="less">
/*分享标题*/
.shareTitle {
  margin-bottom: 40px;
  position: relative;
  border-radius: 5px;
  background: #fff;
  padding: 15px;
}
.shareclassTwo {
  width: 100%;
}
.shareclassTwo li {
  display: inline-block;
}
.shareclassTwo li a {
  display: inline-block;
  padding: 3px 7px;
  margin: 5px 10px;
  color: #bbbbbb;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #bbbbbb;
  transition: transform 0.2s linear;
  -webkit-transition: transform 0.2s linear;
}
.shareclassTwo li a:hover {
  transform: translate(0, -3px);
  -webkit-transform: translate(0, -3px);
}
.shareclassTwo li a.active {
  background: #fff;
  border: 1px solid #64609e;
  color: #64609e;
}
</style>
