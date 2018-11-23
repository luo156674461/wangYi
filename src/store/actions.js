import * as types from './mutation-types'
export default ({
  async getLive({ state, commit }, axios) {
    state.isAjax = true
    let liveOne = await axios.get('/api/live1')
    let liveTwo = await axios.get('/api/live2')
    let liveThree = await axios.get('/api/live3')
    liveOne = JSON.parse(liveOne.data.text)
    liveTwo = JSON.parse(liveTwo.data.text)
    liveThree = JSON.parse(liveThree.data.text)
    let live = {
      liveOne,
      liveTwo,
      liveThree
    }
    commit(types.LIVEDATA, live)
    state.isAjax = false
  },
  async getClassify({ state, commit }, axios) {
    state.isAjax = true
    let classifyNav = await axios.get('/api/classifyNav')
    let classifyLiveOne = await axios.get('/api/classifyLive1')
    let classifyLiveTwo = await axios.get('/api/classifyLive2')
    classifyNav = JSON.parse(classifyNav.data.text)
    classifyLiveOne = classifyLiveOne.data
    classifyLiveTwo = classifyLiveTwo.data
    let classify = {
      classifyNav,
      classifyLiveOne,
      classifyLiveTwo
    }
    commit(types.CLASSITYDATA, classify)
    state.isAjax = false
  },
  async getTake({ state, commit }, axios) {
    let takeOne = await axios.get('/api/take1')
    let takeTwo = await axios.get('/api/take2')
    let takeThree = await axios.get('/api/take3')
    takeOne = JSON.parse(takeOne.data.text)
    takeTwo = takeTwo.data
    takeThree = takeThree.data
    let take = {
      takeOne,
      takeTwo,
      takeThree
    }
    console.log(takeOne)
    commit(types.TAKEDATA, take)
  },
  getNwes({ commit }, axios) {
    return new Promise((resolve, reject) => {
      axios.get('https://www.apiopen.top/journalismApi')
        .then((news) => {
          news = news.data.data
          console.log(news)
          commit(types.NEWSDATA, news)
          resolve()
        })
    })
  },
  getVideo({ commit }, axios) {
    return new Promise((resolve, reject) => {
      axios.get('http://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&size=20')
        .then((video) => {
          video = video.data
          let k = Object.getOwnPropertyNames(video)[0]
          video = video[k]
          commit(types.VIDEODATA, video)
          resolve()
        })
    })
  },
  getMore({ commit }, axios) {
    return new Promise((resolve, reject) => {
      axios.get('/api/more')
        .then((more) => {
          more = JSON.parse(more.data.text)
          more = more.live_review
          commit(types.MOREDATA, more)
          resolve()
        })
    })
  }
})
