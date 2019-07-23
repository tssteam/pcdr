// pages/myinfo/myinfo.js
var dateTimePicker = require('../../utils/dateTimePicker.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: '男',
    city: '',
    ll:1,
    city1: '',
    list:"list",
    pickdate: null,
    bs: 1,
    date: '2018-10-01',
    time: '12:00',
    dateTimeArray: null,
    dateTime: null,
    datat:"datatimeno",
    dateTimeArray1: null,
    dateTime1: null,
    startYear: 2000,
    endYear: 2050,
    index: 1,
    index3: 1,
    array: ['', '1', '2', '3', '4', '5'],
    array1: ['0-50$', '50-100$', '100-150$', '150-300$', '300$++'],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    zt: "没完成",
    yd: "预定",
    pc: {
      pcin: '起点',
      pcout: '终点'
    }
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

  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  onShareAppMessage: function () {

  },

  //日期选择的回调函数
  //author:yewei_andy
  handleSelecteDate: function (e) {
    let pickdate = e.detail.date
    console.log(`选择的日期:${pickdate}`)
    //author:yewei_andy
    //把数据携带给上一个页面
    //获取栈中所有页面
    let pages = getCurrentPages()
    //获取上一页
    let prevPage = pages[pages.length - 2];
    this.setData({
      pickdate: pickdate,
    })
    if (this.data.ll == 1) {
      // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
      this.setData({
        dateTime: pickdate,
        datat: "datatimeno",
        list:"list"
      })
    } else if (this.data.ll == 2) {
      // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
      this.setData({
        dateTime1: pickdate,
        datat: "datatimeno",
        list: "list"
      })
    }
  
  },

  // 第一个时间
  firstdatetime: function(e) {
    this.setData({
      ll:1,
      datat: "datatime",
      list:"datatimeno",
    })
  
  },

  //第二个时间
  seconddatetime: function(e) {
    this.setData({
      ll: 2,
      datat: "datatime",
      list:'datatimeno'
    })

  },


  // 行李数
  bindPickerChange6(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },

  checkboxChange: function(e) {
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
  pfc: function() {
    wx.navigateTo({
      url: '../bz/bz',

    })
  },

  onLoad() {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    wx.setNavigationBarTitle({
      title: '人找车'
    })
    // var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // // 精确到分的处理，将数组的秒去掉
    // var lastArray = obj1.dateTimeArray.pop();
    // var lastTime = obj1.dateTime.pop();
    // this.setData({
    //   dateTime: obj.dateTime,
    //   dateTimeArray: obj.dateTimeArray,
    //   dateTimeArray1: obj.dateTimeArray,
    //   dateTime1: obj.dateTime
    // });
    var that = this
    wx.getStorage({ //获取用户信息，从本地
      key: 'mysec1',
      success: function(res) {
        that.setData({
          wxname: res.data.wx2,
          city: res.data.c2,
          phone: res.data.ph2,
          username: res.data.n2,
        })
      },
    })

  },
  changeDate(e) {
    this.setData({
      date: e.detail.value
    });
  },
  changeTime(e) {
    this.setData({
      time: e.detail.value
    });
  },
  changeDateTime(e) {
    console.log(e.detail.value)
    this.setData({
      dateTime: e.detail.value
    });
  },
  changeDateTime1(e) {
    console.log(e.detail.value)
    this.setData({
      dateTime1: e.detail.value
    });
  },
  changeDateTimeColumn(e) {
    var arr = this.data.dateTime,
      dateArr = this.data.dateTimeArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
    this.setData({
      dateTimeArray: dateArr,
      dateTime: arr
    });
  },
  changeDateTimeColumn1(e) {
    var arr = this.data.dateTime1,
      dateArr = this.data.dateTimeArray1;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      dateTimeArray1: dateArr,
      dateTime1: arr
    });
  },


  // bindPickerChange1(e) {
  //   console.log('picker发送选择改变，携带值为', e.detail.value)
  //   this.setData({
  //     index1: e.detail.value
  //   })
  // },






  city: function() {
    // this.setData({
    //   bs: 1

    // })
    //1:from
    //2:to
    wx.navigateTo({
      url: `../locationpicker/locationpicker?dataoption=1`
    })
  },

  city1: function() {
    // this.setData({
    //   bs: 2

    // })
    wx.navigateTo({
      url: '../locationpicker/locationpicker?dataoption=2'
    })
  },




  onShow: function(options) {
    //console.log(this.data)
    // var that = this
    // var chos = this.data.bs
    //console.log(chos)
    // if (chos == 1) {
    //   wx.getStorage({
    //     key: 'mydata2',
    //     success: function (res) {
    // //console.log(1),
    //       that.setData({
    //         city: res.data.name2,

    //       })
    //     },


    //   })
    // } if (chos == 2) {
    //   wx.getStorage({
    //     key: 'mydata3',

    //     success: function (res) {
    //      // console.log(2),
    //       that.setData({
    //         city1: res.data.name3,

    //       })
    //     },

    //   })
    // }

  },






  switchChange1: function(e) {
    if (e.detail.value) {
      this.setData({
        cartype: '拼车'
      });
    } else {
      this.setData({
        cartype: '不拼车'
      });
    }

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //绑定标签选择器
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  formSubmit: function(e) {
    console.log("修改")
    const db = wx.cloud.database()
    db.collection('user').add({
      data: {
        wxname: e.detail.value.wxname,
        out: e.detail.value.out, //出发地
        phone: e.detail.value.phone,
        incar: e.detail.value.incar, //目的地
        price: e.detail.value.price,
        username: e.detail.value.username,
        yd: "预定",
        site: e.detail.value.site,
        inname: e.detail.value.inname,
        outname: e.detail.value.outname,
        time: e.detail.value.time,
        time1: e.detail.value.time1,
        zt: "没完成",
        beizhu: e.detail.value.beizhu,
        xl: e.detail.value.xl,
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          wxname: e.detail.value.wxname,
          out: e.detail.value.out,
          incar: e.detail.value.incar,
          phone: e.detail.value.phone,
          username: e.detail.value.username,
          yd: "预定",
          site: e.detail.value.site,
          inname: e.detail.value.inname,
          outname: e.detail.value.outname,
          time: e.detail.value.time,
          time1: e.detail.value.time1,
          zt: "没完成",
          xl: e.detail.value.xl,
          beizhu: e.detail.value.beizhu,
          pc: {
            pcin: e.detail.value.out,
            pcout: e.detail.value.incar
          }

        })

        wx.showToast({
          title: '下单成功',
        })
        wx.navigateTo({
          url: '../userConsole/userConsole?pc=' + JSON.stringify(this.data.pc),
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '下单失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })

  },



  onQuery: function(e) {
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('user ').where({
      data: {
        wxname: e.detail.value.wxname,
        username: e.detail.value.username,
        phone: e.detail.value.phone,

        age: e.detail.value.age,
        cartype: e.detail.value.cartype,
        site: e.detail.value.site,
        inname: e.detail.value.inname,
        outname: e.detail.value.outname,
        time: e.detail.value.time,
      },
    }).get({
      success: res => {
        this.setData({
          wxname: e.detail.value.wxname,
          username: e.detail.value.username,
          phone: e.detail.value.phone,

          age: e.detail.value.age,
          cartype: e.detail.value.cartype,
          site: e.detail.value.site,
          inname: e.detail.value.inname,
          outname: e.detail.value.outname,
          time: e.detail.value.time,
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