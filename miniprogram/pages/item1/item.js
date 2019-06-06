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
  onfin:function(){

    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        var _this = this;
        console.log(this.data.id);
        const db = wx.cloud.database()
        db.collection('carfindp').doc(this.data.id).update({

          data: {
           zt:"已完成"
          } 
        }
      
        )
        wx.navigateBack({
          url: '../myinfo2/myinfo1',
        })

      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)

      }
    }) 


  },
  onRemove: function (){
    console.log(this.data.id)

    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        var _this = this;
        console.log(this.data.id);
        const db = wx.cloud.database()
        db.collection('carfindp').doc(this.data.id).remove()
        wx.navigateBack({
          url: '../myinfo2/myinfo1',
        })
      
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)

      }
    }) 

  },

  onLoad: function (options) {
    console.log(options.id)
  
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        var _this = this;
        const db = wx.cloud.database()
        db.collection('carfindp').where({
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
