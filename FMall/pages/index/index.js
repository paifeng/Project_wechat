//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movies: [
      { url: 'http://img3.imgtn.bdimg.com/it/u=1021379568,1897520673&fm=200&gp=0.jpg' },
      { url: 'http://img4.imgtn.bdimg.com/it/u=2963399691,2477161139&fm=26&gp=0.jpg' },
      { url: 'http://img3.imgtn.bdimg.com/it/u=3944340496,3864633243&fm=200&gp=0.jpg' },
      { url: 'http://img2.imgtn.bdimg.com/it/u=3073478656,1928812130&fm=200&gp=0.jpg' }
    ],
    grids: [
      {
        name: '海鸭蛋',
        url: '/pages/Course/course',
        icon: 'http://img5.imgtn.bdimg.com/it/u=3980755989,828156708&fm=26&gp=0.jpg',
        code: '10'
      },
      {
        name: '柚子',
        url: '/pages/Course/course',
        icon: 'http://img5.imgtn.bdimg.com/it/u=3980755989,828156708&fm=26&gp=0.jpg',
        code: '11'
      },
      {
        name: '百香果',
        url: '/pages/Course/course',
        icon: 'http://img5.imgtn.bdimg.com/it/u=3980755989,828156708&fm=26&gp=0.jpg',
        code: '10'
      },
      {
        name: '蛋黄酥',
        icon: 'http://img5.imgtn.bdimg.com/it/u=3980755989,828156708&fm=26&gp=0.jpg',
        code: '11'
      },
      {
        name: '茶叶',
        url: '/pages/Course/course',
        icon: 'http://img5.imgtn.bdimg.com/it/u=3980755989,828156708&fm=26&gp=0.jpg',
        code: '10'
      }      
    ],
    swiperCurrent: 0,
    active: 0,
    tabsTitle: ["精选", "促销"],
  },
  onLoad: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  //轮播图的切换事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //轮播图片点击事件
  swiperclick: function (e) {
    var that = this
    wx.showToast({
      title: `点击位置: ${that.data.swiperCurrent + 1}`,
      icon: 'none'
    });
  },
  //Tab页面切换
  onTabChange(e) {
    console.log(JSON.stringify(e))
    wx.showToast({
      title: `切换到标签 ${e.detail.index + 1}`,
      icon: 'none'
    });
  }
})
