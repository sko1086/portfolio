import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import view from '@/components/board/view'
import allBoard from '@/components/board/allBoard'
import write from '@/components/board/write'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'allBoard',
      component: allBoard
    },
    {
      path: '/board/write',
      name: 'write',
      component: write
    },
    {
      path: '/board/view/:listNo',
      name: 'view',
      component: view
    }
  ]
})
