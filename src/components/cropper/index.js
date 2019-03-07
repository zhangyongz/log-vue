import Cropper from './cropper.vue'

export default Cropper

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('cropper', Cropper)
}
