// pages/myinfo1/myinfo1.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_list2: [],
    avatarUrl: "",
     userInfo: {},
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo,
                "count": 1
              })
            }
          })
        }
      }
    })
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        var _this = this;
       
        const db = wx.cloud.database()
        db.collection('carfindp').where({
          _openid: res.result.openid
        })
          .get({
            success: res => {
              this.setData({
                order_list2: res.data

              })

            }
          })    
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
  
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  
  },
  

})