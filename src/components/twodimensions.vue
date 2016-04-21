<template lang="jade">
div
  div
  | won : {{won}}
  div
  | row : {{wonRows}}
  div
  | col : {{wonCols}}
  table.centered
    tr(v-for="(x, row) in selectedItems", track-by="$index")
      td(v-for="(y, col) in row", :class="{ 'selected': col, 'blue darken-1': col, 'blue darken-4': isColWon(y) || isRowWon(x) }", @click.stop="selectItem(x, y)", track-by="$index")
        | {{getWordFromXY(x, y).label}}
</template>
<script>
import _ from 'lodash'

module.exports = {
  name: 'Set-name-here',
  // Options / Data
  data () {
    return {
      config: {
        row: 5,
        column: 3
      },
      selectedItems: []
    }
  },
  props: ['words'],
  computed: {
    wonCols: function () {
      var wonCols = []
      for (var i = 0; i < this.config.column; i++) {
        var result = _.every(this.getCol(i), function (bool) {
          return bool
        })
        if (result) {
          wonCols.push(i)
        }
      }
      return wonCols
    },
    wonRows: function () {
      var wonRows = []
      for (var i = 0; i < this.config.row; i++) {
        var result = _.every(this.getRow(i), function (bool) {
          return bool
        })
        if (result) {
          wonRows.push(i)
        }
      }
      return wonRows
    },
    won: function () {
      return this.wonRows.length > 0 || this.wonCols.length > 0
    }
  },
  beforeCompile: function () {
    this.resetselectedItems()
  },
  methods: {
    getRow: function (idx) {
      return this.selectedItems[idx]
    },
    getCol: function (idx) {
      return this.selectedItems.map(function (value, index) {
        return value[idx]
      })
    },
    isRowWon: function (idx) {
      return this.wonRows.indexOf(idx) > -1
    },
    isColWon: function (idx) {
      return this.wonCols.indexOf(idx) > -1
    },
    resetselectedItems: function () {
      var arr = []
      for (var x = 0; x < this.config.row; x++) {
        arr[x] = []
        for (var y = 0; y < this.config.column; y++) {
          arr[x][y] = false
        }
      }
      this.$set('selectedItems', arr)
    },
    getWordFromXY: function (x, y) {
      return this.words[x + y]
    },
    selectItem: function (x, y) {
      this.$set('selectedItems[' + x + '][' + y + ']', !this.selectedItems[x][y])
    }
  }
}
</script>
