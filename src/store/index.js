import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import settings from './modules/settings'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    settings,
    permission
  },
  getters
})

export default store
