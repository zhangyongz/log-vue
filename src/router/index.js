import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import DemoList from '@/views/demo_list'
import GroupDemo from '@/views/group_demo'
import CellDemo from '@/views/cell_demo'
import VDialogDemo from '@/views/v_dialog_demo'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'demo_list',
      component: DemoList
    },
    {
      path: '/group_demo',
      name: 'group_demo',
      component: GroupDemo
    },
    {
      path: '/cell_demo',
      name: 'cell_demo',
      component: CellDemo
    },
    {
      path: '/v_dialog_demo',
      name: 'v_dialog_demo',
      component: VDialogDemo
    }
  ]
})

const history = window.sessionStorage
history.clear()
history.setItem('/', '0')

function setDirection (to, from, next) {
  window.scrollTo(0, 0)
  let historyCount = history.getItem('count') * 1 || 0
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) { // 进入的路由存在索引
    if (toIndex === '0' && fromIndex === '0') { // 第一次进入根路由
      store.commit('user/updateDirection', '')
    } else { // 删除当前路由索引
      store.commit('user/updateDirection', 'reverse')
      history.removeItem(from.path)
      --historyCount
      history.setItem('count', historyCount)
    }
  } else { // 进入的路由不存在索引就是forward
    ++historyCount
    history.setItem('count', historyCount)
    history.setItem(to.path, historyCount)
    // store.commit('user/updateDirection', 'forward')
    store.commit('user/updateDirection', 'forward')
  }
  next()
}

router.beforeEach((to, from, next) => {
  setDirection(to, from, next)
})

export default router
