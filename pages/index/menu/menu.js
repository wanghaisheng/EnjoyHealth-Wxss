// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView: true
  },
  switchTab(e) {
    this.setData({ currentTab: e.currentTarget.dataset.current });
},
  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
    // 生命周期函数--监听页面加载
    showView: (options.showView == "true" ? true : false)
  }
  , onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }

})