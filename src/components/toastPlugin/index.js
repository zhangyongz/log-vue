import objectAssign from 'object-assign'
import ToastComponent from '../toast'
import { mergeOptions } from '../../libs/plugin_helper'

let $vm
let watcher

const plugin = {
  install (vue, pluginOptions = {}) {
    const Toast = vue.extend(ToastComponent)

    if (!$vm) {
      $vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const defaults = {}
    for (let i in $vm.$options.props) {
      if (i !== 'value') {
        defaults[i] = $vm.$options.props[i].default
      }
    }

    const toast = {
      show (options = {}) {
        // destroy watcher
        watcher && watcher()
        if (typeof options === 'string') {
          mergeOptions($vm, objectAssign({}, pluginOptions, { text: options }))
        } else if (typeof options === 'object') {
          mergeOptions($vm, objectAssign({}, pluginOptions, options))
        }
        $vm.show = true
      },
      text (text) {
        this.show({
          text
        })
      },
      hide () {
        $vm.show = false
      },
      isVisible () {
        return $vm.show
      }
    }

    // all Log's plugins are included in this.$log
    if (!vue.$log) {
      vue.$log = {
        toast
      }
    } else {
      vue.$log.toast = toast
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
