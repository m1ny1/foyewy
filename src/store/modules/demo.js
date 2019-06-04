// initial state
const state = {
  demoData: null
}

// getters
const getters = {}

// actions
const actions = {
  setDemoData ({ commit }, data) {
    commit('setDemoData', data)
  }
}

// mutations
const mutations = {
  setDemoData (state, data) {
    state.demoData = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
