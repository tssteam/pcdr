// pages/demo/demo.js
let City = require('../../utils/allcity.js');
Page({
  data: {
    city: [],
    config: {
      horizontal: true, // 第一个选项是否横排显示（一般第一个数据选项为 热门城市，常用城市之类 ，开启看需求）
      animation: true, // 过渡动画是否开启
      search: true, // 是否开启搜索
      searchHeight: 45, // 搜索条高度
      suctionTop: true // 是否开启标题吸顶
    }
  },
  onLoad(options) {
    // wx.showLoading({
    //   title: '加载数据中...',
    // })
    // // 模拟服务器请求异步加载数据
    // setTimeout(()=>{
    console.log(options.dataoption)
    this.setData({
      city: City,
      dataoption: options.dataoption
    })
    wx.hideLoading()
    // },2000)

  },
  // 绑定点击函数，将点击的对象储存到本地中去，让其他页面可以使用储存的对象，看下面的返回去页面
  bindtap(e) {
    var name = e.detail.name
    console.log(`选择的城市:${name}`)
    //author:yewei_andy
    //把数据携带给上一个页面
    //获取栈中所有页面
    let pages = getCurrentPages()
    //获取上一页
    let prevPage = pages[pages.length - 2];
    if (this.data.dataoption == 1) {
      // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
      prevPage.setData({
        city: name
      })
    } else if (this.data.dataoption == 2) {
      // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
      prevPage.setData({
        city1: name
      })
    }

    wx.navigateBack({
      delta: 1 // 返回上一级页面。
    })
  },
})