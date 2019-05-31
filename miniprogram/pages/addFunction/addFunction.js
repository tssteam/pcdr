// pages/addFunction/addFunction.js

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
    sex:'男',
    canIUseClipboard: wx.canIUse('setClipboardData'),
  },
  switchChange: function (e) {
    if (e.detail.value) {
      this.setData({ sex: '男' });
    } else {
      this.setData({ sex: '女' });
    }
  },

  formSubmit: function (e) {
    const db = wx.cloud.database()
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
          title: '记录成功',
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
 
  },



  onQuery: function (e) {
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('oneuser ').where({
      data: {
        wxname: e.detail.value.wxname,
        prov: e.detail.value.prov,
        city: e.detail.value.city,
        name: e.detail.value.name,
        phone: e.detail.value.phone,
        sex: e.detail.value.sex,

      },
    }).get({
      success: res => {
        this.setData({
          wxname: e.detail.value.wxname,
          prov: e.detail.value.prov,
          city: e.detail.value.city,
          name: e.detail.value.name,
          phone: e.detail.value.phone,
          sex: e.detail.value.sex,

        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },






  onLoad: function (options) {

  },

  copyCode: function() {
    wx.setClipboardData({
      data: code,
      success: function () {
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

