import LoadingComponent from '../loading'
import { mergeOptions } from '../../libs/plugin_helper'

let $vm
let watcher

const plugin = {
  install (vue, options) {
    const Loading = vue.extend(LoadingComponent)

    if (!$vm) {
      $vm = new Loading({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const loading = {
      show (options = {}) {
        // destroy watcher
        watcher && watcher()
        if (typeof options === 'string') {
          $vm.text = options
        } else if (typeof options === 'object') {
          mergeOptions($vm, options)
        }
        $vm.show = true
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
        loading
      }
    } else {
      vue.$log.loading = loading
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
