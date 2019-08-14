// pages/addFunction/addFunction.js
const db = wx.cloud.database() //数据库实例
const app = getApp() //app示例
const code = `// 云函数入口函数
exports.main = (event, context) => {
  console.log(event)
  console.log(context)
  return {
    sum: event.a + event.b
  }
}`

Page({

  data: {
    canIUseClipboard: wx.canIUse('setClipboardData'),
    userinfoexist: undefined, //用户信息是否存在
    userinfodocid: undefined, //数据库的docid
    userinfoFormData: {},
    city:"纽约市",
    district:"曼哈顿区",
    province:"纽约州",
    addr:null,


  },
  // 提交信息上传到数据库和缓存到本地，让其他页面读取

  formSubmit: function(e) {
    var n2 = e.detail.value.name
    var wx2 = e.detail.value.wxname
    var c2 = e.detail.value.city
    var p2 = e.detail.value.prov
    var ph2 = e.detail.value.phone
    wx.setStorage({
      key: "mysec1",
      data: {
        n2,
        wx2,
        c2,
        p2,
        ph2
      },
      success: console.log("ok")
    })
    if (app.globalData.userinfoexist != undefined) {
      if (app.globalData.userinfoexist === false) {
        db.collection('oneuser').add({
          data: {
            wxname: e.detail.value.wxname,
            prov: e.detail.value.prov,
            city: e.detail.value.city,
            name: e.detail.value.name,
            phone: e.detail.value.phone,
          },
          success: res => {
            // 在返回结果中会包含新创建的记录的 _id
            this.setData({
              wxname: e.detail.value.wxname,
              prov: e.detail.value.prov,
              city: e.detail.value.city,
              name: e.detail.value.name,
              phone: e.detail.value.phone,
            })
            wx.showToast({
              title: '用户信息已登记',
            })
            app.globalData.userinfoexist = true
            console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
            wx.switchTab({
              url: '../home/index', 
            })
          },
          fail: err => {
            wx.showToast({
              icon: 'none',
              title: '新增记录失败'
            })
            console.error('[数据库] [新增记录] 失败：', err)
          }
        })
      } else {
        db.collection('oneuser').doc(app.globalData.userinfodocid).update({
          data: {
            wxname: e.detail.value.wxname,
            prov: e.detail.value.prov,
            city: e.detail.value.city,
            name: e.detail.value.name,
            phone: e.detail.value.phone,
          }
        }).then(res => {
          console.log(res)
        })
        wx.showToast({
          icon: 'none',
          title: '用户信息已经更新'
        })
      }
    } else {
      wx.showToast({
        icon: 'none',
        title: '等候平台同步用户数据'
      })
    }

  },
  onShow:function(){
    this.setData({
      city: wx.getStorageSync("youraddress").city,
      district: wx.getStorageSync("youraddress").district,
      province: wx.getStorageSync("youraddress").province ,
      addr: wx.getStorageSync("youraddress").addr ,
      image: wx.getStorageSync("userInfo").avatarUrl,
      
    })
  },

  location:function(){
  wx.navigateTo({
    url: '../shopMap/shopMap',
  })

  },
  //加载的时候向后端获取openid
  onLoad: function(options) {
    //判断用户数据是否存在
    db.collection('oneuser').where({
      "_openid": app.globalData.openid
    }).get().then(res => {
      console.log(res)
      if (res.data.length != 0) { //数据不存在
        let datatmp = res.data[0]
        console.log(datatmp)
        let formtemp = {
          name: datatmp.name,
          number: datatmp.phone,
          wxname: datatmp.wxname,
          prov: datatmp.prov,
          city: datatmp.city
        }
        this.setData({
          userinfoexist: true,
          userinfodocid: res.data[0]._id,
          userinfoFormData: formtemp
        })
      } else {
        this.setData({
          userinfoexist: false,
        })
      }
    })
  },

  copyCode: function() {
    wx.setClipboardData({
      data: code,
      success: function() {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },


})