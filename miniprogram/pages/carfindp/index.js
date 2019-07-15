// pages/myinfo/myinfo.js
var dateTimePicker = require('../../utils/dateTimePicker.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pcar:"是",
    cartype:'拼车',
    city: '',
    sex:"男",
    city1: '',
    bs: 1,
    index:1,
    date: '2018-10-01',
    time: '12:00',
    dateTimeArray: null,
    dateTime: null,
    dateTimeArray1: null,
    dateTime1: null,
    startYear: 2000,
    endYear: 2050,
    array: ['', '1', '2', '3', '4', '5'],
    index3:1,
    array1: ['0-50$', '50-100$', '100-150$', '150-300$', '300$++'],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    zt: "没完成",
    pc: { pcin: '起点', pcout: '终点' }
  },
  // 区块
  onChangeShowState: function () {
    this.setData({
      showView: (!this.data.showView)
    })
  },

  // 之前男女性别转换按钮函数
  switchChange: function (e) {
    if (e.detail.value) {
      this.setData({ sex: '男' });
    } else {
      this.setData({ sex: '女' });
    }
  },
// 沿途拼车按钮
  switchChange2: function (e) {
    if (e.detail.value) {
      this.setData({ pcar: '是' });
    } else {
      this.setData({ pcar: '否' });
    }
  },
  // 行李数
  bindPickerChange6(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },

  // 日期选择
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  cfp: function () {
    wx.navigateTo({
      url: '../bz1/bz1',

    })
  },
// 之前说要做选择框的男女选择函数
  checkboxChange: function (e) {
    if (e.detail.value) {
      this.setData({ sex: '男' });
    } else {
      this.setData({ sex: '女' });
    }
  },





// 小程序页面加载读取
  onLoad() {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    wx.setNavigationBarTitle({ title: '车找人' })
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // 精确到分的处理，将数组的秒去掉
    this.setData({
      dateTime: obj.dateTime,
	  dateTimeArray: obj.dateTimeArray,
      dateTimeArray1: obj.dateTimeArray,
      dateTime1: obj.dateTime
	});

  // 本地内存拿出来，之前addfunction的储存对象，包括微信的名字，城市，电话，用户名
	var that = this 
    wx.getStorage({
      key: 'mysec1',
      success: function (res) {
        console.log(res)
        that.setData({
          wxname: res.data.wx2,
          city: res.data.c2,
          phone: res.data.ph2,
          username: res.data.n2,
        })
      },


    })
  },

  // 都是日期的函数
  changeDate(e) {
    this.setData({ date: e.detail.value });
  },
  changeTime(e) {
    this.setData({ time: e.detail.value });
  },
  changeDateTime(e) {
    console.log(e.detail.value)

    this.setData({ dateTime: e.detail.value });
  },
  changeDateTime1(e) {
    console.log(e.detail.value)
    this.setData({ dateTime1: e.detail.value });
  },
  changeDateTimeColumn(e) {
    var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
    this.setData({
      dateTimeArray: dateArr,
      dateTime: arr
    });
  },
  changeDateTimeColumn1(e) {
    var arr = this.data.dateTime1, dateArr = this.data.dateTimeArray1;
    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      dateTimeArray1: dateArr,
      dateTime1: arr
    });
  },




// 
  bindPickerChange1(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },

// 出发城市选择函数
  city: function () {
    // this.setData({
    //   bs: 1

    // })
    wx.navigateTo({
      url: `../locationpicker/locationpicker?dataoption=1`
    })
  },


// 到达城市选择函数
  city1: function () {
    // this.setData({
    //   bs: 2

    // })
    wx.navigateTo({
      url: `../locationpicker/locationpicker?dataoption=2`
    })
  },



// 页面不断加载，为了不断刷新城市多次选择，所以不用onload
  onShow: function (options) {
    // var that = this
    // var chos = this.data.bs
    // console.log(chos)
    // // 利用定义的变量chos作为选择状态，如果为1就是选择出发城市，然后读取准确加载到前端页面上
    // if (chos == 1) {

    //   // 出发城市读取上一个界面传回来的城市数据
    //   wx.getStorage({
    //     key: 'mydata4',
    //     success: function (res) {
    //       console.log(1),
    //         that.setData({
    //           city: res.data.name4,

    //         })
    //     },


    //   })
    // } if (chos == 2) {
    //   // 同上
    //   wx.getStorage({
    //     key: 'mydata5',

    //     success: function (res) {
    //       console.log(2),
    //         that.setData({
    //           city1: res.data.name5,

    //         })
    //     },

    //   })
    // }

  },









// 拼车选择按钮函数
  switchChange1: function (e) {
    if (e.detail.value) {
      this.setData({ cartype: '拼车' });
    } else {
      this.setData({ cartype: '不拼车' });
    }
    
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

// 提交函数，将数据储存到云端，两个隐含的属性，一个是状态，一个是完成度
  formSubmit: function (e) {
    console.log("修改")
    const db = wx.cloud.database()
    db.collection('carfindp').add({
      data: {
        wxname: e.detail.value.wxname,
        out: e.detail.value.out,
        incar: e.detail.value.incar,
        username: e.detail.value.username,
        phone: e.detail.value.phone,
      
        cartype: e.detail.value.cartype,
        site: e.detail.value.site,
        price: e.detail.value.price,
        inname: e.detail.value.inname,
        outname: e.detail.value.outname,
        time: e.detail.value.time,
        time1: e.detail.value.time1,
        zt: "没完成",
        beizhu: e.detail.value.beizhu,
        pcar: e.detail.value.pcar
      },
      success: res => {
        this.setData({
          out: e.detail.value.out,
          incar: e.detail.value.incar,
          username: e.detail.value.username,
          phone:e.detail.value.phone,

          site: e.detail.value.site,
          cartype: e.detail.value.cartype,
          price: e.detail.value.price,
          inname: e.detail.value.inname,
          outname: e.detail.value.outname,
          time: e.detail.value.time,
          time1: e.detail.value.time1,
          zt: "没完成",
          yd: "预定",
          beizhu: e.detail.value.beizhu,
          pc: { pcin: e.detail.value.out, pcout: e.detail.value.incar },
          pcar: e.detail.value.pcar
        })

        wx.showToast({
          title: '新增记录成功',
          
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
        wx.navigateTo({
          url: '../userConsole1/userConsole?pc=' + JSON.stringify(this.data.pc),
        })
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


 // 查询函数，没有用到，可能以后会用到。
  onQuery: function (e) {
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('carfindp ').where({
      data: {
        wxname: e.detail.value.wxname,
        username: e.detail.value.username,
        phone: e.detail.value.phone,
        yd:"预定",
      
        cartype:e.detail.value,
        site: e.detail.value.site,
        out: e.detail.value.out,
        incar: e.detail.value.incar,
        price: e.detail.value.price,
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
          yd: "预定",
          age: e.detail.value.age,
          cartype: e.detail.value,
          site: e.detail.value.site,
          out: e.detail.value.out,
          incar: e.detail.value.incar,
          price: e.detail.value.price,
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
