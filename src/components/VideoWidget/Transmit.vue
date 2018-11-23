<template>
  <div class="content">
    <video id="my-video" class="video-js vjs-default-skin" controls preload="auto" :poster="vi.firstFrameImg">
      <source :src="vi.mp4Hd_url" type="video/mp4">
    </video>
    <span class="txt" v-if="show">
            <span class="show">{{vi.title}}</span>
    </span>
    <div class="bottom">
      <div class="icon">
        <img :src="vi.videoTopic.topic_icons" width="100%" height="100%">
            </div>
        <div class="name">{{vi.videoTopic.tname}}</div>
      </div>
    </div>
</template>
<script>
import videojs from 'video.js'
import 'videojs-contrib-hls'
export default {
  props: {
    vi: {
      type: Array
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.video = videojs('my-video', {
        // bigPlayButton: false,
        // textTrackDisplay: false,
        // posterImage: true,
        // errorDisplay: false,
        // controlBar: true,
        width: '300px',
        height: '180px',
        responsive: true,
        autoplay: true
      }, function() {
        this.play()
        this.on('ended', function() {
          this.pause()
        })
      })
      this.anastole()
    })
  },
  data() {
    return {
      show: true
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.content
  position: relative
  width: 100%
  box-sizing: border-box
  .van-icon
    position: absolute
    top: 40%
    left: 50%
    margin-left: -20px
    margin-top: -20px
    width: 40px
    height: 40px
    text-align: center
    line-height: 40px
    font-size: 20px
    border-radius: 50%
    background: rgba(0,0,0,0.4)
    color: #fff
  .txt
    position: absolute
    top: 10px
    left: 10px
    width: 100%
    font-size: 14px
    background: rgba(7,17,27,0.1)
    z-index: 10
    .show
      display: inline-block
      width: 85%
      height: 100%
      color: #fff
  .bottom
    padding: 5px 10px 12px 10px
    width: 100%
    height: 40px
    box-sizing: border-box
    line-height: 30px
    .icon
      display: inline-block
      margin-right: 8px
      width: 20px
      height: 20px
      border-radius: 50%
    .name
      display: inline-block
      transform: translateY(-4px)
      max-width: 150px
      font-size: 12px
      color: #ccc
</style>
