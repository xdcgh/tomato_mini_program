// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visibleConfirm: false,
    list: [
      {id: 1, text: '今天学习微信小程序', finished: true},
      {id: 2, text: '今天学习微信小程序', finished: true},
      {id: 3, text: '今天学习微信小程序', finished: false},
      {id: 4, text: '今天学习微信小程序', finished: true},
      {id: 5, text: '今天学习微信小程序', finished: false}
    ]
  },
  confirmCreate(event) {
    let content = event.detail

    if (content) {
      let todo = [{id: this.data.list.length + 1, text: content, finished: false}]
      this.setData({list: todo.concat(this.data.list)})
    }

    this.hideConfirm()
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