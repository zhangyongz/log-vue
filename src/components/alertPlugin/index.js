import { createVM, show, hide } from './util'

let $vm

const plugin = {
  install (Vue) {
    if (!$vm) {
      $vm = createVM(Vue)
    }

    const alert = {
      show (options = {}) {
        return show.call(this, $vm, options)
      },
      hide () {
        return hide.call(this, $vm)
      },
      isVisible () {
        return $vm.showValue
      }
    }

    if (!Vue.$log) {
      Vue.$log = {
        alert
      }
    } else {
      Vue.$log.alert = alert
    }

    Vue.mixin({
      created: function () {
        this.$log = Vue.$log
      }
    })
  }
}

export default plugin
export const install = plugin.install

if (typeof window !== 'undefined' && window.Vue) {
  plugin.install(window.Vue)
}
