//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    url: "",
    realUrl: "",
    realThumUrl: "",
    loading : false,
    showRealUrl: false
  },
  changeUrl: function(e) {
    var val = e.detail.value;
    this.setData({
      url: val
    });
  },
  clearUrl: function() {
    this.setData({
      url: ""
    })
  },
  getRealUrl: function(e) {
    var that = this;
    var url = that.data.url;
    if (!url) {
      wx.lin.showMessage({
        type: 'error',
        duration: 1500,
        content: '不输入地址查个锤子'
      })
      return false;
    }
    this.setData({
      loading: true
    })
    var data = {
      "url": url
    }
    util.http(app.globalData.baseUrl + '/spider/hp', 'POST', data, null, this.successCallBack, this.failCallBack);
  },
  onLoad: function() {
    this.setData({
      url: ""
    })
  },
  successCallBack: function (res) {
    if (res.status == 0) {
      //wx.lin.hideLoading()
      this.setData({
        loading: false,
        showRealUrl: true,
        realUrl: res.data.url,
        realThumUrl: res.data.thumUrl

      })
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
  copyLink: function(e){
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: () => {
        wx.showToast({
          title: '已复制',
          duration: 1500,
        })
      }
    })
  },
  clearPop : function(){
    console.log("1111111111")
    this.setData({
      realUrl: "",
      realThumUrl: ""
    })
  },
  onShow: function() {
  },
  onShareAppMessage: function () {
    return {
      title: '欢迎【状态宝】微信小程序，微信状态设置必备~~~'
    }
  }
})