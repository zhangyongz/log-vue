const state = {
  direction: ''
}

const getters = {}

const actions = {}

const mutations = {
  updateDirection (state, direction) {
    state.direction = direction
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
