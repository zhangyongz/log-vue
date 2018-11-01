import HelloJ from './components/hello-j'
import Group from './components/group'
import Cell from './components/cell'

const components = {
  HelloJ,
  Group,
  Cell
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
