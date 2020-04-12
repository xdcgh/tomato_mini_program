// pages/home/home.js
const {http} = require('../../lib/http')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    visibleConfirm: false,
    list: []
  },
  confirmCreate(event) {
    let content = event.detail

    if (content) {

      console.log(content)

      http.post('/todos', {
        completed: false,
        description: content
      }).then(response => {
        console.log(response.data)

        let todo = JSON.parse(response.data)["resource"]

        this.setData({list: this.data.list.concat(todo)})
        this.hideConfirm()
      })
    }
  },
  hideConfirm() {
    this.setData({
      visibleConfirm: false
    })
  },
  showConfirm() {
    this.setData({visibleConfirm: true})
  },
  destroyTodo(event) {
    let index = event.currentTarget.dataset.index

    http.delete(`/todos?`)

    this.data.list[index].finished = true
    this.setData({list: this.data.list})
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
    http.get('/todos').then(response => {
      this.setData({list: JSON.parse(response.data)["resources"]})
    })
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