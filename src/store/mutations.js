import * as types from './mutation-types'
export default ({
  [types.NEWSDATA](state, news) {
    state.data.news = news
  },
  [types.VIDEODATA](state, video) {
    state.data.video = video
  },
  [types.LIVEDATA](state, live) {
    state.data.live = live
  },
  [types.CLASSITYDATA](state, classify) {
    state.data.classify = classify
  },
  [types.TAKEDATA](state, take) {
    state.data.take = take
  },
  [types.MOREDATA](state, more) {
    state.data.more = more
  },
  [types.SWITCH](state) {
    state.sumSwitch.enterSwi = !state.sumSwitch.enterSwi
  },
  [types.HINT](state) {
    state.sumSwitch.hintSwi = !state.sumSwitch.hintSwi
  },
  [types.VERIFICATION](state) {
    state.sumSwitch.verifySwi = !state.sumSwitch.verifySwi
    state.sumSwitch.codeSwi = !state.sumSwitch.codeSwi
  },
  [types.VERIFYNUM](state) {
    let verNum = ''
    for (let i = 0; i < 4; i++) {
      verNum += Math.floor(Math.random() * 10)
    }
    state.user.num = parseInt(verNum)
  },
  [types.LOGGED](state) {
    state.user.log = !state.user.log
  },
  [types.UPLODE](state) {
    state.upload = !state.upload
  },
  [types.LIVEALTER](state) {
    state.sumSwitch.liveDetail = !state.sumSwitch.liveDetail
  },
  [types.LIVEVALUE](state, item) {
    state.liveValue = item
  },
  [types.UPSIBSCIBE](state) {
    state.sumSwitch.inSibscibe = !state.sumSwitch.inSibscibe
  }
})
