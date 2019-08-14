// pages/myinfo/myinfo.js
var dateTimePicker = require('../../utils/dateTimePicker.js');
var getxdj = require('../../static/request.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: '男',
    city: '',
    ll: 1,
    city1: '',
    list: "list",
    pickdate: null,
    bs: 1,
    date: '2018-10-01',
    time: '12:00',
    dateTimeArray: null,
    dateTime: null,
    datat: "datatimeno",
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
  switchChange: function (e) {
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

 onLoad:function(){

        
 
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
        list: "list"
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
  firstdatetime: function (e) {
    this.setData({
      ll: 1,
      datat: "datatime",
      list: "datatimeno",
    })

  },

  //第二个时间
  seconddatetime: function (e) {
    this.setData({
      ll: 2,
      datat: "datatime",
      list: 'datatimeno'
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

location:function(){
 wx.navigateTo({
   url: '../shopMap/shopMap',
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
    getxdj.getxdj(
    "post",
    "https://pcdrapi.ywandy.top/api/driverorder",
      {
        wxname: e.detail.value.wxname,
        out: e.detail.value.out,
        phone: e.detail.value.phone,
        incar: e.detail.value.incar,
        username: e.detail.value.username,
        site: e.detail.value.site,
        price: e.detail.value.price,
        inname: e.detail.value.inname,
        outname: e.detail.value.outname,
        time: e.detail.value.time,
        time1: e.detail.value.time1,
        zt: "没完成",
        beizhu: e.detail.value.beizhu,
        pcar: e.detail.value.pcar
      }
    )
     wx.showModal({
       title: '确定下单',
       content: '',
       showCancel: true,
       cancelText: '取消',
       cancelColor: '',
       confirmText: '确定',
       confirmColor: '',
       success: function(res) {
          if(res.confirm){
            wx.showToast({
              title: '下单成功',
            })
            wx.navigateTo({
              url: '../userConsole1/userConsole?pc=' + JSON.stringify(this.data.pc),
            })
          }if(res.cancel){
         
          }
       },

     })
  
  },


 
  
})
