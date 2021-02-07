import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from '@/plugins/vuetify'
import router from './router'

import { parseTime } from '@/utils/hy'

Vue.prototype.parseTime = parseTime

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})

