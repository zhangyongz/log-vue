import VDialog from './v-dialog.vue'

export default VDialog

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('v-dialog', VDialog)
}
