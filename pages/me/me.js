// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: "tomato",
    tomatos: {
      "本周四": [
        {id: 1,time: "14:00", text: "奥i合肥拉进怀里和金额佛i啊"},
        {id: 2,time: "14:20", text: "奥拉进怀里和金额佛i啊"},
        {id: 4,time: "14:50", text: "合肥拉进怀里和金额佛i啊"},
        {id: 5,time: "15:00", text: "奥i合肥拉进怀里和金"},
        {id: 6,time: "15:50", text: "奥i合肥拉进怀额佛i啊"}
      ],
      "本周五": [
        {id: 1,time: "14:00", text: "奥i合肥拉进怀里和金额佛i啊"},
        {id: 2,time: "14:20", text: "奥拉进怀里和金额佛i啊"},
        {id: 4,time: "14:50", text: "合肥拉进怀里和金额佛i啊"},
        {id: 5,time: "15:00", text: "奥i合肥拉进怀里和金"},
        {id: 6,time: "15:50", text: "奥i合肥拉进怀额佛i啊"}
      ],
      "本周六": [
        {id: 1,time: "14:00", text: "奥i合肥拉进怀里和金额佛i啊"},
        {id: 2,time: "14:20", text: "奥拉进怀里和金额佛i啊"},
        {id: 4,time: "14:50", text: "合肥拉进怀里和金额佛i啊"},
        {id: 5,time: "15:00", text: "奥i合肥拉进怀里和金"},
        {id: 6,time: "15:50", text: "奥i合肥拉进怀额佛i啊"}
      ]
    }
  },
  changeTab(event) {
    let name = event.currentTarget.dataset.name
    this.setData({tab: name})
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