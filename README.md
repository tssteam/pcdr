# 云开发 quickstart
#李福森#
#地图选择框的页面为demo1-5#
#myinfo1-2是对应乘客订单和司机订单#
#mypage-3是对应乘客订单和司机订单#
这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)



https://nervjs.github.io/taro/docs/taroize.html
微信原生小程序转 Taro 的操作非常简单，首先必须安装使用 npm i -g @tarojs/cli 安装 Taro 命令行工具，其次在命令行中定位到小程序项目的根目录，根目录中运行：
$ taro convert
即可完成转换。转换后的代码保存在根目录下的 taroConvert 文件夹下。你需要定位到 taroConvert 目录执行 npm install 命令之后就可以使用 taro build 命令编译到对应平台的代码。
