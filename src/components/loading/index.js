import Loading from './loading.vue'

export default Loading

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('loading', Loading)
}
