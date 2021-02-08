export default {
  namespaced: true,
  state: {
        name:'',
        password:''
  },
  mutations: {
    setParams(state, name, password){
      state.name = name
      state.password = password
    }
  },
  actions: {

  },
  modules: {
  }
}

