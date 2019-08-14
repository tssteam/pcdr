// pages/ordercar/ordercar.js
// 这个是个人车主的订单
var getmy = require('../../static/request.js')
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
  onLoad: function (options) {
    getmy.getmy(
      "get",
      "https://pcdrapi.ywandy.top/api/getviewmypeoplefindcar",
      {
        openid: "123456"
      }
    )
    this.setData(
      {
        order_list2: wx.getStorageSync("mydd").data,
        avatarUrl: wx.getStorageSync("userInfo").avatarUrl
      }
    )
    console.log(wx.getStorageSync("mydd").data)
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