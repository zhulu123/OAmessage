<template>
  <div>
    <div class="hwui-tab-tab">
      <div :class="{active:active=='N'}" @click="active='N';changeTab()">未读</div>
      <i class="line"></i>
      <div :class="{active:active=='Y'}" @click="active='Y';changeTab()">已读</div>
    </div>
    <div class="wrapper" :class="{top2:addclass=='top2'}">
      <van-list
        class="logList"
        v-model="list.loading"
        :finished="list.finished"
        finished-text="没有更多内容~"
        @load="load_list()"
      >
        <ul class="msgList">
          <li
            v-for="(item,index) in list.items"
            :key="index"
            @click="changeRouter('NoticeDetail',item)"
          >
            <van-swipe-cell :right-width="50" :left-width="0">
              <van-cell-group>
                <div class="wrapper_box">
                  <p>{{item.title}}</p>
                  <div>
                    <p>{{item.typeName}}</p>
                    <p>
                      {{item.readCount}}/
                      <span>{{item.allCount}}</span>
                    </p>
                  </div>
                  <p>由 {{item.pubUserName}} 发布于 {{item.pubTime}}</p>
                </div>
              </van-cell-group>
              <p slot="right" @click="do_delete(item)">
                删
                <br>除
              </p>
            </van-swipe-cell>
          </li>
        </ul>
        <div class="hwui-clr"></div>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "wrapper",
  data() {
    return {
      active: "N",
      list: {
        items: [],
        refreshing: false,
        loading: false,
        error: false,
        finished: false,
        page: 1,
        size: 10
      }
    };
  },
  watch: {},
  props: { addclass: String },
  methods: {
    load_list() {
      let url = "/receive/notice/manage/query";
      let param = {
        page: this.list.page,
        size: this.list.size
      };
      if (this.active == "N") {
        param.isRead = 0;
      } else {
        param.isRead = 1;
      }
      this.$ajax
        .post(url, param)
        .then(out => {
          var map = out.data.result;
          for (let i in map.list) {
            this.list.items.push(map.list[i]);
          }
          this.list.loading = false;
          if (this.list.page == parseInt(map.total / 10) + 1) {
            console.log(this.list.items);
            console.log(this.list.page);
            this.list.finished = true;
          } else {
            console.log(this.list.items);
            console.log(this.list.page);
            this.list.page = map.page + 1;
          }
          console.log(this.list.items.length);
        })
        .catch(error => {
          console.log(error);
          this.list.loading = false;
          this.list.finished = true;
          this.list.items = [];
        });
    },
    changeTab() {
      this.list= {
        items: [],
        refreshing: false,
        loading: false,
        error: false,
        finished: false,
        page: 1,
        size: 10
      }
    },
    do_delete(item) {
      this.$dialog
        .confirm({
          message: "确定删除吗？"
        })
        .then(() => {
          console.log("执行了删除");
        })
        .catch(e => {});
    },
    changeRouter(link, id) {
      this.$router.push({ name: link, params: { id: id } });
    }
  },
  mounted: function() {}
};
</script>

