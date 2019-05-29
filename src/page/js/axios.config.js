'use strict'

import axios from 'axios'
import qs from 'qs'
import { Toast  } from 'vant'
import router from "../../router";
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : '/request';

const Axios = axios.create({
  timeout: 5000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

Axios.interceptors.request.use(//请求前
  config => {
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    Toast({
      message: "请求超时",
      position: "bottom",
      duration: 2000
    });
    return Promise.reject(error);
  }
)

Axios.interceptors.response.use(//处理数据
  res => {
    if(res.data.code == 'S0000'){
      return res;
    }else if(res.data.code == 'N0008'){// 登录失败或未登录
      // router.push({name:'Login'});
    }else{
      Toast({
        message: res.data.msg,
        position: "bottom",
        duration: 2000
      });
      return Promise.reject(res);
    }
  },
  error => {
    if (error.response.status === 403) {
      Toast({
        message: "服务器拒绝请求",
        position: "bottom",
        duration: 2000
      });
    }
    if (error.response.status === 500) {
      Toast({
        message: "服务器错误",
        position: "bottom",
        duration: 2000
      });
      
    }
    if (error.response.status === 504) {
      Toast({
        message: "连接服务器超时",
        position: "bottom",
        duration: 2000
      });
      
    }
    if (error.response.status === 404) {
      Toast({
        message: "找不到请求的网页",
        position: "bottom",
        duration: 2000
      });
       
    }

    // 返回 response 里的错误信息
    let errorInfo = error;
    return Promise.reject(errorInfo);
  }
)

export default Axios
