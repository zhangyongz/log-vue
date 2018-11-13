import ConfirmComponent from '../confirm'
import { mergeOptions } from '../../libs/plugin_helper'

let $vm

const plugin = {
  install (vue, options = {}) {
    const Confirm = vue.extend(ConfirmComponent)

    if (!$vm) {
      $vm = new Confirm({
        el: document.createElement('div'),
        propsData: {
          title: ''
        }
      })
      document.body.appendChild($vm.$el)
    }

    const confirm = {
      show (options) {
        if (typeof options === 'object') {
          mergeOptions($vm, options)
        }
        if (typeof options === 'object' && (options.onShow || options.onHide)) {
          options.onShow && options.onShow()
        }
        this.$watcher && this.$watcher()
        this.$watcher = $vm.$watch('showValue', (val) => {
          if (!val && options && options.onHide) {
            options.onHide()
          }
        })

        $vm.$off('on-cancel')
        $vm.$off('on-confirm')

        $vm.$on('on-cancel', () => {
          options && options.onCancel && options.onCancel()
        })
        $vm.$on('on-confirm', () => {
          options && options.onConfirm && options.onConfirm()
        })
        $vm.showValue = true
      },
      hide () {
        $vm.showValue = false
      },
      isVisible () {
        return $vm.showValue
      }
    }

    if (!vue.$log) {
      vue.$log = {
        confirm
      }
    } else {
      vue.$log.confirm = confirm
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
