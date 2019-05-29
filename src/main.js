/* jshint esversion: 6 */
import Vue from 'vue';
import router from './router';

// 处理ajax请求
import axios from './page/js/axios.config.js';
Vue.prototype.$ajax = axios;

// 引入vantui
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false;
// 引入JS组件
import './page/js/components.js';
// 引入服务端的样式内容
import './page/js/server.js';





import Entry from './Entry.vue';
new Vue({
  el:'#index',
  router,
  components: {Entry},
  template: '<Entry/>'
});
