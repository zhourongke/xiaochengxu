import SlotMachine from "../../components/slotMachine/slotMachine.js"

Page({
  data: {
    color: "yellow"
  },

  onLoad () {
    this.slotMachine = new SlotMachine(this, {
      height: 40,  //单个数字高度
      len: 10,     
      transY1: 0,
      num1: 3,
      transY2: 0,
      num2: 0,
      transY3: 0,
      num3: 0,
      transY4: 0,
      num4: 1,
      speed: 24,
      callback: () => {
        wx.showModal({
          title: '提示',
          content: '恭喜您，中奖了',
          showCancel: false,
          success: (res) =>  {
            this.slotMachine.reset()
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
    let _this = this
    console.log("onReady");
    var color = 1;
    setInterval(function(){
      if(color == 1){
        _this.setData({
          color: "red"
        })
        color = 2;
      }else if(color == 2){
        _this.setData({
          color: "#0cf507"
        })
        color = 3;
      }else if(color == 3){
        _this.setData({
          color: "yellow"
        })
        color = 1;
      }
    },200); 
    wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#11b3a2',
        animation: {
            duration: 400,
            timingFunc: 'easeIn'
        }
    })   
  },

  onStart () {
    this.slotMachine.start()
  }

})