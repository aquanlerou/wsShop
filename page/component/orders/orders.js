// page/component/orders/orders.js
Page({
  data:{
    address:{},
    hasAddress: false,
    total:0,
    orders:[
      { id: 1, title: '小瓶果 35gx12瓶/盒', image: 'https://img.alicdn.com/imgextra/i4/880734502/O1CN010s5exR1j7xYzNzWvf_!!880734502.jpg_430x430q90.jpg', num: 2, price: 168.00, selected: true },
      { id: 2, title: '肥宅鲜切饲料 45gx3', image: 'https://img.alicdn.com/imgextra/i1/880734502/O1CN011j7xYmdWoOf7ULs_!!880734502.jpg_430x430q90.jpg', num: 1, price: 12.90, selected: true }
      ]
  },

  onReady() {
    this.getTotalPrice();
  },
  
  onShow:function(){
    const self = this;
    wx.getStorage({
      key:'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付功能未完成！',
      text:'center',
      complete() {
        wx.switchTab({
          url: '/page/component/user/user'
        })
      }
    })
  }
})