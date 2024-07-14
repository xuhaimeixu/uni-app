// pages/test/test.js
// Page 是小程序页面加载时候执行的一个函数，由小程序内部提供
// 可以接受一个对象作为参数，对象里面可以定义页面的数据，页面的事件回调函数，还可以定义生命周期函数等
const moment = require('moment');
console.log(moment(new Date()).format('YYYY-MM-DD HH:mm::ss'), '111');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '我是 test 里面的标题',
    n: 12,
    m: 23,
    age: 25,
    arr: [12, 2, 3],
    userInfo: {
      id: 12,
      age: 25,
      username: 'andy'
    },
    list: [{
      id: 1,
      age: 23,
      username: 'mark'
    },{
      id: 2,
      age: 24,
      username: 'lilei'
    }]
  },

  toParseInt(val) {
    console.log(val, 'val');
    return parseInt(val);
  },

  tapHandler() {
    // 需求是弹一个提示信息
    console.log('tapHandler');
    // alert('提示信息');
    // 小程序官方提供了一个弹窗的 api
    // https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html
    // wx.showToast({
    //   title: '提示信息',
    //   icon: 'loading',
    //   duration: 10000
    // });

    // 1. 拿到数据
    console.log('this.data.age 修改前', this.data.age);
    // 2. 修改数据 注意：在小程序里面，数据不建议直接修改，因为直接修改不会实现数据的响应式变化，页面不会随着 data 变化而变化，必须使用小程序里面的 api
    // this.data.age += 1;
    this.setData({
      age: this.data.age + 1,
    });
    console.log('this.data.age 修改后', this.data.age);
  },

  /**
   * 生命周期函数--监听页面加载
   * on 其中那会的方法 都是内置的生命周期函数
   */
  onLoad(options) {
    // options 用于保存页面参数信息
    // 页面跳转 list?id=1 ----> detail
    console.log('onLoad', options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('onHide');
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