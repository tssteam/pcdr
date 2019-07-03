// 支付页面，暂时没用到，懒得删除。下次可以省点功夫。
// pages/myinfo/myinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: '男',
    cartype: '拼车'
  },
  switchChange: function (e) {
    if (e.detail.value) {
      this.setData({ sex: '男' });
    } else {
      this.setData({ sex: '女' });
    }
  },
  switchChange1: function (e) {
    if (e.detail.value) {
      this.setData({ cartype: '拼车' });
    } else {
      this.setData({ cartype: '不拼车' });
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  formSubmit: function (e) {
    const db = wx.cloud.database()
    db.collection('user').add({
      data: {
        username: e.detail.value.username,
        phone: e.detail.value.phone,
        sex: e.detail.value.sex,
        age: e.detail.value.age,
        cartype: e.detail.value.cartype,
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          username: e.detail.value.username,
          phone: e.detail.value.phone,
          sex: e.detail.value.sex,
          age: e.detail.value.age,
          cartype: e.detail.value.cartype,
        })
        wx.showToast({
          title: '新增记录成功',
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
    wx.navigateTo({
      url: '../mypage/mypage',
    })
  },



  onQuery: function (e) {
    const db = wx.cloud.database()
    
    // 查询当前用户所有的 counters
    db.collection('user ').where({
      data: {
        username: e.detail.value.username,
        phone: e.detail.value.phone,
        sex: e.detail.value.sex,
        age: e.detail.value.age,
        cartype: e.detail.value
      },
    }).get({
      success: res => {
        this.setData({
          username: e.detail.value.username,
          phone: e.detail.value.phone,
          sex: e.detail.value.sex,
          age: e.detail.value.age,
          cartype: e.detail.value
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


})
