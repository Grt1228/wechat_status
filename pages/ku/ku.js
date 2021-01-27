// pages/ku/ku.js
import { product } from './data.js';
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imagesData: [],
    // videoData: [],
    // activeKey: '0',
    // loading: false
  },
  // getData: function(e) {
  //   var that = this;
  //   var activeKey = that.data.activeKey;
  //   var data = {
  //     "type": activeKey,
  //     "pageSize":6,
  //     "pageNum":1
  //   }
  //   util.http(app.globalData.baseUrl + '/material/list', 'POST', data, null, this.successCallBack, this.failCallBack);
  // },

  // successCallBack: function (res) {
  //   if (res.status == 0) {
  //     this.setData({
  //       loading: false,
  //       imagesData: res.data
  //     })
  //   } else {
  //     wx.lin.showMessage({
  //       type: 'warning',
  //       duration: 2000,
  //       content: res.msg
  //     })
  //     this.data.loading = false
  //   }
  // },
  // failCallBack: function (res) {
  //   wx.lin.showMessage({
  //     type: 'warning',
  //     duration: 1500,
  //     content: "系统异常请重试"
  //   })
  //   this.setData({
  //     loading: false
  //   })
  // },

  changeTabs: function(e) {
    console.log(e.detail.activeKey)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.lin.renderWaterFlow(product);
        // this.getData()
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
    console.log("daodile")
  },

  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})