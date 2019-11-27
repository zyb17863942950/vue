import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import signin from '@/components/signin'
import signup from '@/components/signup'
import storeinfo from '@/components/storeinfo'
import add_storeinfo from '@/components/add_storeinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
		{
		  path: '/signin',
		  name: 'signin',
		  component: signin
		},
		{
		  path: '/signup',
		  name: 'signup',
		  component: signup
		},
		{
		  path: '/storeinfo',
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
