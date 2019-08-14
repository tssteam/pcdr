// 针对单一性内容全局性变量请求储存。李福森.
var app = getApp();
function getret(method, url, data) {
  wx.request({
    method: method,
    url: url,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    success(res) {
      list: res.data
      wx.setStorageSync("list", res.data)
    }
  })
}

// 针对单一下单变量封装函数XML，李福森
function getxdx(method, url, data) {
   wx.request({
     method: method,
     url: url,
     data: data,
     header: {
       'content-type': 'application/x-www-form-urlencoded', // 默认值
     },
     success(res) {
       console.log(res.data)
       wx.showToast({
         title: '下单成功',
       })
     },

   })

 } 


// 针对单一下单变量封装函数json，李福森
function getxdj(method, url, data){
  wx.request({
    method: method,
    url: url,
    data: data,
    header: {
      'content-type': 'application/json', // 默认值
    },
    success(res) {
      console.log(res.data)
      wx.showToast({
        title: '下单成功',
      })
    },
  })
} 

// 针对单一变量取消，确定，确定取消，拒绝 ,标记订单封装函数json，李福森
function getddall(method, url, data) {
  wx.request({
    method: method,
    url: url,
    data: data,
    header: {
      'content-type': 'application/json', // 默认值
    },
    success(res) {
      console.log(res.data)
      wx.showToast({
        title: '成功',
      })
    },

  })

} 


// 针对单一变量我的状态订单封装函数json，李福森
function getmy(method, url, data) {
  wx.request({
    method: method,
    url: url,
    data: data,
    header: {
      'content-type': 'application/json', // 默认值
    },
    success(res) {
      console.log(res.data)
      wx.setStorageSync("mydd", res.data)
    },

  })

}

// 针对多变量所有订单封装函数json，李福森
function getallorder(method, url, data) {
  wx.request({
    method: method,
    url: url,
    data: data,
    header: {
      'content-type': 'application/json', // 默认值
    },
    success(res) {
      console.log(res.data)
      wx.setStorageSync("alldd", res.data.data)
    },

  })

}
  
module.exports.getret = getret;
module.exports.getxdj = getxdj;
module.exports.getxdx = getxdx;
module.exports.getddall = getddall; 
module.exports.getallorder = getallorder; 
module.exports.getmy = getmy; 