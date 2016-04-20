<template lang="jade">
#app
  .center
    h1 bingo bullshit
    twodimensions(:words="words")
</template>

<script>
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
html,
body {
  position: relative;
  height: 100%;
  font-family: 'Roboto Condensed', sans-serif;
}

.center {
  width:100%;
  text-align: center;
}

table {
  border:1px solid #727272;
  border-collapse: collapse;
  width:50%;
  margin:auto;
}

td {
  border:1px solid #B6B6B6;
  width:20%;
  height:100px;
  vertical-align: middle;
  text-align: center;
  transition:background 200ms linear;

  &:hover {
    background:#B6B6B6;
    cursor:pointer;
  }

  &.selected {
    background:#00BCD4;
  }
}

</style>
