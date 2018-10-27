//app.js
App({
  globalData: {
    carCount: "5",
    userInfo: null,
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow: function () {
    var that = this
    //在购物车上显示小红点
    wx.showTabBarRedDot({
      index: 2,
      success: function () {
        wx.setTabBarBadge({
          index: 2,
          text: that.globalData.carCount
        })
      }
    });
  },
  userInfoReadyCallback: function (res) {
    this.globalData.userInfo = res
    console.log("userInfoReadyCallback" + JSON.stringify(res))
  }
})