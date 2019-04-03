$(function() {
  const baseURL = 'http://157.122.54.189:9094/api/public/v1/home'
  // 添加zepto拦截器： 它的作用是可以让每个ajax请求都经过这个函数进行处理
  $.ajaxSettings.beforeSend=function(xhr,obj) {
    // console.log(obj.url)
    // 拼接url
    obj.url = baseURL + obj.url
  }
})