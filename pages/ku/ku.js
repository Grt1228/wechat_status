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
    imagesData: [],
    videoData: [],
    activeKey: '0',
    loading: false,
    picPageNum: 1,
    videoPageNum: 1,
    picHasNext: true,
    videoHasNext: true,
    videoLoadMoreType: 'loading',
    picLoadMoreType: 'loading'
  },
  getData: function(e) {
    var that = this;
    var activeKey = that.data.activeKey;
    var data = {
      "type": activeKey,
      "pageSize":6,
      "pageNum": that.data.activeKey === '0' ? that.data.picPageNum: that.data.videoPageNum
    }
    util.http(app.globalData.baseUrl + '/material/list', 'POST', data, null, this.successCallBack, this.failCallBack);
  },

  successCallBack: function (res) {
    if (res.status == 0) {
      this.setData({
        loading: false
      })
      if(this.data.activeKey === '0'){
        this.setData({
          imagesData: this.data.imagesData.concat(res.data),
          picHasNext: res.hasNext
        })
        wx.lin.renderWaterFlow(this.data.imagesData);
      }else{
        this.setData({
          videoData: this.data.videoData.concat(res.data),
          videoHasNext: res.hasNext
        })
        wx.lin.renderWaterFlow(this.data.videoData);
      }
    } else {
      wx.lin.showMessage({
        type: 'warning',
        duration: 2000,
        content: res.msg
      })
      this.data.loading = false
    }
  },
  failCallBack: function (res) {
    wx.lin.showMessage({
      type: 'warning',
      duration: 1500,
      content: "系统异常请重试"
    })
    this.setData({
      loading: false
    })
  },

  changeTabs: function(e) {
    this.setData({
      activeKey: e.detail.activeKey
    })
    if(this.data.imagesData.length == 0 || this.data.videoData.length == 0 ){
      this.setData({
        loading: true
      })
      this.getData();
    }else{
      if(this.data.activeKey === '0'){
        wx.lin.renderWaterFlow(this.data.imagesData);
      }else{
        wx.lin.renderWaterFlow(this.data.videoData);
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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

    var that = this;
    console.log("daodile")
    if(that.data.activeKey === '0' && that.data.picHasNext){
      that.data.picLoadMoreType = 'loading'
      that.data.picPageNum++
      that.getData();
    }else{
      that.data.picLoadMoreType = 'end'
    }
    if(that.data.activeKey === '1' && that.data.videoHasNext){
      that.data.videoLoadMoreType = 'loading'
      that.data.videoPageNum++
      that.getData();
    }else{
      that.data.picLoadMoreType = 'end'
    }
    
  },

  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})