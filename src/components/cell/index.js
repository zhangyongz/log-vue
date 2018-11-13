import Cell from './cell.vue'

export default Cell

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('cell', Cell)
}
