<template>
  <div id="app">
    <router-view />
    <Skip></Skip>
    <transition name="out">
      <div v-if="sumSwitch.enterSwi" class="show">
        <Enter></Enter>
      </div>
    </transition>
    <Prompt v-if="sumSwitch.hintSwi"></Prompt>
    <transition name="out">
      <div v-if="sumSwitch.liveDetail" class="show">
        <LiveDetail></LiveDetail>
      </div>
    </transition>
    <transition name="out">
      <div v-if="sumSwitch.inSibscibe" class="show">
        <Subscibe></Subscibe>
      </div>
    </transition>
  </div>
</template>
<script>
import Skip from './components/SkipRoute/Skip'
import Enter from './components/personWidget/Enter'
import Prompt from './components/personWidget/Prompt'
import LiveDetail from './components/LiveWidget/LiveDetail'
import Subscibe from './components/LiveWidget/Subscibe'
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['sumSwitch'])
  },
  components: {
    Skip,
    Enter,
    Prompt,
    LiveDetail,
    Subscibe
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.show
  position: absolute
  top: 0
  left: 0
  bottom: 0
  right: 0
  transition: all 0.5s
  z-index: 10
  &.out-enter-active
    transition: all 0.5s
  &.out-enter
    transform: translateX(100%)
  &.out-leave-active
    transition: all 0.5s
  &.out-leave-to
    transform: translateX(100%)
</style>
