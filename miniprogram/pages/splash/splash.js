// miniprogram/pages/splash/splash.js
import InitOpenId from '../../utils/openidutils.js'
const app = getApp()
const db = wx.cloud.database() //数据库实例
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //此处开始加载用户数据
    //拿到openid
    //拿到openid
    
    this.usercodeinit()

    // setTimeout(function callback() {
    //     wx.switchTab({
    //       url: '../home/index', //页面跳转相对路径要写清楚且准确
    //       success: function(res) {
    //         console.log('跳转到news页面成功') // success
    //       },
    //       fail: function(err) {
    //         console.log(err)
    //       },
    //       complete: function() {
    //         console.log('跳转到news页面完成') // complete
    //       }
    //     })
    //   }.bind(this),
    //   1000)
  },

  //用户初始化函数
  usercodeinit: function() {
    InitOpenId().then(()=>{
      //判断用户数据是否存在
      db.collection('oneuser').where({
        "_openid": app.globalData.openid
      }).get().then(res => {
        console.log(res)
        if (res.data.length != 0) { //数据存在
          let datatmp = res.data[0]
          console.log(datatmp)
          let formtemp = {
            name: datatmp.name,
            number: datatmp.phone,
            wxname: datatmp.wxname,
            prov: datatmp.prov,
            city: datatmp.city
          }
          app.globalData.userinfoexist = true
          app.globalData.userinfodocid = res.data[0]._id
          var n2 = res.data[0].name
          var wx2 = res.data[0].wxname
          var c2 = res.data[0].city
          var p2 = res.data[0].prov
          var ph2 = res.data[0].phone
          wx.setStorage({
            key: "mysec1",
            data: {
              n2,
              wx2,
              c2,
              p2,
              ph2
            },
            success: console.log("本地数据已经设定")
          })
          console.log("用户信息存在")
          setTimeout(() => {
            wx.switchTab({
              url: '../home/index', //页面跳转相对路径要写清楚且准确
            })
          }, 0)
        } else {
          console.log("用户信息不存在")
          app.globalData.userinfoexist = false
          setTimeout(() => {
            wx.redirectTo({
              url: '../addFunction/addFunction',
            })
          }, 0)
        }
      })
    }).catch(err=>{
      console.log(err)
    })
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
  bindload() {

  },
})