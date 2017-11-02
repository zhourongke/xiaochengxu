import Wheel from "../../components/wheel/wheel.js"

Page({
  data: {
    mode: 1
  },

  data: {
    border: "4px dashed yellow"
  },

  onLoad () {
    let self = this
    this.wheel = new Wheel(this, {
      areaNumber: 8,
      speed: 16,
      awardNumer: 1,
      mode: 1,
      callback: () => {
        wx.showModal({
          title: '提示',
          content: '恭喜您，中奖了',
          showCancel: false,
          success: (res) => {
            self.wheel.reset()
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })        
      }
    })

  },

  onReady () {
    console.log("onReady") 
    wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#11b3a2',
        animation: {
            duration: 400,
            timingFunc: 'easeIn'
        }
    })  
  },

  onSwitchMode (event) {
    let mode = event.currentTarget.dataset.mode
    this.setData({mode})
    this.wheel.switch(mode)
  }  

})