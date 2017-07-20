<template>
  <ul
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
    <li v-for="item in list">{{ item }}</li>
  </ul>
</template>
<script>
import { InfiniteScroll } from 'mint-ui'
console.log(this)

export default {
  data () {
    return {
      topStatus: '',
      allLoaded: false,
      list: [1, 2, 3, 4, 5, 56, 6, 7, 78, 8, 9, 90, 0, 11, 1, 2, 3, 4, 5, 56, 6, 7, 78, 8, 9, 90, 0, 11]
    }
  },
  beforeCreate: function () {
    console.log(this)
    this.constructor.use(InfiniteScroll)
  },
  methods: {
    handleTopChange: function (status) {
      this.topStatus = status
    },
    loadBottom: function () {
      setTimeout(() => {
        console.log('上拉加载')
        for (let i = 0; i < 50; i++) {
          this.$data.list.push(i)
        }
        // this.allLoaded = true// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded()
      }, 1000)
    },
    loadTop: function () {
     // 加载更多数据
      setTimeout(() => {
        console.log('下拉刷新完成')
        this.$refs.loadmore.onTopLoaded()
      }, 1000)
    },
    loadMore: function () {
      this.loading = true
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i)
        }
        this.loading = false
      }, 2500)
    }
    // ...
  }
  // ...
}
</script>
<style scoped></style>
