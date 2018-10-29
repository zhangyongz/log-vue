import Vue from 'vue'
import App from './App'
import router from './router'

// import LogVue from 'log-vue/src/index.js'
// import LogVue from 'log-vue'
// import 'log-vue/lib/log-vue.min.css'

// Vue.use(LogVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// console.log(LogVue)
