Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持  
    },
    /** 
     * 组件的属性列表 
     */
    properties: {
        dialogText: {            // 属性名  
            type: String,
            value: '内容'
        }
    },
    /** 
     * 组件的初始数据 
     */
    data: {
        dialogShow: false,
    },
    /** 
     * 组件的方法列表 
     */
    methods: {
        showDialog(text, time) {
            this.setData({
                dialogShow: !this.data.dialogShow,
                dialogText: text
            })

            var that = this

            if (!time) {
                time = 8000
            }

            setTimeout(function () {
                that.setData({
                    dialogShow: !that.data.dialogShow
                })
            }, time)
        }
    }
})