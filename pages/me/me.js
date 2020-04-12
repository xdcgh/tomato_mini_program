// pages/me/me.js
const {http} = require('../../lib/http')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: "tomato",
    tomatoes: {},
    todos: {}
  },
  changeTab(event) {
    let name = event.currentTarget.dataset.name
    this.setData({tab: name})
  },
  fetchTomatoes() {
    http.get('/tomatoes', {
      is_group: "yes"
    }).then(response => {
      this.setData({tomatoes: JSON.parse(response.data)["resources"]})
    })
  },
  fetchTodos() {
    http.get('/todos', {
      is_group: "yes"
    }).then(response => {
      this.setData({todos: JSON.parse(response.data)["resources"]})
    })
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
    this.fetchTomatoes()
    this.fetchTodos()
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