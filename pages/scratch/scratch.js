import Scratch from "../../components/scratch/scratch.js"

Page({
  data: {
    isStart: true,
    txt: "现在刮奖"
  }, 

  onLoad () {
    this.scratch = new Scratch(this, {
      canvasWidth: 197,
      canvasHeight: 72,
      imageResource: 'https://misc.aotu.io/pfan123/wx/placeholder.png',
      maskColor: "red",
      r: 4,
      awardTxt: '一等奖',
      awardTxtColor: "#3985ff",
      awardTxtFontSize: "24px",
      callback: () => {
        wx.showModal({
          title: '提示',
          content: `恭喜您中了500万`,
          showCancel: false,
          success: (res) => {
            this.scratch.reset()
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
  },

  onStart () {
    let { isStart } = this.data
    if(isStart){
      this.scratch.start()
      this.setData({
        txt: "再刮一次",
        isStart: false
      })
    }else{
      this.scratch.restart()
    }
    
  }

})