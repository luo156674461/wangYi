<template>
  <div class="prompt" @click="HINT">
    <div class="img">
      <img src="../../publi/img/disdain.jpg" width="100%" height="100%">
      </div>
      <span class="text">您还没安装此软件</span>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['HINT'])
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.prompt
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 10
  background: rgba(0,0,0,0.5)
  .img
    margin: 40px auto
    width: 300px
    height: 300px
  .text
    display: block
    width: 100%
    font-size: 30px
    text-align: center
</style>
