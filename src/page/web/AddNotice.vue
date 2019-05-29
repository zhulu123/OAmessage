<template>
  <div class="AddNotice addstyle">
    <div class="form_box">
      <div class="form_item sure flex">
        <label class="left" for="title">通知标题：</label>
        <div class="right">
          <input type="text" name id="title" v-model="title" placeholder="请输入通知标题">
        </div>
      </div>
      <div class="line"></div>
      <div class="form_item sure flex">
        <label class="left" for>通知类型：</label>
        <div class="right">
          <div class="select" @click="chooseType_open">
            <span>{{chooseType.label}}</span>
            <i class="icon iconfont icondown"></i>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="form_item sure flex">
        <label class="left" for>文件重要性：</label>
        <div class="right">
          <div class="select" @click="chooseImport_open">
            <span>{{chooseImport.label}}</span>
            <i class="icon iconfont icondown"></i>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="form_item sure flex">
        <label class="left" for>接收人员：</label>
        <div class="right">
          <div class="select" @click="choosePerson_open">
            <span>请选择</span>
            <i class="icon iconfont iconinto"></i>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="form_item">
        <label class="left" for="content">通知内容：</label>
        <div class="right">
          <div class="textarea">
            <textarea name id="content" placeholder="请输入内容"></textarea>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="form_item">
        <label class="left" for="title">添加附件：</label>
        <div class="right">
          <div class="fileBox">
            <div class="inputBox">
              <input type="file" id="file" multiple @change="uploadImg($event)">
              <i class="icon iconfont iconupload"></i> 上传附件
            </div>
            <ul class="fileBoxList">
              <li v-for="(item,index) in fileList" v-bind:key="index">
                <a>
                  <i class="icon iconfont iconfile"></i>
                  {{item.name}}
                </a>
                <i class="icon iconfont icondelete" @click="removeUpImg(index)"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <van-button class="submit" type="info">完成</van-button>
    <!-- 选择类型开始 -->
    <van-popup v-model="chooseType.show" position="bottom" :overlay="true">
      <van-picker
        show-toolbar
        :default-index="chooseType.index"
        :columns="chooseType.columns"
        @cancel="chooseType_cancel"
        @confirm="chooseType_confirm"
      />
    </van-popup>
    <!-- 选择类型结束 -->
    <!-- 选择重要性开始 -->
    <van-popup v-model="chooseImport.show" position="bottom" :overlay="true">
      <van-picker
        show-toolbar
        :default-index="chooseImport.index"
        :columns="chooseImport.columns"
        @cancel="chooseImport_cancel"
        @confirm="chooseImport_confirm"
      />
    </van-popup>
    <!-- 选择重要性结束 -->
    <!-- 选择机构开始 -->
    <van-popup v-model="choosePerson.show" position="right" class="rightpop">
      <choose-user-all @choosePerson_close="choosePerson_close"></choose-user-all>
    </van-popup>
    <!-- 选择机构结束 -->
  </div>
</template>

<script>
import chooseUserAll from "../../components/vue/chooseUserAll"
export default {
  name: "AddNotice",
  data() {
    return {
      title: "", //标题
      chooseType: {
        //类型
        show: false,
        index: null,
        value: "", //实际值
        label: "请选择通知类型", //展示值
        columns: [
          //注：姓名的key值只能叫text 否则取不到
          { text: "校文件", id: "1" },
          { text: "局文件", id: "2" },
          { text: "内部文件", id: "3" }
        ]
      },
      chooseImport: {
        //类型
        show: false,
        index: null,
        value: "", //实际值
        label: "请选择重要性", //展示值
        columns: [
          //注：姓名的key值只能叫text 否则取不到
          { text: "一般", id: "1" },
          { text: "重要", id: "2" },
          { text: "紧急", id: "3" }
        ]
      },
      choosePerson: {
        show: false
      },
      fileList: [] //文件列表
    };
  },
  components:{
    chooseUserAll:chooseUserAll
  },
  watch: {},

  methods: {
    //==============上传附件功能开始===================//
    // 上传附件开始
    uploadImg(event) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.fileList.push(event.target.files[i]);
      }
      console.log(this.fileList);
    },

    // 取消上传的文件
    removeUpImg(index) {
      this.fileList.splice(index, 1);
    },
    //==============上传附件功能结束===================//
    //==============通知类型开始===================//
    chooseType_open() {
      this.chooseType.show = true;
    },
    chooseType_cancel() {
      this.chooseType.show = false;
    },
    chooseType_confirm(picker, value) {
      console.log(picker);
      console.log(value);
      this.chooseType.show = false;
      this.chooseType.value = value;
      this.chooseType.label = picker.text;
    },
    //==============通知类型结束===================//
    //==============重要性开始===================//
    chooseImport_open() {
      this.chooseImport.show = true;
    },
    chooseImport_cancel() {
      this.chooseImport.show = false;
    },
    chooseImport_confirm(picker, value) {
      console.log(picker);
      console.log(value);
      this.chooseImport.show = false;
      this.chooseImport.value = value;
      this.chooseImport.label = picker.text;
    },
    //==============重要性结束===================//
    // ==============选择人员开始===================//
    choosePerson_open() {
      this.choosePerson.show = true;
    },
    choosePerson_close() {
      this.choosePerson.show = false;
    }
    // ==============选择人员结束===================//
  },
  mounted: function() {}
};
</script>

