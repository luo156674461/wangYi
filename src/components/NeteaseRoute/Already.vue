<template>
  <div class="home">
    <div class="top">
      <span class="quit" @click="exit">退出</span>
      <button class="sign">
        <van-icon name="feather" class="sign_icon" />
        <span class="text">签到</span>
      </button>
      <div class="icon">
       <div class="img">
         <img src="../../publi/img/bf6.png" width="100%" height="100%">
       </div>
        <span class="name">
         {{user.mobile}}
       </span>
      </div>
      <van-tabbar v-model="active" :fixed="false">
        <van-tabbar-item icon="collect">收藏</van-tabbar-item>
        <van-tabbar-item icon="history">历史</van-tabbar-item>
        <van-tabbar-item icon="message">跟帖</van-tabbar-item>
      </van-tabbar>
    </div>
    <Split></Split>
    <div class="bottom" ref="menu">
      <div>
        <van-cell-group>
          <van-cell title="我的消息" value="评论我的跟帖/通知" />
          <van-cell title="我的订阅" />
          <van-cell title="金币商城" value="黑！你的500金币，在这里" />
          <van-cell title="京东特供" value="新人领188元红包" />
          <van-cell title="活动广场" />
          <van-cell title="检查更新" value="V47.1" />
          <van-cell title="免流量看新闻" />
          <van-cell title="设置" />
          <van-icon name="arrows" class="arr1" />
          <van-icon name="arrows" class="arr2" />
          <van-icon name="arrows" class="arr3" />
          <van-icon name="arrows" class="arr4" />
          <van-icon name="arrows" class="arr5" />
          <van-icon name="arrows" class="arr6" />
          <van-icon name="arrows" class="arr7" />
          <van-icon name="arrows" class="arr8" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>
<script>
import Split from '../../widget/Split'
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  created() {
    this.$nextTick(() => {
      this.menuScroll = new BScroll(this.$refs.menu, {
        click: true
      })
    })
  },
  data() {
    return {
      active: 0
    }
  },
  computed: {
     ...mapState(['user'])
  },
  methods: {
    ...mapMutations(['LOGGED']),
    exit() {
      this.$router.push('/person')
      this.LOGGED()
    }
  },
  components: {
    Split
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
  .top
    overflow: hidden
    margin-bottom: 10px
    .quit
      display: inline-block
      position: absolute
      top: 20px
      left: 20px
      width: 55px
      height: 25px
      text-align: center
      line-height: 25px
      border-radius: 20px
      background: #f00
      font-size: 12px
    .sign
      display: flex
      position: absolute
      top: 20px
      right: 20px
      width: 55px
      height: 25px
      border: 1px solid #ccc
      border-radius: 20px
      background: #fff
      font-size: 0
      line-height: 15px
      .sign_icon
        flex: 0 0 10px
        text-align: center
        font-size: 14px
      .text
        flex: 1
        font-size: 12px
    .icon
      width: 100%
      margin: 70px 0 15px
      align-items: center
      .img
        margin: 0 auto
        width: 80px
        height: 80px
        border-radius: 50%
      .name
        display: block
        text-align: center
    .van-tabbar
      margin-top: 20px
      &::after
        height: 0
        border: none
      .van-tabbar-item--active
        color: #666
  .bottom
    position: absolute
    top: 257px
    left: 0
    bottom: 0
    width: 100%
    overflow: hidden
    .van-cell-group
      position: relative
      &::after
        height: 0
        border: none
      .van-cell
        height: 54px
        line-height: 35px
        padding: 10px 30px 10px 15px
        color: #ccc
      .van-icon
        position: absolute
        top: 22px
        right: 15px
        font-size: 10px
        color: #ccc
      .arr2
        top: 76px
      .arr3
        top: 130px
      .arr4
        top: 184px
      .arr5
        top: 238px
      .arr6
        top: 292px
      .arr7
        top: 346px
      .arr8
        top: 400px
</style>
