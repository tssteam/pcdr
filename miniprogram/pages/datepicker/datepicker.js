// miniprogram/pages/datepicker/datepicker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickdate: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    let pages = getCurrentPages()
    //获取上一页
    let prevPage = pages[pages.length - 2];
    console.log(prevPage)
    let pickdate = null;
    switch (Number(options.dataoption)) {
      case 1:
        pickdate = prevPage.data.dateTime;
        break;
      case 2:
        pickdate = prevPage.data.dateTime1;
        break;
      default:
        pickdate = null;
        break
    }
    this.setData({
      pickdate: pickdate,
      dataoption: options.dataoption
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //日期选择的回调函数
  //author:yewei_andy
  handleSelecteDate: function(e) {
    let pickdate = e.detail.date
    console.log(`选择的日期:${pickdate}`)
    //author:yewei_andy
    //把数据携带给上一个页面
    //获取栈中所有页面
    let pages = getCurrentPages()
    //获取上一页
    let prevPage = pages[pages.length - 2];
    this.setData({
      pickdate: pickdate,
    })
    if (this.data.dataoption == 1) {
      // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
      prevPage.setData({
        dateTime: pickdate,
        dateTime1: pickdate
      })
    } else if (this.data.dataoption == 2) {
      // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
      prevPage.setData({
        dateTime1: pickdate
      })
    }
    wx.navigateBack({
      delta: 1 // 返回上一级页面。
    })
  }
})