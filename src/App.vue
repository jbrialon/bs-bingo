<template lang="jade">
#app
  .container
    h1 bingo bullshit
    twodimensions(:words="words")
</template>

<script>
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
          label: 'entonnoir'
        },
        {
          index: 20,
          label: 'entonnoir'
        }
      ]
    }
  },
  components: {
    twodimensions: require('./components/twodimensions.vue')
  }
}
</script>

<style lang="scss">

h1 {
  font-weight: 600;
  text-transform: uppercase;
}

td {
  border:1px solid #B6B6B6;
  width:20%;
  height:100px;
  vertical-align: middle;
  text-align: center;
  transition:all 200ms linear;

  &:hover {
    background:#90caf9;
    cursor:pointer;
    color: white;
  }

  &.selected {
    background:#00BCD4;
    color: white;
  }
}
tr.won td,
td.won {
  background:#000;
}

</style>
