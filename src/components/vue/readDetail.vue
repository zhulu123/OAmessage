<template>
  <div class="readDetail popinbox popinbox2">
    <!-- 头部开始 -->
    <div class="mynav nobottom">
      <van-nav-bar :border="false" @click-left="goBack" title="阅读情况" left-text left-arrow></van-nav-bar>
    </div>
    <!-- 头部结束 -->

    <!-- tab切换开始 -->
    <van-tabs
      @click="changeTab"
      color="#0096ff"
      title-active-color="#0096ff"
      :line-width="lineWidth"
    >
      <van-tab title="已读 (24)">
        <div class="userbox">
          <p>校办公室</p>
          <ul>
            <li>李星人</li>
            <li>李星人</li>
            <li>任平</li>
            <li>李星人</li>
            <li>易烊千玺</li>
            <li>李星人</li>
            <li>迪丽热巴</li>
            <li>李星人</li>
            <li>李星人</li>
            <li>李星人</li>
            <li>李星人</li>
            <li>任平</li>
            <li>李星人</li>
            <li>易烊千玺</li>
            <li>李星人</li>
            <li>迪丽热巴</li>
            <li>李星人</li>
            <li>李星人</li>
          </ul>
        </div>
        <div class="userbox">
          <p>校办公室</p>
          <ul>
            <li>李星人</li>
            <li>李星人</li>
            <li>任平</li>
            <li>李星人</li>
            <li>易烊千玺</li>
            <li>李星人</li>
            <li>迪丽热巴</li>
            <li>李星人</li>
            <li>李星人</li>
            <li>李星人</li>
            <li>李星人</li>
            <li>任平</li>
            <li>李星人</li>
            <li>易烊千玺</li>
            <li>李星人</li>
            <li>迪丽热巴</li>
            <li>李星人</li>
            <li>李星人</li>
          </ul>
        </div>
        <div class="userbox">
          <p>校办公室</p>
          <ul>
            <li>李星人</li>
            <li>李星人</li>
            <li>任平</li>
            <li>李星人</li>
            <li>易烊千玺</li>
            <li>李星人</li>
            <li>迪丽热巴</li>
            <li>李星人</li>
            <li>李星人</li>
            <li>李星人</li>
            <li>李星人</li>
            <li>任平</li>
            <li>李星人</li>
            <li>易烊千玺</li>
            <li>李星人</li>
            <li>迪丽热巴</li>
            <li>李星人</li>
            <li>李星人</li>
          </ul>
        </div>
        <div class="userbox">
          <p>校办公室</p>
          <ul>
            <li>李星人</li>
            <li>李星人</li>
            <li>任平</li>
            <li>李星人</li>
            <li>易烊千玺</li>
            <li>李星人</li>
            <li>迪丽热巴</li>
            <li>李星人</li>
            <li>李星人</li>
            <li>李星人</li>
            <li>李星人</li>
            <li>任平</li>
            <li>李星人</li>
            <li>易烊千玺</li>
            <li>李星人</li>
            <li>迪丽热巴</li>
            <li>李星人</li>
            <li>李星人</li>
          </ul>
        </div>
      </van-tab>
     
      <van-tab title="未读 (26)">
        
      </van-tab>
    </van-tabs>
    <!-- tab切换结束 -->
  
  </div>
</template>

<script>
export default {
  name: "readDetail",
  data() {
    return {
      lineWidth: document.body.clientWidth / 2,
    };
  },

  watch: {},

  methods: {
    changeTab(index, title) {
      this.$toast(title);
    },
    goBack() {
      this.$emit("readDetail_close");
    },
  },
  mounted: function() {}
};
</script>

