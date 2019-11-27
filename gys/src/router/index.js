import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import signin from '@/components/signin'
import signup from '@/components/signup'

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
  ]
})
