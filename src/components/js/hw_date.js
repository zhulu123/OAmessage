export default function init() {

}
// 日期转字符串
export function string_to_date(value,formatString) {
  if(formatString == '') {
    formatString = 'yyyy-MM-dd HH:mm';
  }
  // yyyy-MM-dd HH:mm
  let date = new Date(value).format(formatString);
  if (date == "1970-01-01 08:00") {
    return "--";
  } else {
    return date;
  }
}
// 字符串转日期
export function date_to_string(value,formatString) {
  return dateFtt(formatString,value);//直接调用公共JS里面的时间类处理的办法
}


export function dateFtt(fmt,value) { //author: meizz
  let date = new Date(value);
  var o = {
    "M+" : date.getMonth()+1,                 //月份
    "d+" : date.getDate(),                    //日
    "h+" : date.getHours(),                   //小时
    "m+" : date.getMinutes(),                 //分
    "s+" : date.getSeconds(),                 //秒
    "q+" : Math.floor((date.getMonth()+3)/3), //季度
    "S"  : date.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(let k in o) {
    if(new RegExp("("+ k +")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
  return fmt;
}
