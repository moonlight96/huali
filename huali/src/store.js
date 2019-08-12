import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show: 'block',
    isLogin:''
  },
  mutations: {
    setShow (state, data) {
      state.show = data
    },
    setLogin(state,data){
      state.isLogin=data
    }
  },
  getters: {
    getShow (state) {
      return state.show
    },
    getLogin(state){
      return state.isLogin
    }
  }
  // actions: {
  //   commitShow:({commit},show)=>commit('setShow',show)
  // }
})
