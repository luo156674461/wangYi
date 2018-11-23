<template>
  <div class="subscibe">
    <div class="top">
      <van-icon name="quit" @click="drop" />
      <span class="txt">订阅更多直播号</span>
      <span class="enter">入驻</span>
    </div>
    <van-cell-group>
      <van-field value="请输入关键字" left-icon="seek" />
    </van-cell-group>
    <div class="list">
      <div class="left" ref="left">
        <div>
          <div :class="{aivet: after===index}" class="name" v-for="(i, index) in data.take.takeOne.subs" :key="index" @click="after = index">{{i.collectionName}}</div>
        </div>
      </div>
      <div class="right" ref="right">
        <div>
          <div class="strip" v-for="(item, index) in data.take.takeOne.sublives" :key="index">
            <div class="img">
              <img :src="item.icon" width="100%" height="100%">
             </div>
              <div class="matter">
                <span class="text">{{item.tname}}</span>
                <span class="count">{{item.userCount}}订阅</span>
              </div>
            </div>
          </div>
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
      if (!this.leftScroll) {
        this.leftScroll = new BScroll(this.$refs.left, {
          click: true
        })
      }
      if (!this.rightScroll) {
        this.rightScroll = new BScroll(this.$refs.right, {
          click: true
        })
      }
    })
  },
  data() {
    return {
      after: 0
    }
  },
  computed: {
    ...mapState(['data'])
  },
  methods: {
    ...mapMutations(['UPSIBSCIBE']),
    drop() {
      this.UPSIBSCIBE()
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.subscibe
  position: fixed
  top: 0
  left: 0
  bottom: 0
  width: 100%
  background: #fff
  z-index: 1000
  .top
    padding: 10px
    width: 100%
    box-sizing: border-box
    overflow: hidden
    line-height: 20px
    .van-icon
      margin-left: 10px
      margin-right: 20px
      font-size: 14px
      font-weight: 700
    .txt
      font-size: 14px
      font-weight: 700
    .enter
      float: right
      font-size: 10px
      font-weight: 400
  .van-cell-group
    padding: 0 10px
    margin-top: 10px
    box-sizing: border-box
    width: 100%
    height: 40px
    &::after
      content: none
      border: none
    .van-cell
      width: 100%
      height: 40px
      border: 1px solid #ccc
      border-radius: 5px
  .list
    position: fixed
    top: 92px
    left: 0
    bottom: 0
    display: flex
    width: 100%
    overflow: hidden
    .left
      flex: 0 0 50px
      padding: 10px 20px
      width: 50px
      color: #ccc
      text-align: center
      line-height: 40px
      .name
       &.aivet
         color: red
    .right
      flex: 1
      box-shadow: -1px -5px 10px #ccc
      .strip
        padding: 10px
        width: 100%
        height: 40px
        border-bottom: 1px solid #ccc
        overflow: hidden
        .img
          margin: 0 5px
          display: inline-block
          width: 30px
          height: 30px
          border-radius: 50%
          transform: translateY(-2px)
        .matter
          display: inline-block
          font-size: 0
          .text
            display: block
            margin-bottom: 4px
            font-size: 16px
          .count
            display: block
            font-size: 12px
            color: #ccc
</style>
