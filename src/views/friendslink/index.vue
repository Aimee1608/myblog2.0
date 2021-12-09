<!-- 友情链接模块 -->
<template>
  <div>
    <div class="tFriendsBox tcommonBox">
      <div class="friendslink-title">棒棒哒</div>
      <el-row>
        <el-col
          v-for="(item, index) in friendslink"
          :key="'f' + index"
          :span="12"
          class="tf-item"
        >
          <a :href="item.webBlog" target="_blank">
            <HeadImg :src="item.webBlogIcon" />
            <h4>{{ item.webBlogName }}</h4>
            <p>{{ item.webBlogDesc }}</p>
          </a>
        </el-col>
      </el-row>
    </div>
    <Message id="friendslink" />
  </div>
</template>

<script>
import userAPI from '@/api/user'
import Message from '@/components/message'
export default {
  name: 'Friendslink',
  components: {
    Message
  },
  data() {
    // 选项 / 数据
    return {
      friendslink: [] // 友情链接
    }
  },
  async created() {
    // 生命周期函数
    await this.getList()
  },
  methods: {
    // 事件处理器
    async getList() {
      const res = await userAPI.getWebBlogUser()
      this.friendslink = res.data
    }
  }
}
</script>

<style scoped>
.tFriendsBox {
  margin-bottom: 40px;
}
.tFriendsBox .friendslink-title {
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  padding: 30px 0;
}
.tFriendsBox .tf-item {
  transition: all 0.3s ease-out;
  border-radius: 5px;
  position: relative;
}
.tFriendsBox .tf-item:hover {
  background: rgba(230, 244, 250, 0.5);
}
.tFriendsBox .tf-item a {
  display: block;
  padding: 0 10px 0 90px;
  height: 90px;
}
.tFriendsBox .tf-item a img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
  object-fit: cover;
}
.tFriendsBox .tf-item a h4 {
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 20px;
  padding-top: 15px;
  font-weight: bold;
}
.tFriendsBox .tf-item a p {
  margin: 10px 0;
  font-size: 12px;
  line-height: 24px;
  color: #999;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
