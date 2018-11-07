import Group from './components/group'
import Cell from './components/cell'
import VHeader from './components/v-header'
import VDialog from './components/v-dialog'
import Alert from './components/alert'
import AlertPlugin from './components/alertPlugin'
import Confirm from './components/confirm'
import ConfirmPlugin from './components/confirmPlugin'
import Loading from './components/loading'

const components = {
  Group,
  Cell,
  VHeader,
  Alert,
  VDialog,
  Confirm,
  Loading
}

const plugins = {
  AlertPlugin,
  ConfirmPlugin
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  install.installed = true

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })

  Object.keys(plugins).forEach(key => {
    Vue.use(plugins[key])
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
