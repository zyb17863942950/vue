import Vue from 'vue'
import Router from 'vue-router'
import storeinfo from '@/components/storeinfo'
import add_storeinfo from '@/components/add_storeinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'storeinfo',
      component: storeinfo
    },
    {
      path: '/add_storeinfo',
      name: 'add_storeinfo',
      component: add_storeinfo
    },
  ]
})
