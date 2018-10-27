Page({
  data: {
    keyWord: "",
    currentCategoryId: 0,
    navList: [
      { id: 0, name: "水果" },
      { id: 1, name: "坚果" },
      { id: 2, name: "奶茶" },
      { id: 3, name: "啤酒" },
    ],
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
  //触发搜索
  onSearch: function (e) {
    console.log(JSON.stringify(e))
  },
  //搜索获取焦点
  onSearchFocus: function (e) {
    console.log(JSON.stringify(e))
  },
  //更换分类
  switchCate: function (event) {

    console.log("this.data.currentCategoryId: " + this.data.currentCategoryId)
    console.log("event.currentTarget.dataset.id: " + event.currentTarget.dataset.id)

    if (this.data.currentCategoryId == event.currentTarget.dataset.id) {
      return false;
    }
    this.setData({
      currentCategoryId: event.currentTarget.dataset.id
    });
  }
})