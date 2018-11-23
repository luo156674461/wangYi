<template>
  <div class="video">
    <div class="nev" ref="nev">
      <div ref="nevContent">
        <div @click="active = index" :class="{dot: active===index}" class="txt" v-for="(item, index) in arr" :key="index" ref="nevItem">{{item}}</div>
      </div>
    </div>
    <div class="videoList" ref="list">
      <div>
        <div class="content" v-for="(v, index) in data.video" :key="index">
          <Transmit :vi="v"></Transmit>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Transmit from '../VideoWidget/Transmit'
import { mapState } from 'vuex'
export default {
  mounted() {
    this.$nextTick(() => {
      this.init()
      if (!this.listScroll) {
        this.listScroll = new BScroll(this.$refs.list, {
          click: true
        })
      }
    })
  },
  data() {
    return {
      arr: ['推荐', '超级IP季', '公版计划', '搞笑', '影视', '综艺', '音乐', '现场', '黑科技', '小品', '萌物', '军武', '猎奇', '二次元', '涨姿势'],
      active: 0
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
    }
  },
  components: {
    Transmit
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.video
  position: fixed
  top: 0
  left: 0
  bottom: 50px
  width: 100%
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
  .videoList
    position: fixed
    top: 40px
    left: 0
    bottom: 50px
    width: 100%
    overflow: hidden
</style>
