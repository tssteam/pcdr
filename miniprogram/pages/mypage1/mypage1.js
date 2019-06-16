
Page({
  data: {
    show: false,
    t:"预约后看微信:",
    leftMin: 0, //左边滑块最小值
    leftMax: 1200, //左边滑块最大值
    rightMin: 1300, //右边滑块的最小值
    rightMax: 2400, //右边滑块最大值
    leftValue: 1000, //左边滑块默认值
    rightValue: 1500, //右边滑块默认值
    leftWidth: '50', //左边滑块可滑动长度：百分比
    rightWidth: '50', //右边滑块可滑动长度：百分比

    leftMin1: 0, //左边滑块最小值
    leftMax1: 2500, //左边滑块最大值
    rightMin1: 2600, //右边滑块的最小值
    rightMax1: 5000, //右边滑块最大值
    leftValue1: 1000, //左边滑块默认值
    rightValue1: 2800, //右边滑块默认值
    leftWidth1: '50', //左边滑块可滑动长度：百分比
    rightWidth1: '50', //右边滑块可滑动长度：百分比


 
  

    order_list1: [],
    avatarUrl: "cloud://anglfs-5f307e.616e-anglfs-5f307e/logo.jpg"
  },

  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },


  // 遮罩层显示
  show: function () {
    this.setData({ flag: false })
    wx.navigateTo({
      url: '../cal/index',
    })
  },
  // 遮罩层隐藏
  conceal: function () {
    this.setData({ flag: true })
  },

 
  // 左边滑块滑动的值
  leftChange: function (e) {
    console.log('左边改变的值为：' + e.detail.value);
    var that = this;
    that.setData({
      leftValue: e.detail.value //设置左边当前值
    })
  },
  // 右边滑块滑动的值
  rightChange: function (e) {
    console.log('右边改变的值为：' + e.detail.value);
    var that = this;
    that.setData({
      rightValue: e.detail.value,
    })
  },

  // 左边滑块滑动的值
  leftChange1: function (e) {
    console.log('左边改变的值为：' + e.detail.value);
    var that = this;
    that.setData({
      leftValue1: e.detail.value //设置左边当前值
    })
  },
  // 右边滑块滑动的值
  rightChange1: function (e) {
    console.log('右边改变的值为：' + e.detail.value);
    var that = this;
    that.setData({
      rightValue1: e.detail.value,
    })
  },




  getwxname: function (options) {
    var _this = this;
    db.collection('carfindp').get({
      success: res => {
        console.log(res.data)
        this.setData({
          t: 15220229041,

        })

      }
    })

  },



  onShow: function (e) {
    wx.setNavigationBarTitle({ title: '拼车达人（美国版）' })
    wx.cloud.init({
      traceUser: true
    })


    wx.cloud.callFunction({
      name: 'getcar',

      complete: res => {
        var _this = this;

        const db = wx.cloud.database()

        this.setData({
          order_list1: res.result.data.reverse(),

        })


      }
    })
  }
    ,
})