// pages/tomato/tomato.js
const {http} = require('../../lib/http')

Page({

  timer: null,

  /**
   * 页面的初始数据
   */
  data: {
    time: '',
    defaultSecond: 3,
    timerStatus: 'stop',
    confirmVisible: false,
    finishConfirmVisible: false,
    tomato: {}
  },
  changeTime() {
    let m = Math.floor(this.data.defaultSecond / 60)
    let s = Math.floor(this.data.defaultSecond % 60)

    if (s === 0) {
      s = "00"
    }
    if ((s + "").length === 1) {
      // 24:5 -> 24:05
      s = "0" + s
    }
    if ((m + "").length === 1) {
      // 4:25 -> 04:25
      m = "0" + m
    }

    this.setData({time: `${m}:${s}`})
  },
  startTimer() {
    this.setData({timerStatus: 'start'})

    this.changeTime()

    this.timer = setInterval(() => {
      this.data.defaultSecond--
      this.changeTime()

      if (this.data.defaultSecond === 0) {
        this.setData({defaultSecond: 0, finishConfirmVisible: true})

        return this.clearTimer()
      }
    }, 1000)
  },
  clearTimer() {
    clearInterval(this.timer)

    this.setData({timerStatus: 'stop'})
  },
  showConfirm() {
    this.setData({confirmVisible: true})
    this.clearTimer()
  },
  confirmAbandon(event) {
    let content = event.detail

    http.put(`/tomatoes/${this.data.tomato.id}`, {
      description: content,
      aborted: true
    }).then(() => {
      wx.navigateBack({
        to: -1
      })
    })
  },
  hideConfirm() {
    this.setData({confirmVisible: false})
    this.startTimer()
  },
  againTimer() {
    this.setData({defaultSecond: 5})
    this.startTimer()
  },
  confirmFinish(event) {
    let content = event.detail

    http.put(`/tomatoes/${this.data.tomato.id}`, {
      description: content,
    }).then(() => {
      this.confirmCancel()
    })
  },
  confirmCancel() {
    this.setData({finishConfirmVisible: false})
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
    this.startTimer()

    http.post('/tomatoes').then(response => {
      this.setData({tomato: JSON.parse(response.data)["resource"]})
    })
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.clearTimer()

    http.put(`/tomatoes/${this.data.tomato.id}`, {
      description: "退出放弃",
      aborted: true
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.clearTimer()

    http.put(`/tomatoes/${this.data.tomato.id}`, {
      description: "退出放弃",
      aborted: true
    })
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