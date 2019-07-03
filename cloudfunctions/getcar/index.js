// 云函数入口文件
const cloud = require('wx-server-sdk')
// 对应的car所有信息页面函数入口
cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('carfindp')


      .get({
        success: function (res) {
          return res;

        }
      });

  } catch (e) {
    console.erro;
  }

}