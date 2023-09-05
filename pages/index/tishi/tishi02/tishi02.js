Page({
  data: {
      shows01: false, //控制下拉列表的显示隐藏，false隐藏、true显示
      shows02: false, //控制下拉列表的显示隐藏，false隐藏、true显示
      selectDatas01:['男', '女']
      , //下拉列表的数据
      selectDatas02:['轻体力劳动', '中体力劳动', '重体力劳动']
      , //下拉列表的数据
      indexs01: 0, //选择的下拉列 表下标,
      indexs02: 0, //选择的下拉列 表下标,
    },

    // 1、第一个组件
    // 点击下拉列表
    optionTaps01(e){
      let Indexs01 = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
      console.log(Indexs01)
      this.setData({
        indexs01: Indexs01,
        shows01: !this.data.shows01
      });
    },
    // 点击下拉显示框
    selectTaps01(){
      this.setData({
        shows01: !this.data.shows01,
      });
    },

     // 2、第二个组件
    // 点击下拉列表
    optionTaps02(e){
      let Indexs02 = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
      console.log(Indexs02)
      this.setData({
        indexs02: Indexs02,
        shows02: !this.data.shows02
      });
    },
    // 点击下拉显示框
    selectTaps02(){
      this.setData({
        shows02: !this.data.shows02,
      });
    },

    // 3、转发
    totishi03: function(param){
      wx.redirectTo({       
          url: '/pages/index/tishi/tishi03/tishi03',
          })
      }
})


