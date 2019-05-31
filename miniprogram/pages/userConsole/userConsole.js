// pages/userConsole/userConsole.js
Page({

  data: {
   
  },


  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
      console.log(this.data.id) //
           //this.data.id 可以在Page({})里data中设定id

    }
    return {
      title: '标签',
      path: '/pages/detail/detail?id=' + this.data.id, 
      success: function (res) {
        // 转发成功
        console.log(res);
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }

  },

  onLoad: function (options) {
   
  },
  order:function(){
    wx.navigateTo({
      url: '../item/item',
    })

  },
  mypage:function(){

    wx.navigateTo({
      url: '../mypage/mypage',
    })
  }
})