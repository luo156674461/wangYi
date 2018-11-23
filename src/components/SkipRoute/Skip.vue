<template>
  <div class="skip">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="video" to="/video" @click="inVideo">视频</van-tabbar-item>
      <van-tabbar-item icon="Live" to="/live" @click="inLive">直播</van-tabbar-item>
      <van-tabbar-item icon="me" :to="user.log?'/already':'/person'">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      active: 0
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['getNwes', 'getVideo', 'getLive', 'getClassify', 'getMore']),
    inVideo() {
      this.getVideo(this.axios)
    },
    inLive() {
      this.getLive(this.axios)
      this.getClassify(this.axios)
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.van-tabbar
  &::after
    height: 0
    border: none
  .van-tabbar-item--active
    color:#f00
</style>
