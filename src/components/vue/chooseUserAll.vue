<template>
  <div class="chooseUserAll popinbox popinbox1">
    <!-- 头部开始 -->
    <div class="mynav">
      <van-nav-bar :border="false" @click-left="goBack" title="选择接收人" left-text left-arrow></van-nav-bar>
      <div class="searchbox" @click="goSearch">
        <i class="icon iconfont iconsearch"></i>
        <span>搜索部门或姓名</span>
      </div>
    </div>
    <!-- 头部结束 -->
    <!-- tab切换开始 -->
    <van-tabs
      v-show="step==1"
      @click="changeTab"
      color="#0096ff"
      title-active-color="#0096ff"
      :line-width="lineWidth"
    >
      <van-tab title="本单位">
        <ul class="levelul">
          <li v-for="item in standard.depart_list">
            <van-checkbox v-model="item.checked" checked-color="#0096ff">
              <i class="checkfont">{{item.name}}(32)</i>
            </van-checkbox>
            <div @click="changeLevel(item.departId,'',1,3,'本单位',item.name)">
              <i class="icon iconfont iconnext"></i>下级
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="其他单位">
        <div class="userbox">
          <ul class="levelul">
            <li v-for="item in other.school_list">
              <van-checkbox v-model="item.checked" checked-color="#0096ff">
                <i class="checkfont">{{item.name}}(32)</i>
              </van-checkbox>
              <div @click="changeLevel(item.schoolId,'',2,2,'其他单位',item.name)">
                <i class="icon iconfont iconnext"></i>下级
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="自定义组">
        <ul class="levelul">
          <li v-for="item in group.depart_list">
            <van-checkbox v-model="item.checked" checked-color="#0096ff">
              <i class="checkfont">{{item.name}}</i>
            </van-checkbox>
            <div @click="changeLevel(item.groupId,'',3,3,'自定义组',item.name)">
              <i class="icon iconfont iconnext"></i>下级
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
    <!-- tab切换结束 -->

    <!-- 下级页面开始 -->
    <div class="userbox" v-show="step==3 || step==2">
      <ul class="crumb">
        <li @click="changeLevel(stepList.id1,'',stepList.type,1)">{{stepList.level1}}</li>
        <li @click="changeLevel(stepList.id1,stepList.id2,stepList.type,2,stepList.level1,stepList.level2)" v-if="stepList.level3">{{stepList.level2}}</li>
        <li v-else>{{stepList.level2}}</li>
        <li v-if="stepList.level3">{{stepList.level3}}</li>
      </ul>
      <!-- 选择人开始 -->
      <ul class="levelul" v-show="step==3">
        <li v-for="item in user_list">
          <van-checkbox v-model="item.checked" checked-color="#0096ff">
            <i class="checkfont">张三</i>
          </van-checkbox>
        </li>
      </ul>
      <!-- 选择人结束 -->
      <!-- 其他单位部门选择开始 -->
      <ul class="levelul" v-show="step==2">
        <li v-for="item in other.depart_list">
          <van-checkbox v-model="item.checked" checked-color="#0096ff">
            <i class="checkfont">{{item.name}}(32)</i>
          </van-checkbox>
          <div  @click="changeLevel(stepList.id1,item.departId,stepList.type,3,stepList.level1,stepList.level2,item.name)">
            <i class="icon iconfont iconnext"></i>下级
          </div>
        </li>
      </ul>
      <!-- 其他单位部门选择结束 -->
    </div>
    <!-- 下级页面结束 -->
    <div class="bottom">
      <p>已选择：104人</p>
      <p>确定</p>
    </div>
    <!-- 搜索弹窗开始 -->
    <van-popup v-model="searchPerson.show" position="right" class="rightpop">
      <div class="mynav">
        <van-nav-bar
          :border="false"
          @click-left="searchPerson_goBack"
          title="选择接收人"
          left-text
          left-arrow
        ></van-nav-bar>
        <div class="searchbox">
          <i class="icon iconfont iconsearch"></i>
          <input type="text" placeholder="搜索部门或姓名">
          <!-- <van-search placeholder="请输入搜索关键词" v-model="searchPerson.value" /> -->
        </div>
      </div>
      <div class="searchlistBox">
        <ul class="levelul">
          <li v-for="item in searchPerson.list">
            <van-checkbox v-model="item.checked" checked-color="#0096ff">
              <i class="checkfont">张三</i>
            </van-checkbox>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <p>已选择：104人</p>
        <p>确定</p>
      </div>
    </van-popup>
    <!-- 搜索弹窗结束 -->
  </div>
</template>

<script>
export default {
  name: "chooseUserAll",
  data() {
    return {
      lineWidth: document.body.clientWidth / 3,
      searchPerson: {
        //搜索人员
        show: false,
        list: [
          { name: "张善", checked: false },
          { name: "李四", checked: false },
          { name: "王五", checked: false },
          { name: "张善", checked: false },
          { name: "李四", checked: false },
          { name: "王五", checked: false },
          { name: "张善", checked: false },
          { name: "李四", checked: false },
          { name: "王五", checked: false },
          { name: "张善", checked: false },
          { name: "李四", checked: false },
          { name: "王五", checked: false },
          { name: "张善", checked: false },
          { name: "李四", checked: false },
          { name: "王五", checked: false }
        ],
        value: ""
      },
      step: 1, //1：tab页2：其他单位部门3:所有人,
      stepList: {},
      user_list: [], //公共人员列表
      // 本单位开始
      standard: {
        depart_list: []
      },
      // 本单位结束
      // 其他单位开始
      other: {
        school_list: [],
        depart_list: []
      },
      // 其他单位结束
      // 选择组开始
      group: {
        depart_list: []
      }
      // 选择组结束
    };
  },

  watch: {},

  methods: {
    goSearch() {
      this.searchPerson.show = true;
    },
    goBack() {
      this.$emit("choosePerson_close");
    },
    searchPerson_goBack() {
      this.searchPerson.show = false;
    },
    // 开始数组交互
    changeTab(index, title) {
      this.$toast(title);
      if (index == 0) {
        this.getStandardDepart();
      }
      if (index == 1) {
        this.getOtherSchool();
      }
      if (index == 2) {
        this.getGroupDepart();
      }
    },
    // 0001获取本单位部门
    getStandardDepart() {
      console.log("getStandardDepart");
      this.standard.depart_list = [];
      this.standard.depart_list = [
        { name: "办公室", checked: false, departId:"standarddepart_1"},
        { name: "组织处", checked: false, departId:"standarddepart_2" },
        { name: "组织处", checked: false, departId:"standarddepart_3"},
        { name: "组织处", checked: false, departId:"standarddepart_4" }
      ];
    },
    // 0002获取其他单位
    getOtherSchool() {
      console.log("getOtherSchool")
      this.other.school_list = [];
      this.other.school_list = [
        { name: "大黄山实小", checked: false,schoolId:"otherschool_1"},
        { name: "荆山小学", checked: false,schoolId:"otherschool_2" },
        { name: "李井小学", checked: false,schoolId:"otherschool_3" }
      ];
    },
    // 0003获取其他单位部门
    getOtherDepart(id) {
      console.log(id);
      this.other.depart_list=[];
      this.other.depart_list = [
        { name: "办公室", checked: false,departId:"otherdepart_1"},
        { name: "组织处", checked: false,departId:"otherdepart_2" },
        { name: "组织处", checked: false,departId:"otherdepart_3" }
      ];
    },
    // 0004获取自定义组
    getGroupDepart() {
      console.log("getGroupDepart");
      this.group.depart_list = [];
      this.group.depart_list = [
        { name: "组1", checked: false,groupId:"groupdepart_1" },
        { name: "组2", checked: false,groupId:"groupdepart_2" },
        { name: "组3", checked: false,groupId:"groupdepart_3" }
      ];
    },
    //0005获取选择人员
    getUser(id,type) {
      console.log(id);
      console.log(type)
      this.user_list = [];
      // 此处获取数据时应先根据type：1本单位2其他单位3自定义组判断入参和url
      this.user_list = [
        { name: "张善", checked: false,id:"user_1" },
        { name: "李四", checked: false,id:"user_2" },
        { name: "王五", checked: false,id:"user_3" }
      ];
    },

    // step页面跳转操作
    changeLevel(id1,id2,type,step, level1, level2, level3) {//id1:一级id,id2:二级id(只有在其他单位其他部门点击时才会出现),type:1本单位2其他单位3组,step:步数,level123面包屑导航1,2,3级
      this.step = step;
      this.stepList = {};
      if (level1) {
        this.stepList.level1 = level1;
      }
      if (level2) {
        this.stepList.level2 = level2;
      }
      if (level3) {
        this.stepList.level3 = level3;
      }
      if (id1) {
        this.stepList.id1 = id1;
      }
      if (id2) {
        this.stepList.id2 = id2;
      }
      if(type){
        this.stepList.type=type;
      }
      // 控制获取数据的事件
      if(step==3){//获取所有人
        var id = id1;
        if(id2){
          id=id2;
        }
        this.getUser(id,type);
      }
      if(step==2){//获取其他单位下的部门
        this.getOtherDepart(id1);
      }
      if(step==1){//获取一级tab切换框下数据
        if(type==1){
          this.getStandardDepart();
        }
        if(type==2){
          this.getOtherSchool();
        }
        if(type==3){
          this.getGroupDepart();
        }
      }
    }
    // 结束数组交互
  },
  mounted: function() {
    this.getStandardDepart();
  }
};
</script>

