import HelloJ from './components/hello-j'
import Group from './components/group'
import Cell from './components/cell'
import VHeader from './components/v-header'
import Alert from './components/alert'
import VDialog from './components/v-dialog'

const components = {
  HelloJ,
  Group,
  Cell,
  VHeader,
  Alert,
  VDialog
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  install.installed = true

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const Log = {
  version: process.env.VERSION,
  install
}

Object.keys(components).forEach(key => {
  Log[key] = components[key]
})

export default Log
