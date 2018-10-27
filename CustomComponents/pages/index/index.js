//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    dialogText:"dialogText"
  },
  onLoad: function () {
    console.log('onLoad')
  },
  onReady: function () {
    //获得toastedit组件
    this.dialogedit = this.selectComponent("#dialogedit")
  },
  showDialog: function () {
    this.dialogedit.showDialog('我是传过来的toast内容',2000)
  }
})
