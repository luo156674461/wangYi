<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, index) in information" :key="index" @click="enlive">
        <div class="img">
          <img :src="img.image" width="100%" height="100%"/>
        </div>
          <span class="time">{{img.endTime}}</span>
          <span class="info">{{img.roomName}}</span>
        </div>
      </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import { mapMutations } from 'vuex'
export default {
  props: {
    information: {
      type: Array
    }
  },
  mounted() {
    this._initial()
  },
  methods: {
    ...mapMutations(['LIVEALTER']),
    _initial() {
      return new Promise(resolve => {
        this.$nextTick(() => {
          this.mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
              delay: 2000,
              stopOnLastSlide: false,
              disableOnInteraction: false
            }
          })
        })
      })
    },
    enlive() {
      this.LIVEALTER()
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.swiper-container
  width: 100%
  height: 180px
  .img
    width: 100%
    height: 180px
  .time
    position: absolute
    top: 10px
    left: 10px
    padding: 2px 10px
    border-radius: 20px
    line-height: 10px
    font-size: 10px
    background: rgba(7,17,27,.4)
    color: #fff
  .info
    position: absolute
    left: 10px
    bottom: 10px
    font-size: 16px
    color: #fff
</style>
