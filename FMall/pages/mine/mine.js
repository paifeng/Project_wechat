//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindLogin: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    // 查看是否授权登录
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              app.userInfoReadyCallback(res.userInfo)
              that.setData({
                userInfo: res.userInfo,
                hasUserInfo: true
              })
            }
          })
        }
      }
    })
  },
  getUserInfo: function (res) {
    if (res.detail.userInfo) {
      console.log(res)
      app.userInfoReadyCallback(res.detail.userInfo)
      this.setData({
        userInfo: res.detail.userInfo,
        hasUserInfo: true
      })
    }
  }
})
