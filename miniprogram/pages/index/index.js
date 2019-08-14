//index.js
import InitOpenId from '../../utils/openidutils.js'
const app = getApp()

Page({
  data: {
    userInfo:null,
    userall:[
      {
        name:"我的订单(乘客)",
        img:"/images/pdd.png",
        tap:"open",
        id:"1"
      },
      {
        name: "我的订单(司机)",
        img: "/images/cardd.png",
        tap: "open1",
        id: "2"
      },
      {
        name: "个人信息",
        img: "/images/Tourist.png",
        tap: "personalinformation",
        id: "3"
      },
      {
        name: "客服中心",
        img: "/images/msg_1.png",
        tap: "",
        id: "4"
      }

    ]
  },

  onLoad: function () {
     var that =this 
      that.setData({
          userInfo:wx.getStorageSync("userInfo")
      })
  },


  //乘客页面入口
  open: function() {
    wx.navigateTo({
      url: '../orderp/orderp'
    })
  },
  //司机页面入口
  open1: function() {

    wx.navigateTo({
      url: '../ordercar/ordercar'
    })
  },
    //个人页面入口
  personalinformation: function () {

    wx.navigateTo({
      url: '../Personalinformation/Personalinformation'
    })
  },

})