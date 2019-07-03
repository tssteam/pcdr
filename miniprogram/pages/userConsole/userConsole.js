// pages/userConsole/userConsole.js
var coors

var that2

Page({

  data: {
   pc:{pcin:"",pcout:""},
   pin:'',
   pout:'',
   address1:"",
   address2:"",
   polyline: [],
    longitude: 113.324520,
    latitude: 23.099994,
    markers: [{
      id: 0,
      iconPath: "../../images/Taxi.png",
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    markers1: [{
      id: 0,
      iconPath: "../../images/Taxi.png",
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],

  },


// p位置使用函数
  getLocation: function () {
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
       that.setData({
         latitude: res.latitude,
         longitude: res.longitude,
         markers:[{
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


// 暂时没用到，下次有机会使用
  onReady: function () {

    that2 = this

    wx.request({

      url: 'https://apis.map.qq.com/ws/direction/v1/driving/?from=23.362490,116.715790&to=23.37228,116.75498&output=json&callback=cb&key=22VBZ-REEK5-WVSI7-QKCOP-QPM6E-W7BPO',


      success: function (res) {



        coors = res.data.result.routes[0].polyline


        for (var i = 2; i < coors.length; i++) { coors[i] = coors[i - 2] + coors[i] / 1000000 }

        console.log(coors)

      }


    })


  },








   end: function () {


    var b = []

    for (var i = 0; i < coors.length; i = i + 2) {

      b[i / 2] = {

        latitude: coors[i], longitude: coors[i + 1]
      }

       console.log(b[i / 2])

    }

    console.log(b.length)



     that2.setData({

      polyline: [{

        points: b,

        color: "#99FF00",

        width: 4,

        dottedLine: false

      }],



     })

  },











// 转发功能

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


// 拿到上一个界面传回来的状态，显示从哪里到哪里
  onLoad: function (options) {
    console.log("接收到的参数是=" + options.pc)
    this.data.pc = JSON.parse(options.pc);
    console.log(this.data.pc.pcout)
    console.log(this.data.pc.pcin)
    this.setData({ pin: this.data.pc.pcin,
    pout: this.data.pc.pcout,
      address1: this.data.pc.pcin,
      address2: this.data.pc.pcout,
    }
     
    );
  },

  // 订单界面
  order:function(){
    wx.navigateTo({
      url: '../myinfo1/myinfo1',
    })

  },


// 所有xx的界面
  mypage:function(){

    wx.navigateTo({
      url: '../mypage1/mypage1',
    })
  }
})