// pages/me/me.js
const {http} = require('../../lib/http')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: "tomato",
    tomatoes: {},
    todos: {},
    me: {}
  },
  changeTab(event) {
    let name = event.currentTarget.dataset.name
    this.setData({tab: name})
  },
  fetchTomatoes() {
    http.get('/tomatoes').then(response => {
      let list = JSON.parse(response.data)["resources"]

      // 实现数据按天分组
      list.map(item => {
        const date = new Date(item["created_at"])
        let month = date.getMonth() + 1
        if ([9, 10, 11].indexOf(date.getMonth()) < 0) {
          month = "0"+ month
        }
        const key = month + "" + date.getDate()
        if (this.data.tomatoes[key]) {
          this.data.tomatoes[key].push(item)
        } else {
          this.data.tomatoes[key] = []
        }
      })

      this.setData({tomatoes: this.data.tomatoes})
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

    this.setData({me: wx.getStorageSync('me')})
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