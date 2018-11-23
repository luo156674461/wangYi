<template>
  <div class="else" ref="else">
    <div>
      <div class="main" v-for="(item, index) in data.more" :key="index" @click="enterlive(item)">
        <img :src="item.image" width="100%" height="100%">
        <span class="motif">{{item.source}}</span>
        <span class="part">直播{{item.userCount}}参与</span>
        <span class="txt">{{item.roomName}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  mounted() {
    this.$nextTick(() => {
      this.elseScroll = new BScroll(this.$refs.else, {
        click: true
      })
    })
  },
  computed: {
    ...mapState(['data'])
  },
  methods: {
    ...mapMutations(['LIVEALTER', 'LIVEVALUE']),
    enterlive(i) {
      this.LIVEALTER()
      this.LIVEVALUE(i)
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.else
  position: fixed
  top: 40px
  left: 0
  bottom: 60px
  width: 100%
  overflow: hidden
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
</style>
