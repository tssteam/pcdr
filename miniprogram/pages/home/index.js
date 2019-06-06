//index.js
//获取应用实例
var dateTimePicker = require('../../utils/dateTimePicker.js');
Page({
  
  data: {
    array: ['','1', '2', '3', '4','5'],
    array1: ['0-50$', '50-100$', '100-150$', '150-300$', '300$++'],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    start:'美国',
    over:'',
    yes:1,
    bs:1,
    bcolor:'',
    bcolor1: '',
    date: '2018-10-01',
    time: '12:00',
    dateTimeArray: null,
    dateTime: null,
    dateTimeArray1: null,
    dateTime1: null,
    startYear: 2000,
    endYear: 2050,
    city1:'出发地',
    city:'目的地',
    startDate:'today',
    multiArray: [['今天', '明天', '后天', ], [0, 1, 2, 3, 4, 5, 6], [0, 10, 20]],
    cartype: ['车找人'],
    bbcc: {outcat: '起点', incar: '终点',beizhu:'' },
    bbcc1: {outcat: '起点', incar: '终点', beizhu: '' },
    start_time: null,
    items: [
      { name: 'p2c', value: '人找车', checked: 'true' },
      { name: 'c2p', value: '车找人' },
    ]
  }, 

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  



  

  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  onLoad() {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // 精确到分的处理，将数组的秒去掉
    // obj1.dateTimeArray.pop();
    obj1.dateTime.pop();
    obj.time = new Date(Date.now())
    obj.hour = obj.time.getHours()
    obj.minute = obj.time.getMinutes()
    console.log(obj)

    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray,
      dateTimeArray1: obj1.dateTimeArray,
      dateTime1: obj.dateTime,

      start_time: {
        hour: obj.hour,
        minute: obj.minute
      } 
    }); 
    console.log(obj)
  },
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


  
 
  onShow: function (options) {
    var that =this
     var chos=this.data.bs
    if (chos == 1) {
      wx.getStorage({
        key: 'mydata',
        success: function (res) {
          that.setData({
            city1: res.data.name,
            

          })
        },

      
      })
    } if (chos == 2) {
      wx.getStorage({
        key: 'mydata1',
        success: function (res) {
          that.setData({
            city: res.data.name1,

          })
        },

      })
    }

  },

// 

  ppl:function(e){
     this.setData({
       yes:2
     })
  },
  ppl1: function (e) {
    this.setData({
      yes: 1
    })
  },
getmap:function(e){
  var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js')
  var qqmapsdk
  
  var that = this 
    // 实例化腾讯地图API核心类
    qqmapsdk = new QQMapWX({
      key: 'VL6BZ-EJNKQ-FDL5T-GXDX7-VS7GJ-L5BG4' // 必填
    });
    //1、获取当前位置坐标
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //2、根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (res) {
            var address = res.result.address;
            console.log(address)
            that.setData({
              start:address
            })
          },
          fail: function (error) {
            console.error(error);
          }
        })
      }
    })
  
},

  switchChange: function (e) {
    if (e.detail.value) {
      this.setData({ cartype: '车找人' });
    
    } else {
      this.setData({ cartype: '人找车' });
    
    }
  },


  button:function(e){
    this.setData({ yes: 2,
      bcolor:"warn",
      bcolor1:"",
     })

  },

  button1: function (e) {
    this.setData({ yes: 1,
      bcolor: "",
      bcolor1: "warn",
     })
  },









  formSubmit: function (e) {
    var s1 = e.detail.value.start
    var e1 = e.detail.value.end
    var st1 = e.detail.value.starttime
    var ed1 = e.detail.value.endtime
    var pep1 = e.detail.value.people
    var bz = e.detail.value.beizhu
    console.log(s1,e1,st1,ed1,pep1,bz)
    wx.setStorage({
      key: "mysec",
      data: { s1,e1,st1,ed1,pep1,bz },
      success:console.log("ok")
      
      })

    var text = this.data.yes;
    if (text == 1) {

          wx.navigateTo({
            url: '../mypage3/mypage',
          })
    
    

     
    } if (text == 2) {
          wx.navigateTo({
            url: '../mypage2/mypage',
          })


    }
  


  },

















  bindTimeChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },


  pickerTap: function () {
    var date = new Date();

    var monthDay = ['今天', '明天'];
    var hours = [];
    var minute = [];

    // 月-日
    for (var i = 2; i <= 28; i++) {
      var date1 = new Date(date);
      date1.setDate(date.getDate() + i);
      var md = (date1.getMonth() + 1) + "-" + date1.getDate();
      monthDay.push(md);
    }

    // 时
    for (var i = 0; i < 24; i++) {
      hours.push(i);
    }

    // 分
    for (var i = 0; i < 60; i += 10) {
      minute.push(i);
    }

    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiArray[0] = monthDay;
    data.multiArray[1] = hours;
    data.multiArray[2] = minute;
    this.setData(data);
  },


  bindMultiPickerColumnChange: function (e) {

    date = new Date();

    var that = this;

    var monthDay = ['今天', '明天'];
    var hours = [];
    var minute = [];

    currentHours = date.getHours();
    currentMinute = date.getMinutes();

    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    // 把选择的对应值赋值给 multiIndex
    data.multiIndex[e.detail.column] = e.detail.value;

    // 然后再判断当前改变的是哪一列,如果是第1列改变
    if (e.detail.column === 0) {
      // 如果第一列滚动到第一行
      if (e.detail.value === 0) {

        that.loadData(hours, minute);

      } else {
        that.loadHoursMinute(hours, minute);
      }

      data.multiIndex[1] = 0;
      data.multiIndex[2] = 0;

      // 如果是第2列改变
    } else if (e.detail.column === 1) {

      // 如果第一列为今天
      if (data.multiIndex[0] === 0) {
        if (e.detail.value === 0) {
          that.loadData(hours, minute);
        } else {
          that.loadMinute(hours, minute);
        }
        // 第一列不为今天
      } else {
        that.loadHoursMinute(hours, minute);
      }
      data.multiIndex[2] = 0;

      // 如果是第3列改变
    } else {
      // 如果第一列为'今天'
      if (data.multiIndex[0] === 0) {

        // 如果第一列为 '今天'并且第二列为当前时间
        if (data.multiIndex[1] === 0) {
          that.loadData(hours, minute);
        } else {
          that.loadMinute(hours, minute);
        }
      } else {
        that.loadHoursMinute(hours, minute);
      }
    }
    data.multiArray[1] = hours;
    data.multiArray[2] = minute;
    this.setData(data);
  },

  loadData: function (hours, minute) {
    var minuteIndex;
    if (currentMinute > 0 && currentMinute <= 10) {
      minuteIndex = 10;
    } else if (currentMinute > 10 && currentMinute <= 20) {
      minuteIndex = 20;
    } else if (currentMinute > 20 && currentMinute <= 30) {
      minuteIndex = 30;
    } else if (currentMinute > 30 && currentMinute <= 40) {
      minuteIndex = 40;
    } else if (currentMinute > 40 && currentMinute <= 50) {
      minuteIndex = 50;
    } else {
      minuteIndex = 60;
    }

    if (minuteIndex == 60) {
      // 时
      for (var i = currentHours + 1; i < 24; i++) {
        hours.push(i);
      }
      // 分
      for (var i = 0; i < 60; i += 10) {
        minute.push(i);
      }
    } else {
      // 时
      for (var i = currentHours; i < 24; i++) {
        hours.push(i);
      }
      // 分
      for (var i = minuteIndex; i < 60; i += 10) {
        minute.push(i);
      }
    }
  },

  loadHoursMinute: function (hours, minute) {
    // 时
    for (var i = 0; i < 24; i++) {
      hours.push(i);
    }
    // 分
    for (var i = 0; i < 60; i += 10) {
      minute.push(i);
    }
  },

  loadMinute: function (hours, minute) {
    var minuteIndex;
    if (currentMinute > 0 && currentMinute <= 10) {
      minuteIndex = 10;
    } else if (currentMinute > 10 && currentMinute <= 20) {
      minuteIndex = 20;
    } else if (currentMinute > 20 && currentMinute <= 30) {
      minuteIndex = 30;
    } else if (currentMinute > 30 && currentMinute <= 40) {
      minuteIndex = 40;
    } else if (currentMinute > 40 && currentMinute <= 50) {
      minuteIndex = 50;
    } else {
      minuteIndex = 60;
    }

    if (minuteIndex == 60) {
      // 时
      for (var i = currentHours + 1; i < 24; i++) {
        hours.push(i);
      }
    } else {
      // 时
      for (var i = currentHours; i < 24; i++) {
        hours.push(i);
      }
    }
    // 分
    for (var i = 0; i < 60; i += 10) {
      minute.push(i);
    }
  },





  onShareAppMessage: function () {
    return {
      title: '拼车达人(美国版)',
      path: 'pages/index/index'
    }
  },
  city:function(){
     this.setData({
      bs:1

     })
    wx.navigateTo({
      url: '../demo/demo'
    })
  },

  city1: function () {
    this.setData({
      bs: 2

    })
    wx.navigateTo({
      url: '../demo1/demo1'
    })
  },

})
