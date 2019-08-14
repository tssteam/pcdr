// 利用加载刷选过后的乘客的订单信息逻辑页面
const db = wx.cloud.database({});
const user = db.collection('user');
var dateTimePicker = require('../../utils/dateTimePicker.js');
Page({
  data: {
    h1: "head11",
    h2: "head2",
    h3: "head3",
    h4: "head4",
    h5: "head5",
    h6: "head6",
    l1: "line",
    l2: "line1",
    l3: "line1",
    l4: "line1",
    l5: "line1",
    l6: "line1",
    all: [],
    all1: [],
    all2: [],
    all3: [],
    all4: [],
    all5: [],

    ppp: "body",
    ppp1: "bodypp",
    ppp2: "bodypp",
    ppp3: "bodypp",
    ppp4: "bodypp",
    ppp5: "bodypp",
    url: "{{api}}}}",
    outp:"起点",
    inp:"终点",
    order_list: [],
    avatarUrl: "cloud://anglfs-5f307e.616e-anglfs-5f307e/logo.jpg"
  },




  onLoad: function (options) {
    var that = this;
    var that = this;
    wx.request({
      method: "post",
      url: '{{api}}}',
      data: {
        pageNo: "1",
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
      },
      success(res) {
        that.setData({
          all5: res.data.data
        })
        console.log(res.data.data)
      }
    })
  },


  b1: function () {
    var that = this;
    wx.request({
      method: "post",
      url: '{{api}}}',
      data: {
        pageNo: "1",
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
      },
      success(res) {
        that.setData({
          all5: res.data.data
        })
        console.log(res.data.data)
      }
    })
    this.setData({
      h1: "head11",
      h2: "head2",
      h3: "head3",
      h4: "head4",
      h5: "head5",
      h6: "head6",

      l1: "line",
      l2: "line1",
      l3: "line1",
      l4: "line1",
      l5: "line1",
      l6: "line1",

      ppp: "body",
      ppp1: "bodypp",
      ppp2: "bodypp",
      ppp3: "bodypp",
      ppp4: "bodypp",
      ppp5: "bodypp",
    })
    wx.showToast({
      title: '正在加载',
      icon: 'loading'
    })
    wx.showToast({
      title: '加载完成',
      icon: 'loading'
    })
  },
  b2: function () {
    var that = this;
    wx.request({
      method: "post",
      url: '{{api}}}',
      data: {
        pageNo: "1",
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
      },
      success(res) {
        that.setData({
          all5: res.data.data
        })
        console.log(res.data.data)
      }
    })
    this.setData({
      h1: "head1",
      h2: "head22",
      h3: "head3",
      h4: "head4",
      h5: "head5",
      h6: "head6",

      l1: "line1",
      l2: "line",
      l3: "line1",
      l4: "line1",
      l5: "line1",
      l6: "line1",

      ppp: "bodypp",
      ppp1: "body",
      ppp2: "bodypp",
      ppp3: "bodypp",
      ppp4: "bodypp",
      ppp5: "bodypp",

    })
    wx.showToast({
      title: '正在加载',
      icon: 'loading'
    })
    wx.showToast({
      title: '加载完成',
      icon: 'loading'
    })
  }
  ,
  b3: function () {
    var that = this;
    wx.request({
      method: "post",
      url: '{{api}}}',
      data: {
        pageNo: "1",
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
      },
      success(res) {
        that.setData({
          all5: res.data.data
        })
        console.log(res.data.data)
      }
    })
    this.setData({
      h1: "head1",
      h2: "head2",
      h3: "head33",
      h4: "head4",
      h5: "head5",
      h6: "head6",

      l1: "line1",
      l2: "line1",
      l3: "line",
      l4: "line1",
      l5: "line1",
      l6: "line1",

      ppp: "bodypp",
      ppp1: "bodypp",
      ppp2: "body",
      ppp3: "bodypp",
      ppp4: "bodypp",
      ppp5: "bodypp",

    })
    wx.showToast({
      title: '正在加载',
      icon: 'loading'
    })
    wx.showToast({
      title: '加载完成',
      icon: 'loading'
    })
  }
  ,
  b4: function () {
    var that = this;
    wx.request({
      method: "post",
      url: '{{api}}}',
      data: {
        pageNo: "1",
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
      },
      success(res) {
        that.setData({
          all5: res.data.data
        })
        console.log(res.data.data)
      }
    })
    this.setData({
      h1: "head1",
      h2: "head2",
      h3: "head3",
      h4: "head44",
      h5: "head5",
      h6: "head6",

      l1: "line1",
      l2: "line1",
      l3: "line1",
      l4: "line",
      l5: "line1",
      l6: "line1",

      ppp: "bodypp",
      ppp1: "bodypp",
      ppp2: "bodypp",
      ppp3: "body",
      ppp4: "bodypp",
      ppp5: "bodypp",

    })
    wx.showToast({
      title: '正在加载',
      icon: 'loading'
    })
    wx.showToast({
      title: '加载完成',
      icon: 'loading'
    })
  }
  ,
  b5: function () {
    var that = this;

    wx.request({
      method: "post",
      url: '{{api}}}',
      data: {
        pageNo: "1",
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
      },
      success(res) {
        that.setData({
          all5: res.data.data
        })
        console.log(res.data.data)
      }
    })
    this.setData({
      h1: "head1",
      h2: "head2",
      h3: "head3",
      h4: "head4",
      h5: "head55",
      h6: "head6",

      l1: "line1",
      l2: "line1",
      l3: "line1",
      l4: "line1",
      l5: "line",
      l6: "line1",

      ppp: "bodypp",
      ppp1: "bodypp",
      ppp2: "bodypp",
      ppp3: "bodypp",
      ppp4: "body",
      ppp5: "bodypp",

    })
    wx.showToast({
      title: '正在加载',
      icon: 'loading'
    })
    wx.showToast({
      title: '加载完成',
      icon: 'loading'
    })
  }
  ,
  b6: function () {
    var that = this;
    wx.request({
      method: "post",
      url: '{{api}}}',
      data: {
        pageNo: "1",
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
      },
      success(res) {
        that.setData({
          all5: res.data.data
        })
        console.log(res.data.data)
      }
    })
    this.setData({
      h1: "head1",
      h2: "head2",
      h3: "head3",
      h4: "head4",
      h5: "head5",
      h6: "head66",

      l1: "line1",
      l2: "line1",
      l3: "line1",
      l4: "line1",
      l5: "line1",
      l6: "line",

      ppp: "bodypp",
      ppp1: "bodypp",
      ppp2: "bodypp",
      ppp3: "bodypp",
      ppp4: "bodypp",
      ppp5: "body",

    })
    wx.showToast({
      title: '正在加载',
      icon: 'loading'
    })
    wx.showToast({
      title: '加载完成',
      icon: 'loading'
    })
  }
  ,


  // 从home传过来的储存出发点和到达点使用，例如从xxx到xxx
  onShow: function (options) {
    wx.setNavigationBarTitle({ title: '拼车达人（美国版）' })
    var that = this;
    wx.getStorage({
      key: 'mysec',
      success: function (res) {
        wx.setNavigationBarTitle({
          title: res.data.s1 + "到" + res.data.e1
        })
        that.setData({
          outp: res.data.s1,
          inp: res.data.e1,
        })
        console.log('存储的数据')
        console.log(res.data)
        db.collection('user').where({
          out: res.data.s1,
          incar: res.data.e1,
          // site: res.data.pep1, //座位
          time: res.data.st1,
          time1: res.data.ed1,
        }
        ).get({
          success: res => {
            console.log(res.data)
            that.setData({
              order_list: res.data,
            })
          }
        })
      },
    })
  }



})



