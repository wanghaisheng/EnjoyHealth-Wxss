// pages/index/index.js
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
        tozhuanpan: function(param){
            wx.navigateTo({       
              url: '/pages/index/zhuanpan/zhuanpan',
              })
          },
          //第二个组件
          toreliang: function(param){
            wx.navigateTo({       
              url: '/pages/index/reliang/reliang',
              })
          },
          //第三个组件
          toshibie: function(param){
            wx.navigateTo({       
              url: '/pages/index/menu/menu',
              })
          },
          //第四个组件
          totishi: function(param){
            wx.navigateTo({       
              url: '/pages/index/tishi/tishi',
              })
          },
    }
})
