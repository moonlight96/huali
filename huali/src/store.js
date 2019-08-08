import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show: 'block'
  },
  mutations: {
    setShow (state, data) {
      state.show = data
    }
  },
  getters: {
    getShow (state) {
      return state.show
    }
  }
  // actions: {
  //   commitShow:({commit},show)=>commit('setShow',show)
  // }
})
