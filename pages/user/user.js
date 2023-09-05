// pages/user/user.js
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
    toContact: function (param) {
      wx.navigateTo({
        url: '/pages/user/contact/contact',
      })
    }
  }
})