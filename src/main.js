import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

import Home from './components/home.vue'
import Game from './components/game.vue'
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
router.start(App, '#app')
