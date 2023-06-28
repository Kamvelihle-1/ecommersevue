import { createStore } from 'vuex'

export default createStore({
  state: {
    prods:fetch('https://smasherk.github.io/vueJSON/vuejson.json')
  },
  getters: {
  },
  mutations: {
  },
  actions: { 
  },
  modules: {
  }
})
