const state = {
  drawer: null,
  eChartsDrawer: null,
  loading: false
}

const mutations = {
  SET_DRAWER: (state, drawer) => {
    state.drawer = drawer
  },
  SET_ECharts_DRAWER: (state, eChartsDrawer) => {
    state.eChartsDrawer = eChartsDrawer
  },
  SET_LOADING: (state, loading) => {
    state.loading = loading
  }
}

const actions = {
  drawerSetting({ commit }, drawer) {
    commit('SET_DRAWER', drawer)
  },
  eDrawerSetting({ commit }, eChartsDrawer) {
    commit('SET_ECharts_DRAWER', eChartsDrawer)
  },
  loadingSetting({ commit }, loading) {
    commit('SET_LOADING', loading)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
