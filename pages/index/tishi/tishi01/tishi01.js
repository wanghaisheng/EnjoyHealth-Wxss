Page({
  data:{
      // 喜欢的菜品
      applyList01:[
        {Item_id: "0", Item_Name: "鲁菜", isSelect: false},
        {Item_id: "1", Item_Name: "川菜", isSelect: false},
        {Item_id: "2", Item_Name: "粤菜", isSelect: false},
        {Item_id: "3", Item_Name: "苏菜", isSelect: false},
        {Item_id: "4", Item_Name: "闽菜", isSelect: false},
        {Item_id: "5", Item_Name: "浙菜", isSelect: false},
        {Item_id: "6", Item_Name: "湘菜", isSelect: false},
        {Item_id: "7", Item_Name: "徽菜", isSelect: false}],
        //不喜欢的菜品
        applyList02:[
        {Item_id: "0", Item_Name: "鲁菜", isSelect: false},
        {Item_id: "1", Item_Name: "川菜", isSelect: false},
        {Item_id: "2", Item_Name: "粤菜", isSelect: false},
        {Item_id: "3", Item_Name: "苏菜", isSelect: false},
        {Item_id: "4", Item_Name: "闽菜", isSelect: false},
        {Item_id: "5", Item_Name: "浙菜", isSelect: false},
        {Item_id: "6", Item_Name: "湘菜", isSelect: false},
        {Item_id: "7", Item_Name: "徽菜", isSelect: false}],              
      },
      //喜欢的选择
    selectApply01(e){
      // 1 获取被选中的复选框的值        
      var index = e.currentTarget.dataset.index;
      var item = this.data.applyList01[index];
      item.isSelect = !item.isSelect;
      // 2 进行赋值
      this.setData({
          applyList01: this.data.applyList01
      })
    },
    //不喜欢的选择
    selectApply02:function(e){
      var index = e.currentTarget.dataset.index;
      var item = this.data.applyList02[index];
      item.isSelect = !item.isSelect;
      this.setData({
        applyList02: this.data.applyList02,
      });
    },
  //转发
  totishi02: function(param){
      wx.redirectTo({       
          url: '/pages/index/tishi/tishi02/tishi02',
          })
  }
})