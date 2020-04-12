// pages/home/home.js
const {http} = require('../../lib/http')

Page({

  updateId: "",
  updateIndex: "",

  /**
   * 页面的初始数据
   */
  data: {
    visibleCreateConfirm: false,
    visibleUpdateConfirm: false,
    list: []
  },
  showConfirmCreate(event) {
    let content = event.detail

    if (content) {

      http.post('/todos', {
        completed: false,
        description: content
      }).then(response => {
        let todo = JSON.parse(response.data)["resource"]

        this.setData({list: this.data.list.concat(todo)})
        this.hideCreateConfirm()
      })
    }
  },
  hideCreateConfirm() {
    this.setData({
      visibleCreateConfirm: false
    })
  },
  showConfirm() {
    this.setData({visibleCreateConfirm: true})
  },
  destroyTodo(event) {
    let index = event.currentTarget.dataset.index
    let id = event.currentTarget.dataset.id

    http.put(`/todos/${id}`, {
      completed: true
    }).then(response => {
      this.data.list[index] = JSON.parse(response.data)['resource']
      this.setData({
        list: this.data.list
      })
    })

    this.data.list[index].finished = true
    this.setData({list: this.data.list})
  },
  changeText(event) {
    let {content, id, index} = event.currentTarget.dataset
    this.updateId = id
    this.updateIndex = index
    this.setData({visibleUpdateConfirm: true,updateContent: content})
  },
  hideUpdateConfirm() {
    this.setData({visibleUpdateConfirm: false})
  },
  showConfirmUpdate(event) {
    const content = event.detail

    http.put(`/todos/${this.updateId}`, {
      description: content
    }).then(response => {
      this.data.list[this.updateIndex] = JSON.parse(response.data)['resource']
      this.setData({
        list: this.data.list
      })

      this.hideUpdateConfirm()
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
    http.get('/todos?completed=false').then(response => {
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