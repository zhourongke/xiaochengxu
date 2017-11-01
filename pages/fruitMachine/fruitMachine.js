import FruitMachine from "../../components/fruitMachine/fruitMachine.js"

Page({
  data: {
    color: "yellow"
  },
  onLoad () {
    this.fruitMachine = new FruitMachine(this, {
      ret: 8, //取值1～8
      speed: 100,
      callback: () => {
        wx.showModal({
          title: '提示',
          content: '恭喜您，中奖了',
          showCancel: false,
          success: (res) => {
            this.fruitMachine.reset()
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
        color = 0;
      }else{
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
  }
})