<!-- 用户中心 -->
<template>
  <div v-if="userId">
    <div v-if="isEdit"
         class="tcommonBox">
      <header>
        <h1>
          编辑个人资料
        </h1>
      </header>
      <section>
        <ul class="userInfoBox">
          <li class="avatarlist">
            <span class="leftTitle">头像</span>
            <div class="avatar-uploader">
              <img :src="editUser.avatar"
                   class="avatar" />
            </div>

          </li>
          <li class="username">
            <span class="leftTitle">昵称</span>
            <span>{{ editUser.username || "无" }}</span>
          </li>
          <li>
            <span class="leftTitle">个性标签</span>
            <template>
              <el-radio-group v-model="editUser.label">
                <el-radio v-for="(item,index) in usertab"
                          :key="'usertab'+index"
                          :label="item">{{ item }}</el-radio>
              </el-radio-group>
            </template>
          </li>
          <li>
            <span class="leftTitle">是否展示友链</span>
            <el-switch v-model="editUser.webBlogState"
                       :active-value="1"
                       :inactive-value="0"
                       on-color="#13ce66"
                       off-color="#aaa" />
          </li>
          <li v-show="editUser.webBlogState">
            <span class="leftTitle">网站名称</span>
            <el-input v-model="editUser.webBlogName"
                      placeholder="网站名称" /><i v-show="editUser.webBlogState"
               class="fa fa-wa fa-asterisk" />
          </li>
          <li v-show="editUser.webBlogState">
            <span class="leftTitle">网站地址</span>
            <el-input v-model="editUser.webBlog"
                      placeholder="网站"
                      value="userWeb" /> <i v-show="editUser.webBlogState"
               class="fa fa-wa fa-asterisk" />
          </li>
          <li v-show="editUser.webBlogState">
            <span class="leftTitle">网站简介</span>
            <el-input v-model="editUser.webBlogDesc"
                      type="textarea"
                      :rows="3"
                      placeholder="请输入内容" /><i v-show="editUser.webBlogState"
               class="fa fa-wa fa-asterisk" />
          </li>
          <li v-show="editUser.webBlogState"
              class="avatarlist">
            <span class="leftTitle">网站logo</span>
            <!-- 上传图片 -->
            <!-- :action="this.$store.state.host+'Userinfo/UploadImg'" -->
            <!-- action="http://www.vuebook.com/port/Userinfo/UploadImg" -->
            <el-upload class="avatar-uploader"
                       action="Userinfo/UploadImg"
                       :show-file-list="false"
                       :on-success="handleLogoSuccess"
                       :before-upload="beforeLogoUpload">
              <img v-if="userInfo.image"
                   src="./../../assets/img/tou.jpg"
                   class="avatar">
              <i v-else
                 class="el-icon-plus avatar-uploader-icon" />
              <div slot="tip"
                   class="el-upload__tip">点击上传头像，只能上传jpg/png文件，且不超过1mb</div>
            </el-upload>
          </li>
        </ul>
        <div class=" saveInfobtn">
          <a class="tcolors-bg"
             href="javascript:void(0);"
             @click="isEdit=!isEdit">取消</a>
          <a class="tcolors-bg"
             href="javascript:void(0);"
             @click="saveInfoFun">保 存</a>
        </div>
      </section>
    </div>
    <div v-show="!isEdit"
         class="tcommonBox">
      <header>
        <h1>
          个人中心
          <button class="gotoEdit"
                  @click="gotoEdit"><i class="fa fa-wa fa-edit" />编辑</button>
        </h1>
      </header>
      <section>
        <ul class="userInfoBox">
          <li class="avatarlist">
            <span class="leftTitle">头像</span>
            <div class="avatar-uploader">
              <img :src="userInfo.avatar"
                   class="avatar" />
            </div>
          </li>
          <li class="username">
            <span class="leftTitle">昵称</span>
            <span>{{ userInfo.username || "无" }}</span>
          </li>
          <li>
            <span class="leftTitle">个性标签</span>
            <span>{{ userInfo.label?userInfo.label:"未设置" }}</span>
          </li>
          <li>
            <span class="leftTitle">是否展示友链</span>
            <span>{{userInfo.webBlogState ? '是': '否'}}</span>
          </li>
          <li>
            <span class="leftTitle">网站名称</span>
            <span>{{ userInfo.webBlogName||"无" }}</span>
          </li>
          <li>
            <span class="leftTitle">网站地址</span>
            <p class="rightInner">{{ userInfo.webBlog || "无" }}</p>
          </li>
          <li>
            <span class="leftTitle">网站简介</span>
            <p class="rightInner">{{ userInfo.webBlogDesc || "无" }}</p>
          </li>
          <li class="avatarlist">
            <span class="leftTitle">网站logo</span>
            <div class="avatar-uploader">
              <img :src="userInfo.webBlogIcon"
                   class="avatar">
            </div>
          </li>
        </ul>

      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { userTag } from '@/utils/constants'
import _ from 'lodash'
export default {
  name: 'UserInfo',
  data() { // 选项 / 数据
    return {
      isEdit: false,
      state: true, // 是否展示友链开关
      usertab: userTag,
      editUser: {},
      wwwHost: 'http://' + window.location.host // 图片域名
    }
  },
  computed: {
    ...mapState('user', [
      'username',
      'userId',
      'avatar',
      'userInfo'
    ])
  },
  methods: { // 事件处理器
    ...mapActions('user', ['edit']),
    handleAvatarSuccess(res) { // 上传头像
      // console.log('用户头像',res.image_name,file);
      // console.log(URL.createObjectURL(file.raw));
      if (res.code == 1001) { // 存储
        this.userInfo.avatar = res.image_name
        this.userInfo.head_start = 1
      } else {
        this.$message.error('上传图片失败')
      }
    },
    beforeAvatarUpload(file) { // 判断头像大小
      const isJPG = file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 1
      // console.log(file);
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/JPEG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 1MB!')
      }
      return isJPG && isLt2M
    },
    handleLogoSuccess(res) { // 上传网站logo
      if (res.code == 1001) { // 存储
        this.userInfo.image = res.image_name
        this.userInfo.logo_start = 1
      } else {
        this.$message.error('上传图片失败')
      }
    },
    beforeLogoUpload(file) { // 控制网站logo图片大小
      const isJPG = file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 1

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/JPEG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 1MB!')
      }
      return isJPG && isLt2M
    },

    async saveInfoFun() {
      if (this.editUser.webBlogState) {
        var pattern = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        // const pattern = new RegExp('(https?|ftp|file)://[-w+&@#/%=~|?!:,.;]+[-w+&@#/%=~|]')
        // console.log(pattern.test(that.userInfo.url));
        console.log('this.editUser.webBlog', this.editUser)
        if (!this.editUser.webBlog || !pattern.test(this.editUser.webBlog)) { // 如果展示友链 网址为必填项
          this.$message.error('请正确填写网址，如http://www.xxx.com')
          return
        }
        if (!this.editUser.webBlogName) { // 如果展示友链 网址为必填项
          this.$message.error('请填写网站名称')
          return
        }
        if (!this.editUser.webBlogDesc) { // 如果展示友链 网址为必填项
          this.$message.error('请填写网站简介')
          return
        }
      }
      await this.edit(this.editUser)
      this.$message.success('保存成功！')
      this.isEdit = false
    },
    gotoEdit() {
      this.isEdit = !this.isEdit
      this.editUser = _.cloneDeep(this.userInfo)
    }
  },
  created() {

  }
}
</script>

<style>
.userInfoBox .avatarlist {
  position: relative;
}

.avatar-uploader {
  display: inline-block;
  vertical-align: top;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 120px;
  height: 120px;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
}
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
}
.gotoEdit {
  font-size: 15px;
  float: right;
  cursor: pointer;
  color: #999;
}
.gotoEdit:hover {
  color: #333;
}
/*个人设置*/
.userInfoBox .leftTitle {
  display: inline-block;
  width: 100px;
  padding: 10px 0;
}
.userInfoBox .rightInner {
  display: inline-block;
  max-width: calc(100% - 140px);
  vertical-align: top;
}
.userInfoBox li {
  padding: 20px;
  border-bottom: 1px solid #ddd;
}
.userInfoBox li:last-child {
  border-bottom: 1px solid transparent;
}
.userInfoBox .el-input,
.userInfoBox .el-textarea {
  max-width: 300px;
  min-width: 100px;
}

.userInfoBox .el-input__inner {
  border-radius: 4px;
}
.userInfoBox .el-textarea {
  vertical-align: top;
}
.saveInfobtn {
  margin: 20px 0;
  text-align: center;
}
.saveInfobtn a {
  color: #fff;
  padding: 6px 20px;
  margin: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}
.userInfoBox .fa-asterisk {
  color: #df2050;
}
</style>
