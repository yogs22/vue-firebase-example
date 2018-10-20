import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import NProgress from 'nprogress';

import HelloWorld from '@/components/HelloWorld'
import ListItem from '@/components/ListItem'
import AddItem from '@/components/AddItem'
import EditItem from '@/components/EditItem'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

import '../../node_modules/nprogress/nprogress.css'

Vue.use(Router)

let router = new Router({
  routes: [
  	{
  		path: '*',
  		redirect: '/login'
  	},
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
    	path: '/hello',
    	name: 'HelloWorld',
    	component: HelloWorld,
    	meta: {
    		requiresAuth: true
    	}
    },
    {
      path: '/list-item',
      name: 'ListItem',
      component: ListItem,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add-item',
      name: 'AddItem',
      component: AddItem,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit-item',
      name: 'EditItem',
      component: EditItem,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('hello')
  else next()
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router