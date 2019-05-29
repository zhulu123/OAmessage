<template>
  <div class="App">
    <p class="demo_title">图标的引用</p>
    <i class="icon iconfont icon-duihao"></i>
    <!-- 加载 -->
    <p class="demo_title">加载中与消息提示</p>
    <button @click="doToast()">提示信息</button>
    <button @click="doToast('icon')">带图标的提示信息</button>
    <button @click="doMessage(1)">一个按钮</button>
    <button @click="doMessage(2)">两个按钮</button>
    <button @click="doMessage(3)">带回调的两个按钮</button>
    <button @click="doMessage(4)">带输入框的回调</button>
    <!-- 上传文件类型判断 -->
    <p class="demo_title">上传文件类型判断</p>
    <input
      @change="image_change"
      type="file"
      title="上传图片"
      multiple
      accept="image/png, image/jpg, image/gif, image/JPEG"
    >
    <input @change="video_change" type="file" title="上传视频" multiple>
    <!-- 查看大图 使用vantui imagePreview-->
    <p class="demo_title">查看大图</p>
    <div class="img">
      <img
        @click="imagePreview(0)"
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3088925672,3912857813&fm=27&gp=0.jpg"
        alt
      >
      <img
        @click="imagePreview(1)"
        src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1900833132,1769536345&fm=27&gp=0.jpg"
        alt
      >
      <img
        @click="imagePreview(2)"
        src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=449224247,2721763316&fm=27&gp=0.jpg"
        alt
      >
      <img
        @click="imagePreview(3)"
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1339154221,1168856525&fm=27&gp=0.jpg"
        alt
      >
    </div>
    <!-- bean格式上传数据 -->
    <button @click="doBean()">上传bean格式数据</button>
  </div>
</template>

<script>
import { check_image } from "../../components/js/hw_file.js";
import { check_video } from "../../components/js/hw_file.js";
// 查看大图
import { ImagePreview } from "vant";
export default {
  name: "App",
  data() {
    return {
      hw_search: {
        provinceId: "",
        cityId: "",
        areaId: "",
        schoolId: ""
      }
    };
  },
  watch: {},

  methods: {
    doToast(type) {
      if (type == "icon") {
        this.$toast({
          message: "成功了",
          iconClass: "icon iconfont icon-duihao"
        });
      } else {
        this.$toast({
          message: "提示信息",
          position: "bottom",
          duration: 5000
        });
      }
    },
    doMessage(type) {
      if (type == 1) {
        this.$messageBox("提示", "操作成功");
      }
      if (type == 2) {
        this.$messageBox({
          title: "提示",
          message: "您确定要怎么怎么样嘛?",
          showCancelButton: true
        });
      }
      if (type == 3) {
        this.$messageBox
          .confirm("你确定要咋咋吗?")
          .then(action => {
            console.log("进行了回调");
          })
          .catch(() => {});
      }
      if (type == 4) {
        this.$messageBox
          .prompt("请输入您的姓名")
          .then(({ value, action }) => {
            console.log(value);
          })
          .catch(()=>{
            
          })
      }
    },
    // 判断上传文件类型
    image_change() {
      let file = event.target.files[0];
      let check = check_image(file.name);
      if (!check) {
        this.hw_warn("请上传图片格式的文件");
        return;
      }
    },
    video_change() {
      let file = event.target.files[0];
      console.log(file);
      let check = check_video(file.name);
      if (!check) {
        this.hw_warn("请上传视频格式的文件");
        return;
      }
    },
    //图片预览
    imagePreview(i) {
      ImagePreview({
        images: [
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3088925672,3912857813&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1900833132,1769536345&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=449224247,2721763316&fm=27&gp=0.jpg",
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1339154221,1168856525&fm=27&gp=0.jpg"
        ],
        startPosition: i,
        onClose() {
          // do something
        }
      });
    },
    doBean() {
      let param = {
        receiverId: 19,
        receiverName: 111,
        receiverModel: 222,
        receiverSoftVersion: 333,
        isSale: "N",
        teacherPadModel: "",
        studentPadModel: "",
        // i: this.detail.clientVersion,
        // j: this.detail.APKVersion,
        openedAuthIds: [],
        provinceId: "",
        cityId: "",
        countyId: "",
        schoolId: ""
      };

      console.log(this.bean("receiverBean", param)); //this.bean(入参名,param)
    },
    getProvince() {
      var param = {
        code: "001"
      };
      var url = "/base/inter";
      this.$ajax
        .post(url, param)
        .then(out => {
          console.log(out.data.data);
        })
        .catch(error => {});
    },
    getCity() {
      var param = {
        code: "002",
        provinceId: "320000"
      };
      var url = "/base/inter";
      this.$ajax
        .post(url, param)
        .then(out => {
          console.log(out.data.data);
        })
        .catch(error => {});
    },
    getArea() {
      var param = {
        code: "003",
        cityId: "320300"
      };
      var url = "/base/inter";
      this.$ajax
        .post(url, param)
        .then(out => {
          console.log(out.data.data);
        })
        .catch(error => {});
    }
  },
  mounted: function() {
    console.log(
      "===========================加载了App.vue==============================="
    );
  }
};
</script>
<style>
.demo_title {
  font-size: 20px;
  padding: 15px;
}
.img img {
  width: 200px;
}
.van-image-preview .van-swipe {
  height: 90%;
  margin-top: 10%;
}
</style>
