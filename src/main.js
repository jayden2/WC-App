// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import Vuex from 'vuex'
import Firebase from 'firebase'
import Vue2Filters from 'vue2-filters'

import App from './App'
import './firebase'
import router from './router'
import { store } from './store'

Vue.config.productionTip = false

Vue.use(VueFire)

Vue.use(Vue2Filters)

Firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
})

/* eslint-disable no-new */

