import Group from './group.vue'

export default Group

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('group', Group)
}
