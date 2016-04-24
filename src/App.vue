<template lang="jade">
#app
  .container
    h1 bingo bullshit
    twodimensions(:words="shuffledWords")
</template>

<script>
import _ from 'lodash'
import '!raw!sass!materialize-css/sass/ghpages-materialize.scss'

export default {
  data: function () {
    return {
      win: false,
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
    twodimensions: require('./components/twodimensions.vue')
  },
  computed: {
    shuffledWords: function () {
      return _.shuffle(this.words)
    }
  }
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

table {
  max-width: 768px;
  margin: 2em auto;
}

td {
  border:1px solid #B6B6B6;
  width:20%;
  height:100px;
  vertical-align: middle;
  text-align: center;
  transition:all 200ms linear;
  height: 0;
  padding: 0;
  padding-bottom: 20%;
  position: relative;

  &:hover {
    background:#90caf9;
    cursor:pointer;
    color: white;
  }

  &.selected {
    background:#00BCD4;
    color: white;
  }

  .inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label {
    text-transform: uppercase;
  }
}
tr.won td,
td.won {
  background:#000;
}

#toast-container {
  top: 10px;
  right: 10px;
  max-width: 300px;
}

.won-card {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    width: 300px;
  }
}

</style>
