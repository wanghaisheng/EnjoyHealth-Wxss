// pages/tishi/tishi.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        //第一个组件
        toshouquan: function(param){
            wx.redirectTo({       
              url: '/pages/index/tishi/tishi01/tishi01',
              })
          }
    }
})
