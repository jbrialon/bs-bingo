<template lang="jade">
div
  .container
    h1 bingo bullshit
    Debug
    Won(v-if="getWon")
    router-view

</template>

<script>
import 'materialize-css/sass/ghpages-materialize.scss'
import _ from 'lodash'
import store from './vuex/store' // import the store we just created
import Debug from './components/debug'
import Won from './components/won'
import Twodimensions from './components/twodimensions'
import { setMatrix, setDatas } from './vuex/actions'
import { getWon } from './vuex/getters'

export default {
  data: function () {
    return {
      words: [
        {
          index: 1,
          label: 'entonnoir'
        },
        {
          index: 2,
          label: 'ventilé'
        },
        {
          index: 3,
          label: 'matrice'
        },
        {
          index: 4,
          label: 'process'
        },
        {
          index: 5,
          label: 'deploiement'
        },
        {
          index: 6,
          label: 'patch'
        },
        {
          index: 7,
          label: 'effet de bord'
        },
        {
          index: 8,
          label: 'back end'
        },
        {
          index: 9,
          label: 'trad'
        },
        {
          index: 10,
          label: 'mobile'
        },
        {
          index: 11,
          label: 'desktop'
        },
        {
          index: 12,
          label: 'php'
        },
        {
          index: 13,
          label: 'sql'
        },
        {
          index: 14,
          label: 'redirection'
        },
        {
          index: 15,
          label: '301'
        },
        {
          index: 16,
          label: 'route'
        },
        {
          index: 17,
          label: 'progressive enhancement'
        },
        {
          index: 18,
          label: 'SEO'
        },
        {
          index: 19,
          label: 'captcha'
        },
        {
          index: 20,
          label: 'mapping'
        },
        {
          index: 21,
          label: 'mecanisme'
        },
        {
          index: 22,
          label: 'refactorise'
        },
        {
          index: 23,
          label: 'capitaliser'
        },
        {
          index: 24,
          label: 'contingence'
        },
        {
          index: 25,
          label: 'joker'
        },
        {
          index: 26,
          label: 'json'
        }
      ]
    }
  },
  components: {
    Twodimensions,
    Debug,
    Won
  },
  beforeCompile: function () {
    this.setDatas(_.shuffle(this.words)) // TODO shuffle should be server side
    this.setMatrix(5)
  },
  vuex: {
    getters: {
      getWon
    },
    actions: {
      setMatrix,
      setDatas
    }
  },
  store // make this and all child components aware of the new store
}
</script>

<style lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  text-align: center;
}

h1 {
  font-weight: 600;
  text-transform: uppercase;
}

</style>
