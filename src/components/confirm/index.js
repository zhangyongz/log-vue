import Confirm from './confirm.vue'

export default Confirm

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('confirm', Confirm)
}
