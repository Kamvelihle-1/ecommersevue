import { createStore } from 'vuex'

export default createStore({
  state: {
    prods:[]
  },
  getters: {
  },
  mutations: {
    async fetchData(state){
      fetch('https://smasherk.github.io/vueJSON/vuejson.json')
      .then(response => response.json())
      .then(data => {
        state.prods = data.productsList
      })
     }
  },
  actions: { 
    getProducts(context){
      context.commit('fetchData')
    }
  },
  modules: {
  }
})
