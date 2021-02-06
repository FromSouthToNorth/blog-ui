const state = {
  drawer: null,
  eChartsDrawer: null
}

const mutations = {
  SET_DRAWER: (state, drawer) => {
    state.drawer = drawer
  },
  SET_ECharts_DRAWER: (state, eChartsDrawer) => {
    state.eChartsDrawer = eChartsDrawer
  }
}

const actions = {
  drawerSetting({ commit }, drawer) {
    commit('SET_DRAWER', drawer)
  },
  eDrawerSetting({ commit }, eChartsDrawer) {
    commit('SET_ECharts_DRAWER', eChartsDrawer)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
