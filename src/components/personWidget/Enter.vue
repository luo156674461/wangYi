<template>
  <div class="enter">
    <div class="head">
      <van-icon name="fault" class="exit" @click="SWITCH" />
      <div class="img">
        <img src="../../publi/img/al4.png" width="100%" height="100%">
      </div>
        <span class="text">手机号快速登入</span>
      </div>
      <div class="content">
        <van-field center label="手机号" v-model="phone" @input="inphone">
          <van-button slot="button" size="small" type="primary" v-if="sumSwitch.verifySwi" @click="codsAlter">获取验证码</van-button>
          <van-button slot="button" size="small" type="primary" v-if="sumSwitch.codeSwi">{{code}}</van-button>
        </van-field>
        <span class="hintPhone" v-show="phoneari">请输入手机号！！！</span>
        <van-field center label="验证码" class="pass" v-model="message" @input="inmessage" />
        <span class="hintMessage" v-show="messageai">请输入验证码！！！</span>
        <van-button size="large" @click="userswi">开始使用</van-button>
        <div class="bottom">
          <span class="other">邮箱账号登录</span>
          <span class="login">手机号注册</span>
        </div>
      </div>
      <div class="foot">
        <div class="entericon">
          <div class="microblog">
            <img src="../../publi/img/ald.png" width="100%" height="100%">
         </div>
            <div class="wechat">
              <img src="../../publi/img/alb.png" width="100%" height="100%">
         </div>
              <div class="qq">
                <img src="../../publi/img/al3.png" width="100%" height="100%">
         </div>
              </div>
              <span class="txt">登入即代表您阅读并同意服务条款和隐私政策</span>
            </div>
            <div class="note" v-if="show">
              <span class="num">验证码：{{user.num}}</span>
              <span class="read" @click="read">已读</span>
            </div>
          </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      code: 60,
      phone: '',
      message: '',
      phoneari: false,
      messageai: false,
      show: false
    }
  },
  computed: {
    ...mapState(['sumSwitch', 'user'])
  },
  methods: {
    ...mapMutations(['SWITCH', 'VERIFICATION', 'VERIFYNUM', 'LOGGED']),
    codsAlter() {
      this.VERIFICATION()
      this.time = setInterval(() => {
        this.code--
        if (this.code === 55) {
          this.VERIFYNUM()
          this.show = !this.show
        } else if (this.code === 35) {
          this.show = !this.show
        }
        if (this.code === 0) {
          this.code = 60
          clearInterval(this.time)
          this.VERIFICATION()
        }
      }, 1000)
    },
    read() {
      this.show = !this.show
    },
    userswi() {
      if (this.phone === '' && this.message === '') {
        this.phoneari = true
        this.messageai = true
        return
      } else if (this.phone === '') {
        this.phoneari = true
        return
      } else if (this.message === '') {
        this.messageai = true
        return
      }
      let userMark = parseInt(this.phone)
      let verNum = parseInt(this.message)
      let mobile = this.user.mobile
      let num = this.user.num
      if (userMark === mobile && verNum === num) {
        this.$router.push('/already')
        this.LOGGED()
        this.sumSwitch.enterSwi = false
        clearInterval(this.time)
        this.VERIFICATION()
      }
    },
    inphone() {
      if (this.phone) {
        this.phoneari = false
      }
    },
    inmessage() {
      if (this.message) {
        this.messageai = false
      }
    }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet/scss">
.enter
  position: fixed
  top: 0
  left: 0
  bottom: 0
  width: 100%
  background: #fff
  z-index: 10
  .head
    position: relative
    overflow: hidden
    font-size: 0
    .img
      margin: 60px auto
      width: 60px
      height: 60px
    .text
      padding-left: 30px
      font-size: 20px
      font-weight: 700
    .exit
      position: absolute
      top: 10px
      left: 5px
      color: #ccc
      font-size: 30px
  .content
    position: relative
    padding: 20px
    margin-top: 10px
    .van-button--primary
      background: #fff
      border: 1px solid #ccc
      border-radius: 20px
      color: #ccc
    .hintPhone
      position: absolute
      top: 68px
      left: 33%
      font-size: 10px
      color: #f00
    .pass
      margin-top: 20px
      &::after
        content: ' '
        position: absolute
        pointer-events: none
        -webkit-box-sizing: border-box
        box-sizing: border-box
        left: 15px
        right: 0
        bottom: 0
        -webkit-transform: scaleY(.5)
        transform: scaleY(.5)
        border-bottom: 1px solid #eee
    .hintMessage
      position: absolute
      top: 133px
      left: 33%
      font-size: 10px
      color: #f00
    .van-button--default
      margin-top: 20px
      height: 35px
      line-height: 30px
      font-size: 14px
      border: none
      border-radius: 20px
      background: rgba(255,105,180,0.6)
    .bottom
      font-size: 0
      .other
        display: inline-block
        padding: 20px 10px
        font-size: 12px
        font-weight: 700
      .login
        float: right
        padding: 20px 0
        font-size: 12px
        font-weight: 700
  .foot
     width: 100%
     font-size: 0
     text-align: center
     .entericon
       margin: 0 auto
       height: 40px
       width: 100%
       text-align: center
       & > div
         display: inline-block
         margin-left: 20px
         width: 40px
         height: 40px
     .txt
       display: inline-block
       font-size: 20px
       transform: scale(.5) translateX(-15px)
       white-space: nowrap
       color: #ccc
  .note
    position: absolute
    top: 0
    left: 0
    padding: 0 20px
    width: 100%
    height: 50px
    background: rgba(0,0,0,0.6)
    font-size: 0
    overflow: hidden
    .num
      display: inline-block
      line-height: 50px
      font-size: 22px
    .read
      display: inline-block
      padding: 0 5px
      margin-left: 38%
      border: 1px solid rgba(255,255,255,0.5)
      border-radius: 20px
      font-size: 16px
</style>
