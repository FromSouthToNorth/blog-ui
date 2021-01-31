const state = {
  drawer: null
}

const mutations = {
  SET_DRAWER: (state, drawer) => {
    state.drawer = drawer
  }
}

const actions = {
  drawerSetting({ commit }, drawer) {
    commit('SET_DRAWER', drawer)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
