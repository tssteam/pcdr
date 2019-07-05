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
    cartype: '拼车',
    result: '',
    sex: '男',
    canIUseClipboard: wx.canIUse('setClipboardData'),
    userinfoexist: undefined, //用户信息是否存在
    userinfodocid: undefined, //数据库的docid
    userinfoFormData: {}
  },
  switchChange: function(e) {
    if (e.detail.value) {
      this.setData({
        sex: '男'
      });
    } else {
      this.setData({
        sex: '女'
      });
    }
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
    if (this.data.userinfoexist != undefined) {
      if (this.data.userinfoexist === false) {
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
            this.setData({
              userinfoexist: true
            })
            console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
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
        db.collection('oneuser').doc(this.data.userinfodocid).update({
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



  // onQuery: function(e) {
  //   const db = wx.cloud.database()
  //   // 查询当前用户所有的 counters
  //   db.collection('oneuser ').where({
  //     data: {
  //       wxname: e.detail.value.wxname,
  //       prov: e.detail.value.prov,
  //       city: e.detail.value.city,
  //       name: e.detail.value.name,
  //       phone: e.detail.value.phone,
  //       sex: e.detail.value.sex,

  //     },
  //   }).get({
  //     success: res => {
  //       this.setData({
  //         wxname: e.detail.value.wxname,
  //         prov: e.detail.value.prov,
  //         city: e.detail.value.city,
  //         name: e.detail.value.name,
  //         phone: e.detail.value.phone,
  //         sex: e.detail.value.sex,

  //       })
  //       console.log('[数据库] [查询记录] 成功: ', res)
  //     },
  //     fail: err => {
  //       wx.showToast({
  //         icon: 'none',
  //         title: '查询记录失败'
  //       })
  //       console.error('[数据库] [查询记录] 失败：', err)
  //     }
  //   })
  // },





  //加载的时候向后端获取openid
  onLoad: function(options) {
    //判断用户数据是否存在
    db.collection('oneuser').where({
      "_openid": app.globalData.openid
    }).get().then(res => {
      console.log(res)
      if (res.data.length != 0) {
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

  testFunction() {
    wx.cloud.callFunction({
      name: 'sum',
      data: {
        a: 1,
        b: 2
      },
      success: res => {
        wx.showToast({
          title: '调用成功',
        })
        this.setData({
          result: JSON.stringify(res.result)
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '调用失败',
        })
        console.error('[云函数] [sum] 调用失败：', err)
      }
    })
  },

})