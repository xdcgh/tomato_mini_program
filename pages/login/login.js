const {http} = require('../../lib/http')
const {app_id, app_secret} = getApp().globalData

Page({
  data: {},
  onShow() {
    // http.get('/todos')
  },
  login(event) {
    wx.login({
      success: (response) => this.onGetCode({
        ...response,
        ...event.detail
      }),
      fail: (error) => this.onError(error)
    })
  },
  onGetCode({code, encryptedData, iv}) {
    http.post('/sign_in/mini_program_user', {
      code,
      iv,
      encrypted_data: encryptedData,
      app_id,
      app_secret
    }).then(response => {
      wx.setStorageSync('me', response.data)
      wx.setStorageSync('X-token', response.header["X-token"])

      wx.reLaunch({
        url: "/pages/home/home"
      })
    })
  }
})