import Alert from './alert.vue'

export default Alert

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('alert', Alert)
}
