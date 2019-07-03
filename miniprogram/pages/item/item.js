var app = getApp();
Page({
  data: {
    list: [],
    loading: true,
    id:''
  },
  /**
   * 生命周期函数--监听页面加载
   */

  /**
   * 完成状态登录判断按钮
   */
  onfin:function(){
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        var _this = this;
        console.log(this.data.id);
        const db = wx.cloud.database()
        db.collection('user').doc(this.data.id).update({

          data: {
           zt:"已完成"
          } 
        }
      
        )
        wx.navigateBack({
          url: '../myinfo1/myinfo1',
        })

      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)

      }
    }) 


  },

  /**
   * 删除订单，因为业务逻辑是这样的，首先要登录，之后，确认是自己的订单后，才能选择删除。里面调用的是微信唯一的ID，也就是用户id只有唯一的一个
   */
  onRemove: function (){
    console.log(this.data.id)

    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        var _this = this;
        console.log(this.data.id);
        const db = wx.cloud.database()
        db.collection('user').doc(this.data.id).remove()
        wx.navigateBack({
          url: '../myinfo1/myinfo1',
        })
      
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)

      }
    }) 

  },

/**
   * 登录状态的连接和数据库订单id+个人id的信息查询然后加载到页面上去
   */
  onLoad: function (options) {
    console.log(options.id)
  
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        var _this = this;
        const db = wx.cloud.database()
        db.collection('user').where({
          _openid: res.result.openid,
          _id: options.id
        })
          .get({
           
            success: res => {
              console.log(res.data),
              
              this.setData({
                list: res.data,
                loading: false ,
                id:options.id,
              })
            
            }
          })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)

      }
    }) 
  }
}
)
