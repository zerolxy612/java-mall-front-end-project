// 导入request请求工具类
import {
  getBaseUrl,
  requestUtil
} from '../../utils/requestUtil.js';
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl:'',
    productObj:{},
    activeIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options.id);
    const baseUrl=getBaseUrl();
    this.setData({
       baseUrl
    })
    this.getProductDetail(options.id)
  },

  // tab点击事件
  handleItemTap(e){
    const {index} = e.currentTarget.dataset;
    console.log(index);
    this.setData({
      activeIndex:index
    })
  },

 // 获取商品详情
 async getProductDetail(id) {
  const result = await requestUtil({
    url: '/product/detail',
    data:{id},
    method: "GET"
  });
  this.setData({
    productObj: result.message,
  })

},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})