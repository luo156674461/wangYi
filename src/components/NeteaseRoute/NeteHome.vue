<template>
  <div class="home">
    <div class="seek">
      <div class="logo">
        <img src="../../publi/img/home_icon.png" width="100%" height="100%">
        </div>
        <div class="input">
        </div>
      </div>
      <div class="nev" ref="nev">
        <div ref="nevContent">
          <div @click="gainData(index)" :class="{dot: active===index}" class="txt" v-for="(item, index) in arr" :key="index" ref="nevItem">{{item}}</div>
        </div>
      </div>
      <div class="content" ref="con">
        <div>
          <div class="main" v-for="(item, index) in neteData" :key="index">
            <div class="left">
              <span class="text">{{item.title}}</span>
              <span class="name">{{item.source}}</span>
              <span class="card">{{item.tcount}}跟帖</span>
            </div>
            <div class="img">
              <img :src="item.picInfo[0].url" width="100%" height="100%">
                </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  created() {
    this.$nextTick(() => {
      this.neteData = this.data.news.dy
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
      if (!this.conScroll) {
        this.conScroll = new BScroll(this.$refs.con, {
          click: true
        })
      }
    })
  },
  data() {
    return {
      arr: ['段子', '视频', '北京', '公开课', '财经', '科技', '汽车', '网易号', '军事', '时尚', '直播', '图片', '跟帖', 'NBA', '热点', '房产', '股票', '轻松一刻', '历史', '家居', '独家', '游戏', '健康', '航空', '彩票', '漫画'],
      active: 0,
      neteData: []
    }
  },
  computed: {
    ...mapState(['data'])
  },
  methods: {
    init() {
      if (this.arr) {
        let result = 0
        this.$refs.nevItem.forEach(n => {
          result += n.offsetWidth
        })
        this.$refs.nevContent.style.width = result + 'px'
        if (!this.picScroll) {
          this.picScroll = new BScroll(
            this.$refs.nev, {
              scrollX: true,
              click: true
            })
        } else {
          this.picScroll.refresh()
        }
      }
    },
    gainData(i) {
      this.active = i
      if (i === 6 && this.data.news) {
        this.neteData = this.data.news.auto
      } else if (i === 0 && this.data.news) {
        this.neteData = this.data.news.dy
      } else if (i === 9 && this.data.news) {
        this.neteData = this.data.news.ent
      } else if (i === 7 && this.data.news) {
        this.neteData = this.data.news.sports
      } else if (i === 6 && this.data.news) {
        this.neteData = this.data.news.tech
      } else if (i === 20 && this.data.news) {
        this.neteData = this.data.news.toutiao
      } else if (i === 8 && this.data.news) {
        this.neteData = this.data.news.war
      }
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.home
  position: fixed
  top: 0
  left: 0
  bottom: 50px
  width: 100%
  .seek
    position: fixed
    top: 0
    left: 0
    padding: 0 10px
    width: 100%
    height: 60px
    background: red
    box-sizing: border-box
    overflow: hidden
    .logo
      display: inline-block
      padding: 27px 10px 0 0
      width: 40px
      height: 20px
    .input
      display: inline-block
      width: 75%
      height: 30px
      border-radius: 20px
      background: rgba(255,255,255,0.4)
      transform: translateY(5px)
      z-index: 5
  .nev
    position: fixed
    top: 60px
    left: 0
    width: 100%
    box-sizing: border-box
    white-space: nowrap
    overflow: hidden
    font-size: 0
    .txt
      position: relative
      display: inline-block
      padding: 10px 10px
      font-size: 14px
      &.dot::after
        content: ""
        position: absolute
        top: 6px
        right: 3px
        display: inline-block
        width: 3px
        height: 3px
        border: 2px solid red
        border-radius: 50%
        z-index: 5
  .content
    position: fixed
    top: 100px
    left: 0
    bottom: 50px
    width: 100%
    overflow: hidden
    .main
      display: flex
      padding: 10px
      border: 1px solid rgba(7,17,27,.1)
      width: 100%
      font-size: 0
      box-sizing: border-box
      .left
        flex: 1
        padding-right: 10px
        .text
          display: block
          margin-bottom: 20px
          font-size: 16px
        .name
          display: inline-block
          margin-right: 5px
          line-height: 10px
          font-size: 10px
          color: #ccc
        .card
          display: inline-block
          transform: translateY(1px)
          line-height: 10px
          font-size: 10px
          color: #ccc
      .img
        flex: 0 0 110px
        width: 110px
</style>
