// search.js
var Data = require('../../data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  search:function (){
    var res = [];
    for(var item in Data){
      var re = Data[item]['课程'].indexOf(this.data.keyword);
      if(re != -1){
        res.push(Data[item])
      }
    }
    wx.setStorage({
      key: 'keyinfo',
      data: res,
    })
    if(res.length){
      wx.navigateTo({
        url: '../seares/seares'
      })
    }else{
      wx.showToast({
        title: '未查到相关信息',
        icon: 'loading',
        duration: 1500
      })
    }
    
    this.setData({
      keyword: ''
    })
  },
  Change:function (e){
    this.setData({
      keyword: e.detail.value
    })
  }
})