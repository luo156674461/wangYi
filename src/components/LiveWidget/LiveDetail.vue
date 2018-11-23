<template>
  <div class="detail">
    <div class="see">
      <van-icon name="quit" @click="esc" />
      <video id="my-video" class="video-js vjs-default-skin" controls preload="auto">
        <source :src="liveValue.videos[0].videoUrl" type="application/x-mpegURL">
      </video>
      <div class="title" v-if="bri">
        <span class="txt">{{liveValue.roomName}}</span>
        <span class="part">{{liveValue.holdTime}}参与</span>
      </div>
    </div>
    <van-tabs ref="tabs">
      <van-tab title="直播">
        <Sinatv></Sinatv>
      </van-tab>
      <van-tab title="聊天">
        <Chat></Chat>
      </van-tab>
    </van-tabs>
    <div class="inp">
      <input type="text" class="feet">
      <van-icon name="collect" class="icon" />
      <van-icon name="feather" />
    </div>
  </div>
</template>
<script>
import Sinatv from './Sinatv'
import Chat from './Chat'
import videojs from 'video.js'
import 'videojs-contrib-hls'
import { mapMutations, mapState } from 'vuex'
export default {
  mounted() {
    return new Promise((resolve) => {
      this.$nextTick(() => {
        this.$refs.tabs.$el.children[0].children[0].children[1].style.display = 'inline-block'
        this.$refs.tabs.$el.children[0].children[0].children[1].style.height = '30px'
        this.$refs.tabs.$el.children[0].children[0].children[1].children[0].style.padding = '0px 5px'
        this.$refs.tabs.$el.children[0].children[0].children[1].children[0].style.height = '30px'
        this.$refs.tabs.$el.children[0].children[0].children[1].children[0].style.lineHeight = '30px'
        this.$refs.tabs.$el.children[0].children[0].children[1].children[0].style.display = 'inline-block'
        this.$refs.tabs.$el.children[0].children[0].children[2].style.display = 'inline-block'
        this.$refs.tabs.$el.children[0].children[0].children[2].style.height = '30px'
        this.$refs.tabs.$el.children[0].children[0].children[2].children[0].style.padding = '0px 5px'
        this.$refs.tabs.$el.children[0].children[0].children[2].children[0].style.height = '30px'
        this.$refs.tabs.$el.children[0].children[0].children[2].children[0].style.lineHeight = '30px'
        this.$refs.tabs.$el.children[0].children[0].children[2].children[0].style.display = 'inline-block'
        this.$refs.tabs.$el.children[0].children[0].style.display = 'block'
        this.$refs.tabs.$el.children[0].children[0].style.textAlign = 'center'
        this.$refs.tabs.$el.children[0].style.height = '30px'
        this.video = videojs('my-video', {
          bigPlayButton: false,
          textTrackDisplay: false,
          posterImage: true,
          errorDisplay: false,
          controlBar: true
        }, function() {
          this.play()
        })
        this.anastole()
      })
      resolve()
    })
  },
  beforeDestroy() {
    if (this.video) {
      this.video.dispose()
    }
  },
  data() {
    return {
      bri: true
    }
  },
  computed: {
    ...mapState(['liveValue'])
  },
  methods: {
    ...mapMutations(['LIVEALTER']),
    esc() {
      this.LIVEALTER()
    },
    anastole() {
      setInterval(() => {
        this.bri = false
      }, 1000)
    }
  },
  components: {
    Sinatv,
    Chat
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.detail
  position: fixed
  top: 0
  left: 0
  bottom: 0
  width: 100%
  background: #fff
  z-index: 10
  .see
    position: relative
    width: 100%
    height: 200px
    .video-js
      width: 100%
      height: 100%
    .van-icon
      position: absolute
      top: 10px
      left: 10px
      z-index: 10
      color: #fff
    .title
      position: absolute
      top: 0
      left: 0
      padding: 8px 10px 10px 40px
      width: 100%
      font-size: 0
      z-index: 5
      box-sizing: border-box
      background: rgba(0,0,0,.2)
      .txt
        box-sizing: border-box
        display: inline-block
        max-width: 230px
        padding: 0 10px 0 10px
        font-size: 16px
        color: #fff
        white-space: nowrap
        text-overflow: ellipsis
        overflow: hidden
      .part
        line-height: 20px
        float: right
        font-size: 12px
        color: #fff
  .van-tabs--line
    padding-top: 30px
    .van-ellipsis
      height: 30px
  .inp
    position: fixed
    left: 0
    bottom: 0
    padding: 2px 20px
    width: 100%
    height: 30px
    box-sizing: border-box
    line-height: 28px
    .feet
      padding-left: 7px
      margin-right: 20px
      width: 73%
      height: 20px
      border: 1px solid #ccc
      border-radius: 20px
      font-size: 14px
    .van-icon
      font-size: 18px
    .icon
      margin-right: 10px
</style>
