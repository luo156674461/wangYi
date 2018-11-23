<template>
  <div class="live">
    <div class="upload" v-if="isAjax">
      <Load></Load>
    </div>
    <div class="content" v-if="!isAjax">
      <div class="nev" ref="nev">
        <div ref="nevContent">
          <div @click="shutelse" :class="{dot: active===0}" class="txt" ref="nevOne">热门</div>
          <div @click="onelse" :class="{dot: active===1}" class="txt" ref="nevTwo">极致</div>
          <div @click="active = index + 2" :class="{dot: active===index + 2}" class="txt" v-for="(item, index) in data.classify.classifyNav" :key="index" ref="nevItem">{{item.name}}</div>
        </div>
      </div>
      <div class="notice" ref="not">
        <div>
          <div class="load" v-if="upload">
            <Load></Load>
          </div>
          <Sildes :information="data.live.liveOne.top" v-if="top"></Sildes>
          <div class="take">
            <div class="me">
              <van-icon name="my_subscription" size="22px" />
              <span class="meTake">我的订阅</span>
              <span class="con">去关注 发现精彩</span>
            </div>
            <div class="more" @click="openSubs">
              <van-icon name="detail_subscription" size="22px" />
              <span class="moreTake">更多订阅</span>
              <span class="con">新奇世界 触手可及</span>
            </div>
          </div>
          <div class="main" v-for="(item, index) in data.live.liveOne.live_review" :key="index" @click="enterlive(item)" v-if="reviwe">
            <img :src="item.pcImage" width="100%" height="100%">
            <span class="motif">{{item.source}}</span>
            <span class="part">直播{{item.userCount}}参与</span>
            <span class="txt">{{item.roomName}}</span>
          </div>
        </div>
      </div>
    </div>
    <transition name="out">
        <div v-if="swielse" class="show">
          <LiveElse></LiveElse>
        </div>
      </transition>
  </div>
</template>
<script>
import Load from '../../widget/Load'
import Sildes from '../../widget/Slideshow'
import LiveElse from '../LiveWidget/LiveElse'
import { mapState, mapMutations, mapActions } from 'vuex'
import BScroll from 'better-scroll'
export default {
  updated() {
    this.$nextTick(() => {
      this.init()
      if (!this.notScroll) {
        this.notScroll = new BScroll(this.$refs.not, {
          click: true,
          pullDownRefresh: {
            threshold: 30,
            stop: 20
          }
        })
        this.notScroll.on('pullingDown', () => {
          this.load()
        })
        this.existtop()
        this.existrev()
      }
    })
  },
  data() {
    return {
      active: 0,
      reviwe: false,
      top: false,
      swielse: false
    }
  },
  computed: {
    ...mapState(['data', 'isAjax', 'upload'])
  },
  methods: {
    ...mapMutations(['LIVEIMG', 'UPLODE', 'LIVEALTER', 'LIVEVALUE', 'UPSIBSCIBE']),
    ...mapActions(['getLive', 'getTake', 'getMore']),
    init() {
      if (this.data.classify.classifyNav) {
        let result = 0
        let nevOneWidth = this.$refs.nevOne.offsetWidth
        let nevTwoWidth = this.$refs.nevTwo.offsetWidth
        result = nevOneWidth + nevTwoWidth
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
    load() {
      this.UPLODE()
      setTimeout(() => {
        this.UPLODE()
      }, 20)
    },
    enterlive(i) {
      this.LIVEALTER()
      this.LIVEVALUE(i)
    },
    existtop() {
      if (this.data.live.liveOne.top) {
        this.top = true
      }
    },
    existrev() {
      if (this.data.live.liveOne.live_review.length !== 0) {
        this.reviwe = true
      }
    },
    openSubs() {
      this.UPSIBSCIBE()
      this.getTake(this.axios)
    },
    onelse() {
      this.getMore(this.axios)
      this.active = 1
      if (this.data.more.length !== 0) {
        this.swielse = true
      }
    },
    shutelse() {
      this.active = 0
      this.swielse = false
    }
  },
  components: {
    Load,
    Sildes,
    LiveElse
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.live
  position: fixed
  top: 0
  left: 0
  bottom: 50px
  width: 100%
  .upload
    position: absolute
    top: 50%
    left: 50%
  .content
    .nev
      position: fixed
      top: 0
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
    .notice
      position: fixed
      top: 40px
      left: 0
      bottom: 50px
      width: 100%
      overflow: hidden
      .load
        width: 100%
        height: 30px
      .take
        display: flex
        padding: 0 20px
        .me
          flex: 1
          position: relative
          padding: 0 10px
          &::after
            position: absolute
            top: 15px
            right: 5px
            content: ""
            border: 1px solid rgba(7,17,27,.1)
            height: 25px
          .van-icon
            float: left
            padding-right: 10px
            line-height: 63px
            width: 22px
            height: 100%
          .meTake
            display: block
            padding: 10px 0 5px 0
            font-size: 14px
          .con
            display: block
            font-size: 12px
            color: #ccc
        .more
          flex: 1
          padding: 0 10px
          .van-icon
            float: left
            padding-right: 10px
            line-height: 63px
            width: 22px
            height: 100%
          .moreTake
            display: block
            padding: 10px 0 5px 0
            font-size: 14px
          .con
            display: block
            font-size: 12px
            color: #ccc
      .main
        position: relative
        width: 100%
        height: 180px
        font-size: 0
        .motif
          position: absolute
          top: 10px
          left: 20px
          z-index: 5
          font-size: 12px
          color: #fff
        .part
          position: absolute
          left: 10px
          bottom: 40px
          display: inline-block
          padding: 1px 8px
          border-radius: 20px
          font-size: 12px
          color: #fff
          background: rgba(0,0,0,0.5)
        .txt
          position: absolute
          left: 10px
          bottom: 10px
          font-size: 16px
          font-weight: 700
          color: #fff
  .show
    position: fixed
    top: 40px
    left: 0
    bottom: 49px
    width: 100%
    background: #fff
    transition: all 0.5s
    &.out-enter-active
      transition: all 0.5s
    &.out-enter
      transform: translateX(100%)
    &.out-leave-active
      transition: all 0.5s
    &.out-leave-to
      transform: translateX(100%)
</style>
