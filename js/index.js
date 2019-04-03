$(function () {
  $.ajax({
    type:'get',
    url: 'http://157.122.54.189:9094/api/public/v1/home/swiperdata',
    dateType:'json',
    success:function (result) {
      // console.log(result)
      // 如果获取成功，才生成动态结构
      if(result.meta.status==200){
        // 生成图片结构
        var html = template('pyg_bannerTemp',result)
        console.log(result)
        $('.pyg_indexbanner').html(html)

        var indhtml = template('indicatorTemp',result)
        $('.mui-slider-indicator').html(indhtml)
        
        mui('.mui-slider').slider({
          interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
        });
      }
    }
  })
})