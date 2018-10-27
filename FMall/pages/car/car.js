import Toast from '../../dist/toast/toast';

Page({
  data: {
    imageURL: "http://img0.imgtn.bdimg.com/it/u=3925865195,2302288667&fm=11&gp=0.jpg",
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  //提交订单Submit
  onSubmit: function () {
    Toast("提交订单");
  },
  //修改地址点击
  onClickLink: function () {
    Toast("修改地址");
  }
})