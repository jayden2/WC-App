// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import { store } from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

let config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_IDd
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
})

/* eslint-disable no-new */

