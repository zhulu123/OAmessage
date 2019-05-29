/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
// 布局
import Layout from '../page/common/Layout.vue';
// 组件
import NoticeList from '../page/web/NoticeList.vue';
import NoticeDetail from '../page/web/NoticeDetail.vue';
import AddNotice from '../page/web/AddNotice.vue';
Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    name:'Layout',
    redirect:{
      name:'NoticeList'
    },
    component: Layout,
    children:[
      {path:'/noticeList',name:'NoticeList',component:NoticeList},// 公告列表
      {path:'/noticeDetail/:id',name:'NoticeDetail',component:NoticeDetail,props:true},// 公告详情
      {path:'/addNotice',name:'AddNotice',component:AddNotice},// 新增公告
      ]
  }]
})
