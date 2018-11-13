import Toast from './toast'

export default Toast

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('toast', Toast)
}
