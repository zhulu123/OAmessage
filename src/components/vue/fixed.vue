<template>
  <div>
    <ul class="fixedicon">
      <li v-show="add" @click="addNotice">
        <i class="icon iconfont iconedit"></i>
      </li>
      <li v-show="toTop && topFlag" @click="backToTop">
        <i class="icon iconfont icontotop"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "fixed",
  data() {
    return {
      topFlag: false
    };
  },
  props: { toTop: Boolean, add: Boolean },
  watch: {},

  methods: {
    backToTop() {
      let that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.topFlag = true;
      } else {
        that.topFlag = false;
      }
    },
    addNotice(){
      this.$router.push({name:"AddNotice"});
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  mounted: function() {
    window.addEventListener("scroll", this.scrollToTop);
  }
};
</script>

