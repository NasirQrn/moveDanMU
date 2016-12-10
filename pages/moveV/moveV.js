//condition----控制弹幕资源显示
//isLoop----控制循环 点击按钮循环停止（F）
Page({
  data: {
    animationData: {},
    aaa:-1000,
   condition:true,
   isLoop:true,
 },
  onLoad: function () {

    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
      }
    })
  },
  onShow: function () {
    // 初始化动画 注：需要this
    var that = this;
   that.antimationdV()
   
   
   
   
   
   
    // this.tapName();
    //  setInterval(function(){//间隔时间循环播放
      
    //    console.log('....')
    //      that.setData({
    //          condition:true,
    //    })
    //    that.antimationdV()
    //  },6000)
  },

  // 运动动画--------------------------------------弹幕移动函数
  antimationdV: function (event) {
    this.setData({
        condition:true 
    })
   console.log('timeout1...'+this.data.condition);
    var dur = 5000//动画事件
    var moveLong = -1500;//负数--从右往左 ，正数--从左往右
    var animation = wx.createAnimation({
      duration: dur,
      timingFunction: 'linear',
    })
    this.animation = animation
      animation.translate(moveLong).step()//动画事件---运行movelong距离
       this.setData({
           right:-1000
         })
     
      //-----------------------------1 condition
      setTimeout(function(){
          
          this.setData({
        animationData: animation.export() 
      })
      console.log('1...'+this.data.condition);
       }.bind(this),100)

       //------------------------------2 right
         setTimeout(function(){
             this.setData({
           condition:false,
         })
      console.log('2...'+this.data.condition);
       }.bind(this),5100)

       //------------------------------- function 递归
       setTimeout(function(){
           
      console.log('递归...isLoop'+this.data.isLoop);
      
      if(this.data.isLoop){
         this.antimationdV();
      }
       }.bind(this),5200)
  
  },

  // view宽度与屏幕宽度比例 计算速度函数  按照时间运动
  viewMove: function () { },

  //到头消失/循环播放函数(setData重新设置？)
  loopMove: function () { },

  //点击事件（希望默认点击事件）
  // tapName: function(event) {
  //    console.log('....')
  //    console.log(event)
  // }
})