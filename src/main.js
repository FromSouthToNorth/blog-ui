import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from '@/plugins/vuetify'
import router from './router'

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})

