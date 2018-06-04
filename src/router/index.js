import Vue from 'vue'
import Router from 'vue-router'

import firebase from 'firebase'
import SelectionDashboard from '@/components/SelectionDashboard'
import LadderDashboard from '@/components/LadderDashboard'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Ladder from '@/components/Ladder'
import GameSelection from '@/components/GameSelection'
import GameSelectionRound1 from '@/components/GameSelectionRound1'
import GameSelectionRound2 from '@/components/GameSelectionRound2'
import GameSelectionRound3 from '@/components/GameSelectionRound3'
import GameSelectionFinals from '@/components/GameSelectionFinals'

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
      component: SelectionDashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/ladder',
      name: 'Ladder',
      component: LadderDashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/selections',
      name: 'GameSelection',
      component: SelectionDashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/selections/round1',
      name: 'GameSelectionRound1',
      component: GameSelectionRound1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/selections/round2',
      name: 'GameSelectionRound2',
      component: GameSelectionRound2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/selections/round3',
      name: 'GameSelectionRound3',
      component: GameSelectionRound3,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/selections/finals',
      name: 'GameSelectionFinals',
      component: GameSelectionFinals,
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