// 拼车页面，主要就是打开另外两个下单信息页面的入口
Page({

  pfindcar: function () {

    wx.navigateTo({
      url: '../pfindcar/pfindcar'
    })
  },
  carfindp: function () {

    wx.navigateTo({
      url: '../carfindp/index'
    })
  },

})
