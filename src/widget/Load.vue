<template>
<div class="load">
  <div class="dot"></div>
</div>
</template>
<script>
export default {

}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
@keyframes move
      0%
        transform: scale(1)
      25%
        transform: scale(2)
      50%
        transform: scale(1)
      75%
        transform: scale(2)
      100%
        transform: scale(1)
.load
  width: 100%
  text-align: center
  .dot
    display: inline-block
    width: 12px
    height: 12px
    border-radius: 50%
    border: 6px solid red
    animation: move 0.5s infinite
</style>
