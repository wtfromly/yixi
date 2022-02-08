// pages/home/ganhuo/ganhuo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
ganhuo:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const db=wx.cloud.database();
        db.collection('ganhuo').get(
            {
              success:res=>{
                console.log("database connected")
                this.setData({
                  ganhuo:res.data,
                })
              },
              fail:function(){
                console.log("failed")
              }
            }
        )
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

    },
    toBlank:function(e){
        console.log(e.currentTarget.dataset.link)
        const link=e.currentTarget.dataset.link
        wx.navigateTo({
          url: '/pages/channel/blank/blank?link='+link
        })
      },
})