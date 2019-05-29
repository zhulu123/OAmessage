<template>
  <div class="NoticeList listStyle">
    <van-tabs
      @click="changeTab"
      color="#0096ff"
      title-active-color="#0096ff"
      :line-width="lineWidth"
    >
      <van-tab title="收到的通知">
        <receive-wrapper></receive-wrapper>
      </van-tab>
      <van-tab title="发布的通知">
        <send-wrapper :addclass="'top2'"></send-wrapper>
      </van-tab>
    </van-tabs>
    <fixed :toTop="true" :add="true"></fixed>
  </div>
</template>

<script>
import sendWrapper from "../../components/vue/sendWrapper";
import receiveWrapper from "../../components/vue/receiveWrapper";
import fixed from "../../components/vue/fixed";
export default {
  name: "NoticeList",
  data() {
    return {
      lineWidth: document.body.clientWidth / 2,
    };
  },
  components: {
    sendWrapper: sendWrapper,
    receiveWrapper:receiveWrapper,
    fixed:fixed
  },
  watch: {},

  methods: {
    changeTab(index, title) {
      this.$toast(title);
    }
  },
  mounted: function() {
 
  }
};
</script>

