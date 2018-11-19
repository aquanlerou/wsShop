// page/component/details/details.js
Page({
  data:{
    goods: {
      id: 1,
      image: 'https://img.alicdn.com/imgextra/i1/880734502/O1CN011j7xYmdWoOf7ULs_!!880734502.jpg_430x430q90.jpg',
      image0: 'https://img.alicdn.com/imgextra/i4/880734502/O1CN011j7xYmPkioDFdGD_!!880734502.jpg',
      image1: 'https://img.alicdn.com/imgextra/i4/880734502/O1CN011j7xYoOJQvdZKjN_!!880734502.jpg',
      image2: 'https://img.alicdn.com/imgextra/i2/880734502/O1CN011j7xYmdTzdG5pwW_!!880734502.jpg',
      image3: 'https://img.alicdn.com/imgextra/i2/880734502/O1CN01giflOg1j7xYnZvzdV_!!880734502.jpg',
      image4: 'https://img.alicdn.com/imgextra/i1/880734502/O1CN011j7xYnZwOZ2Yysi_!!880734502.jpg',
      image5: 'https://img.alicdn.com/imgextra/i3/880734502/O1CN011j7xYmPiZngG0bY_!!880734502.jpg',
      image6: 'https://img.alicdn.com/imgextra/i3/880734502/O1CN011j7xYmPjuwgO8dF_!!880734502.jpg',
      image7: 'https://img.alicdn.com/imgextra/i3/880734502/O1CN011j7xYmdWwZxrlzi_!!880734502.jpg',
      image8: 'https://img.alicdn.com/imgextra/i1/880734502/O1CN011j7xYnzQCt76TU0_!!880734502.jpg',
      title: '【肥宅鲜切饲料45gx3_薯片】',
      price: 12.90,
      stock: '有货',
      detail: '休闲膨化网红零食吃货薄片',
      parameter: '45gx3包',
      service: '不支持退货'
    },
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },

  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
      }, 200)
    }, 300)

  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})