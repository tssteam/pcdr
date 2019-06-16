// pages/userConsole/userConsole.js
Page({

  data: {
   pc:{pcin:"",pcout:""},
   pin:'',
   pout:'',
    address1: "",
    address2: "",
    longitude: 113.324520,
    latitude: 23.099994,
    markers: [{
      id: 0,
      iconPath: "../../images/Taxi.png",
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }  
    ]

  },



  getLocation: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: 0,
            iconPath: "../../images/Taxi.png",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50
          }],
        })
      }
    })
  },


  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
      console.log(this.data.id) //
           //this.data.id 可以在Page({})里data中设定id

    }
    return {
      title: '标签',
      path: '/pages/home/index', 
      success: function (res) {
        // 转发成功
        console.log(res);
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }

  },

  onLoad: function (options) {
    console.log("接收到的参数是=" + options.pc)
    this.data.pc = JSON.parse(options.pc);
    this.setData({ pin: this.data.pc.pcin,
    pout: this.data.pc.pcout
    }
     
    );
  },
  order:function(){
    wx.navigateTo({
      url: '../myinfo1/myinfo1',
    })

  },
  mypage:function(){

    wx.navigateTo({
      url: '../mypage/mypage',
    })
  }
})