//index.js
const grant_type = 'client_credentials'
const client_id = 'iq7HZA5ThTKnfYgpYv21u1s5'
const client_secret = 'r1koerwaCHSZlRQKmp7dhDqFCK1lgE3h'
var token = null
var base64 = null
var apiUrl = null
var baike_urls =null


Page({
  data: {
    imageUrl: "https://cocochimp-markdown-img.oss-cn-beijing.aliyuncs.com/index轮播图3-饮食.jpg",
    message: 'Welcome to ImageMaster !\n Author : ZhangH.J.',
    load_logo: 'waiting',
    load_title: "等待上传图片",
    load_message: " 请上传图片",
    btn_enable:true
  },

  gotobaike:function(res){
    if(baike_urls!=null)
    {
      wx.navigateTo({
    
        url: `/pages/shibie/baidu/baike?url=${baike_urls}`
      })
    }
  },
  
  onReady: function(res) {
    // get access_token from BaiDu API
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=' + grant_type + '&client_id=' + client_id + '&client_secret=' + client_secret,
      method: 'POST',
      success: function (res) {
        console.log('Request successful !')
        // console.log(res.data)
        token = res.data.access_token;
        console.log('My token is : ' + token);
        return token; 
      },
      fail: function (res) {
        console.log('Fail to request !')
        console.log(res)
      } 
    })
    return null
  },

  get_image: function (res) {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        var tempFilePaths = res.tempFilePaths
        apiUrl = 'https://aip.baidubce.com/rest/2.0/image-classify/v2/dish'
        that.setData({
          imageUrl: tempFilePaths,
          load_logo: "success",
          load_message: "请点击识别按钮",
          load_title: "上传图片成功",
          btn_enable: false
        })
        console.log('My API URL is : ' + apiUrl)
        console.log('Image Path is : ' + tempFilePaths)
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0],
          encoding: 'base64',
          success: res => {
            base64 = res.data
            // console.log('data:image/png;base64,' + base64)
          }
        })
      }
    })
  },

  recognition_image: function(res) {
    var that = this
    that.setData({
      load_title: "正在识别",
      load_message: "正在识别图片,请稍后"
    })
    wx.request({
      url: apiUrl + '?access_token=' + token,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        image: base64,
        baike_num:1,
        top_num:1
      },
      success: res => {
        var dishName = null
        var probability = 0

        var calorie=0
        console.log('recognition_image Success')
        if(res.data.result == null) {
          console.log(res.data.error_msg)
          console.log(base64)
          result = res.data.error_msg
        }else {
          console.log(res.data.result)
          dishName=res.data.result[0].name, //菜品名称 
          calorie=res.data.result[0].calorie,  //卡路里值
          probability= res.data.result[0].probability, //置信度
          baike_urls = res.data.result[0].baike_info.baike_url//百度百科链接
        }
        
        that.setData({
          load_title:dishName,
          load_message:calorie+'卡路里(每100g)\n'+"状态：较新鲜",
        })
      }
    })
  }
})
