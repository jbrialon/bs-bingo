<template lang="jade">
    #app
      .center
        h1 bingo bullshit
        table
          tr
            td(v-for="word in words | limitBy 5", v-html="word.label", @click="select(word.index, 1, $index)", :class="{'selected': isSelected(word.index) }")
          tr
            td(v-for="word in words | limitBy 5 5", v-html="word.label", @click="select(word.index, 2, $index)", :class="{'selected': isSelected(word.index) }")
          tr
            td(v-for="word in words | limitBy 5 10", v-html="word.label", @click="select(word.index, 3, $index)", :class="{'selected': isSelected(word.index) }")
        button.btn(@click="reset()", v-html="'reset'")
</template>

<script>
import _ from 'lodash'

export default {
  data: function () {
    return {
      win: false,
      config: {
        row: 5,
        column: 3
      },
      columnMatch: [],
      rowMatch: [],
      selected: [],
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
  methods: {
    select: function (index, row, column) {
      // manage selected state
      if (!_.includes(this.selected, index)) {
        this.selected.push(index)
      } else {
        var i = this.selected.indexOf(index)
        if (i !== -1) {
          this.selected.splice(i, 1)
        }
      }
      // calculate if win or not
      this.rowMatch.push(column)
      this.columnMatch.push(row)
    },
    isSelected: function (index) {
      if (_.includes(this.selected, index)) {
        return true
      } else {
        return false
      }
    },
    win: function () {

    },
    reset: function () {
      this.selected = []
      this.rowMatch = []
      this.columnMatch = []
    }
  },
  watch: {
    rowMatch: function () {
      var obj = { }
      for (var i = 0, j = this.rowMatch.length; i < j; i++) {
        obj[this.rowMatch[i]] = (obj[this.rowMatch[i]] || 0) + 1
      }

      if (obj['0'] !== undefined && obj['0'] === 3) {
        this.reset()
      } else if (obj['1'] !== undefined && obj['1'] === 3) {
        this.reset()
      } else if (obj['2'] !== undefined && obj['2'] === 3) {
        this.reset()
      } else if (obj['3'] !== undefined && obj['3'] === 3) {
        this.reset()
      } else if (obj['4'] !== undefined && obj['4'] === 3) {
        this.reset()
      }
    },
    columnMatch: function () {
      var obj = { }
      for (var i = 0, j = this.columnMatch.length; i < j; i++) {
        obj[this.columnMatch[i]] = (obj[this.columnMatch[i]] || 0) + 1
      }

      if (obj['0'] !== undefined && obj['0'] === 5) {
        this.reset()
      } else if (obj['1'] !== undefined && obj['1'] === 5) {
        this.reset()
      } else if (obj['2'] !== undefined && obj['2'] === 5) {
        this.reset()
      }
    }
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
  position: absolute;
  width:100%;
  text-align: center;
  top:40%;
  left:50%;
  transform:translate(-50%, -50%);
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
