import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

import Home from './components/home.vue'
import Game from './components/game.vue'
import Words from './components/words.vue'

import contants from './contants'

let firebase = contants.firebase
let config = {
  apiKey: 'AIzaSyB-3OQWyjv6A7zbwQZRGwBUqGHh8DQ9Yqw',
  authDomain: 'bingo-bullshit.firebaseapp.com',
  databaseURL: 'https://bingo-bullshit.firebaseio.com',
  storageBucket: 'bingo-bullshit.appspot.com'
}

firebase.initializeApp(config)

Vue.use(Router)
let router = new Router({
  hashbang: false,
  history: true
})

router.map({
  '/': {
    name: 'home',
    component: Home
  }
})
router.map({
  '/:name': {
    name: 'game',
    component: Game
  }
})
router.map({
  '/words': {
    name: 'words',
    component: Words
  }
})
router.start(App, '#app')
