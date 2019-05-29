<template>
  <div class="NoticeDetail detailStyle">
    <div class="title">
      <img :src="urgentImg" alt>
      <p class="tname">市政府办公室关于转发《国务院办公厅关于2019年部分节假日安排》的通知</p>
      <div>
        <p>
          类型：
          <span>校内文件</span>
        </p>
        <p>发布部门：教务处</p>
      </div>
      <div class="last">
        <p>发布时间：2018-12-29 13:29</p>
        <p>发布人：张娟娟</p>
      </div>
      <p class="tread" @click="openReadDetail">阅读情况：24/<span>50</span></p>
    </div>
    <div class="content">
      <p>这里是标题</p>
      <div>
        这里是内容这里是内容这里是内容这里是内容这里是
        内容这里是内容这里是内容这里是内容这里是内容这
        里是内容这里是内容这里是内容这里是内容这里是内
        容这里是内容这里是内容这里是内容这里是内容这里
        是内容这里是内容这里是内容这里是内容这里是内容
        这里是内容这里是内容这里是内容这里是内容这里是
        内容这里是内容这里是内容这里是内容这里是内容这
        里是内容这里是内容这里是内容这里是内容这里是内
        容这里是内容这里是内容这里是内容这里是内容这里
        是内容这里是内容这里
        是内容这里是内容这里是内容这里是内容这里是内容
        这里是内容这里是内容这里是内容这里是内容这里是
        内容这里是内容这里是内容这里是内容这里是内容这
        里是内容这里是内容这里是内容这里是内容这里是内
        容这里是内容这里是内容这里是内容这里是内容这里
        是内容这里是内容这里是内容这里是内容这里是内容
        这里是内容这里是内容这里是内容这里是内容这里是
        内容这里是内容这里是内容这里是内容这里是内容这
        里是内容这里是内容这里是内容这里是内容这里是内
        容这里是内容这里是内容这里是内容这里是内容这里
        是内容这里是内容这里
        是内容这里是内容这里是内容这里是内容这里是内容
        是内容这里是内容这里是内容这里是内容这里是内容
        这里是内容这里是内容这里是内容这里是内容这里是
        内容这里是内容这里是内容这里是内容这里是内容这
        里是内容这里是内容这里是内容这里是内容这里是内
        容这里是内容这里是内容这里是内容这里是内容这里
        是内容这里是内容这里是内容这里是内容这里是内容
        这里是内容这里是内容这里是内容这里是内容这里是
        内容这里是内容这里是内容这里是内容这里是内容这
        里是内容这里是内容这里是内容这里是内容这里是内
        容这里是内容这里是内容这里是内容这里是内容这里
        是内容这里是内容这里
        是内容这里是内容这里是内容这里是内容这里是内容
      </div>
    </div>
    <div class="footer">
        <p>附件：</p>
        <ul>
          <li>
            <a href="#">
              <i class="icon iconfont iconfile"></i>
              <span>附件.png</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon iconfont iconfile"></i>
              <span>另一个附件.png</span>
            </a>
          </li>
        </ul>
    </div>
    <!-- 查看阅读情况开始 -->
    <van-popup v-model="readDetailFlag" position="right" class="rightpop">
      <read-detail @readDetail_close = "readDetail_close"></read-detail>
    </van-popup>
    <!-- 查看阅读情况结束 -->
    <fixed :toTop="true" :add="false"></fixed>
  </div>
</template>

<script>
import commonImg from "../resource/huanet/images/common.png";
import importImg from "../resource/huanet/images/important.png";
import urgentImg from "../resource/huanet/images/urgent.png";
import fixed from "../../components/vue/fixed";
import readDetail from "../../components/vue/readDetail"
export default {
  name: "NoticeDetail",
  data() {
    return {
      commonImg: commonImg,
      importImg: importImg,
      urgentImg: urgentImg,
      readDetailFlag:false
    };
  },
  props: {
    id: String
  },
  components: {
    fixed:fixed,
    readDetail:readDetail
  },
  watch: {},

  methods: {
    openReadDetail(){
      this.readDetailFlag = true;
    },
    readDetail_close(){
      this.readDetailFlag =false;
    }
  },
  mounted: function() {}
};
</script>

