// pages/ku/detail/detail.js
const app = getApp()
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    material:{},
    color: ['#FFFFCC', '#CCFFFF', '#CCCC99', '#99CCCC', '#CC9966', '#99CC66', '#0066CC', '#CCCC99', '#FFCC99', '#99CCCC','#CCCCCC']
  },
  randmodArray: function(){
    var item = this.data.color[Math.floor(Math.random() * this.data.color.length)];
    return item;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id;
    this.getDetail(this.data.id);
  },
  getDetail: function (id) {
    var that = this;
    var url = app.globalData.baseUrl + '/material/'  + id;
    util.http(url, 'GET', null, null, this.successCallBack, this.failCallBack);
  },
  successCallBack: function (res) {
    if (res.status == 0) {
      this.setData({
        material: res.data
      })
      if(this.data.material.tags !=null){
        for (var i = 0; i < this.data.material.tags.length; i++) {
          this.data.material.tags[i]['color'] = this.randmodArray();
        }
      }

    } else {
      wx.lin.showMessage({
        type: 'warning',
        duration: 2000,
        content: res.msg
      })
    }
  },
  failCallBack: function (res) {
    wx.lin.showMessage({
      type: 'warning',
      duration: 1500,
      content: "系统异常请重试"
    })
  },
  copyLink: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.url,
      success: () => {
        wx.showToast({
          title: '已复制',
          duration: 1500,
        })
      }
    })
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

  }
})