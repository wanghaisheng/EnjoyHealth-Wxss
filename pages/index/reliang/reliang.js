// pages/shuju/shuju.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    reliang:"",
    name: ""
  },
  //单选框的数据设置
  handleChange:function(e){
    // 1 获取单选框中的值
    let name=e.detail.value;
    // 2 把值 赋值给 data中的数据
    this.setData({
      name
    })
  },
  //构造函数
  man:function(id,name,shengao,tizhong,year,reliang){
    this.id = id;
    this.name = name;
    this.shengao = shengao;
    this.tizhong = tizhong;
    this.year = year;
    this.reliang = reliang;
  },
  //提交“按钮”事务后的方法
  csc:function(e){
    var name = this.data.name;
    var shengao = parseFloat(e.detail.value.shengao) ;
    var tizhong = parseFloat(e.detail.value.tizhong) ;
    var year = parseFloat(e.detail.value.year);
    var reliang = 0;

    if(name == "男"||name == "nan"||name == "man"){
      reliang = parseInt(66+(13.7*tizhong)+(5*shengao)-(6.8*year));
    }else if(name == "女"||name == "nv"||name == "woman"){
      reliang = parseInt(655+(9.6*tizhong)+(1.7*shengao)-(4.7*year));
    }else{
      wx.showToast({
        title: '请输入正常的性别',
        icon:'none',
        duration:2000
      })
    }

    var man = new Array();
    var man1 = new this.man('1',name,shengao,tizhong,year,reliang);
    man.push(man1);
    wx.setStorageSync('热量',man);
    try{
      var value = wx.getStorageSync('热量');
      console.log(value);
    }catch(e){
      console.log(e);
    }
    this.setData({
      reliang:reliang+"卡路里",
    })
  }
  
})