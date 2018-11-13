import VHeader from './v-header.vue'

export default VHeader

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('v-header', VHeader)
}
