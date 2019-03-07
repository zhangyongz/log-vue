import CropperComponent from '../cropper'
import { mergeOptions } from '../../libs/plugin_helper'
import { uploadImgAction } from '@/components/cropper/utils'

let $vm

const plugin = {
  install (vue, options = {}) {
    const Cropper = vue.extend(CropperComponent)

    if (!$vm) {
      $vm = new Cropper({
        el: document.createElement('div'),
        propsData: {
          show: false
        }
      })
      document.body.appendChild($vm.$el)
    }

    const cropper = {
      show (options) {
        if (typeof options === 'object') {
          mergeOptions($vm, options)
        }

        uploadImgAction().then((bundelImg) => {
          $vm.img = bundelImg
          $vm.show = true

          $vm.$off('change')
          $vm.$off('backImg')

          $vm.$on('change', (value) => {
            if (!value) {
              $vm.show = false
            }
          })
          $vm.$on('backImg', (img) => {
            if ($vm.backImg) {
              $vm.backImg(img)
            }
          })
        })
      }
    }

    if (!vue.$log) {
      vue.$log = {
        cropper
      }
    } else {
      vue.$log.cropper = cropper
    }

    vue.mixin({
      created: function () {
        this.$log = vue.$log
      }
    })
  }
}

export default plugin
export const install = plugin.install

if (typeof window !== 'undefined' && window.Vue) {
  plugin.install(window.Vue)
}
