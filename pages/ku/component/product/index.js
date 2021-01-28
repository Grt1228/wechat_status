// pages/components/layout/pages/water-flow/component/product/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onProduct: function(e){
      console.log(e);

      wx.navigateTo({
        url: '../../../detail/detail?id=' + e.target.dataset.id //传递参数
      })
    }
  }
});