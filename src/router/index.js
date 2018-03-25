import Vue from 'vue'
import Router from 'vue-router'

import firebase from 'firebase'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Ladder from '@/components/Ladder'
import GameSelection from '@/components/GameSelection'

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
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/ladder',
      name: 'Ladder',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/selections',
      name: 'GameSelection',
      component: Dashboard,
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
  else if (!requiresAuth && currentUser) next('dashboard')
  else next()
})

export default router;