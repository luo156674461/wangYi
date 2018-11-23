<template>
  <div class="sinatv" ref="sin">
    <div>
      <div class="time">{{data.live.liveThree.endDate}}</div>
      <div class="info" v-for="(item, index) in data.live.liveThree.messages" :key="index">
        <div class="min">{{item.time}}</div>
        <div class="content">
          <div class="name">{{item.commentator.name}}</div>
          <div class="tet">{{item.msg.content}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  mounted() {
    this.$nextTick(() => {
      this.sinScoll = new BScroll(this.$refs.sin, {
        click: true
      })
    })
  },
  data() {
    return {
      arr: [1, 2]
    }
  },
  computed: {
    ...mapState(['data'])
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.sinatv
   position: fixed
   top: 230px
   left: 0
   bottom: 30px
   width: 100%
   padding: 10px 0
   font-size: 0
   background: rgba(248,248,255,0.5)
   overflow: hidden
   .time
     padding: 2px 7px
     line-height: 15px
     font-size: 10px
     background: rgba(210,180,140,0.1)
   .info
     padding: 7px
     .min
       position: relative
       padding-left: 10px
       margin-bottom: 8px
       line-height: 10px
       font-size: 10px
       color: red
       &::after
         content: " "
         position: absolute
         top: 3px
         left: 0
         width: 3px
         height: 3px
         border: 1px solid red
         border-radius: 50%
     .content
       padding: 0 7px 8px 7px
       border-radius: 5px
       background: #fff
       .name
         padding: 8px 0 8px 5px
         font-size: 12px
         color: rgb(100,149,237)
       .tet
         padding: 0 0 8px 5px
         font-size: 14px
</style>
