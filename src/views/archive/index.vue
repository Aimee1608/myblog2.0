<template>
  <div class="tcommonBox archive-box">
    <div class="archive-title">归档</div>
    <div class="archive-class-title">分类</div>
    <ul class="archive-class-all">
      <li v-for="item in classList" :key="item.id"><a href="/category">{{item.name}}</a><span>（{{item.count}}）</span></li>
    </ul>
    <div class="article-time" v-for="item in articleList" :key="item.year">
      <div class="archive-class-title">{{item.year}}</div>
      <el-timeline>
        <el-timeline-item v-for="a in item.list" :key="a.id" :hide-timestamp="true">
          <span class="archive-class-item-time">{{a.time}}</span> <a class="archive-class-item-title" href="">{{a.title}}</a>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Archive',
  data () {
    return {
      classList: [
        {
          id: 1,
          name: '分享镜',
          count: 8
        },
        {
          id: 2,
          name: '创作集',
          count: 8
        },
        {
          id: 3,
          name: '事件簿',
          count: 89
        },
        {
          id: 4,
          name: '闲言碎语',
          count: 8
        }
      ],
      articleList: [
        {
          year: '2020',
          list: [
            {
              id: 1,
              time: '10-09',
              title: '科学的 Web 调试代理实践'
            },
            {
              id: 2,
              time: '10-09',
              title: '科学的 Web 调试代理实践'
            },
            {
              id: 3,
              time: '10-09',
              title: '科学的 Web 调试代理实践'
            },
            {
              id: 4,
              time: '10-09',
              title: '科学的 Web 调试代理实践'
            },
            {
              id: 5,
              time: '10-09',
              title: '科学的 Web 调试代理实践'
            },
            {
              id: 6,
              time: '10-09',
              title: 'sjsjskskskksksksksksksk'
            },
            {
              id: 9,
              time: '10-09',
              title: 'sjsjskskskksksksksksksk'
            }
          ]
        },
        {
          year: '2019',
          list: [
            {
              id: 1,
              time: '10-09',
              title: 'sjsjskskskksksksksksksk'
            },
            {
              id: 2,
              time: '10-09',
              title: 'sjsjskskskksksksksksksk'
            },
            {
              id: 3,
              time: '10-09',
              title: 'sjsddjskskskksksksksksksk'
            },
            {
              id: 4,
              time: '10-09',
              title: 'sjsjskskskksksksksksksk'
            },
            {
              id: 5,
              time: '10-09',
              title: 'sjsjskskskksksksksksksk'
            },
            {
              id: 6,
              time: '10-09',
              title: 'sjsjskskskksksksksksksk'
            },
            {
              id: 9,
              time: '10-09',
              title: 'sjsjskskskksksksksksksk'
            }
          ]
        }
      ]
    }
  },
  components: {},
  methods: {},
  created () { }
}
</script>

<style scoped lang="less">
.archive-box {
  padding-left: 50px;
  padding-right: 50px;
  .archive-title {
    // color: #444;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    padding: 30px 0;
  }
  .archive-class-title {
    text-align: left;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  .archive-class-all {
    padding: 0 10px;
    margin-bottom: 40px;
    li {
      display: inline-block;
      padding-right: 20px;
      a {
        color: #ab3300;
        &:hover {
          color: #ff4d00;
        }
      }
      span {
        color: #bbb;
      }
    }
  }
  .article-time {
    margin-bottom: 20px;
  }
}
</style>

<style lang="less">
.archive-box {
  .el-timeline-item__tail {
    border-left: 4px solid rgba(151, 223, 253, 0.1);
    left: 3px;
  }
  .el-timeline-item__wrapper {
    color: #97dffd;
  }
  .el-timeline-item__node {
    background: #97dffd;
    width: 6px;
    height: 6px;
    left: 2px;
  }
  .archive-class-item-time {
    color: #00a7e0;
    font-size: 12px;
    margin-right: 10px;
  }
  .archive-class-item-title {
    font-size: 14px;
    font-weight: 400;
    line-height: inherit;
    color: #444444;
    &:hover {
      color: #222;
    }
  }
}
</style>