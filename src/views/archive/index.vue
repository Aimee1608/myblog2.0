<template>
  <div class="tcommonBox archive-box">
    <div class="archive-title">归档</div>
    <div class="archive-class-title">分类</div>
    <ul class="archive-class-all">
      <li v-for="item in classList" :key="item._id" :class="item._id === classId ? 'class-selected' : ''">
        <a href="javascript:void(0);" @click="goClassList(item._id)">
          {{
          item.name
          }}
        </a>
        <span>（{{ item.count }}）</span>
      </li>
    </ul>
    <div v-if="tags.length > 0" class="archive-class-children">
      <div
        v-for="item in tags"
        :key="item._id"
        :class="[
          'archive-class-children-item',
          item._id === tagsId && 'archive-class-children-item-selected'
        ]"
      >
        <a href="javascript:void(0);" @click="goClassListChildren(item._id)">
          {{
          item.name
          }}
        </a>
      </div>
    </div>
    <div v-for="item in articleList" :key="item.year" class="article-time">
      <div class="archive-class-title">{{ item.year }}</div>
      <el-timeline>
        <el-timeline-item v-for="a in item.list" :key="a._id" class="archive-class-item-box" :hide-timestamp="true">
          <span class="archive-class-item-time">
            {{
            getTimeLine(a.createDate)
            }}
          </span>
          <a class="archive-class-item-title" href="javascript:void(0);" @click="goDetail(a._id)">{{ a.title }}</a>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import articleAPI from '@/api/article'
import { getTimeLine } from '@/utils'
export default {
  name: 'Archive',
  components: {},
  data() {
    return {
      classList: [],
      articleList: [],
      classId: null,
      tagsId: null,
      tags: []
    }
  },
  async created() {
    this.classId = this.$route.query.classId || null
    this.tagsId = this.$route.query.tagsId || null
    await this.getAllList(this.classId, this.tagsId)
  },
  methods: {
    ...mapActions('common', ['goDetail']),
    getTimeLine,
    async getAllList(classId, tagsId) {
      const res = await articleAPI.getListByClass({ classId, tagsId })
      this.classList = res.data.classList
      this.articleList = res.data.articleList.sort((a, b) => b.year - a.year)
      this.tags = res.data.tags
      // console.log('res--', res)
    },
    async goClassList(id) {
      this.classId = id
      await this.getAllList(id, null)
      this.$router.push({
        name: 'Archive',
        query: {
          classId: id
        }
      })
    },
    async goClassListChildren(id) {
      this.tagsId = id
      await this.getAllList(this.classId, id)
      this.$router.push({
        name: 'Archive',
        query: {
          classId: this.classId,
          tagsId: id
        }
      })
    }
  }
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
      // margin-right: 20px;
      padding: 8px 10px;
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
    li.class-selected {
      // color: #fff;
      background-color: rgba(171, 51, 0, 0.6);
      border-radius: 4px;
      a,
      span {
        color: #fff;
      }
    }
  }
  .archive-class-children {
    width: 100%;
    display: flex;
    padding-left: 20px;
    margin-bottom: 20px;
    .archive-class-children-item {
      color: #333333;
      margin-right: 10px;
      a {
        color: #333333;
        &:hover {
          color: #ff4d00;
        }
      }
      span {
        color: #bbb;
      }
    }
    .archive-class-children-item-selected {
      a {
        color: #ff4d00;
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
  .archive-class-item-box {
    .el-timeline-item__content {
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
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
