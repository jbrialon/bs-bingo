<template lang="jade">
div
  #toast-container
    div.toast
      | won : {{won}}
    div.toast
      | row : {{wonRows | json}}
    div.toast
      | col : {{wonCols | json}}
    div.toast
      | diagonal : {{wonDiagonals | json}}
  .won-card(v-if="won")
    .won-card__inner
      .card.blue.darken-1
        .card-content.white-text
          span.card-title Congratulations !
          p
            | Do you want to replay ? (todo)
        .card-action
          a(href='#') Yes
          a(href='#') No
  table.centered
    tr(v-for="(x, row) in selectedItems", track-by="$index")
      td(v-for="(y, col) in row", :class="{ 'selected': col, 'blue darken-1': col, 'blue darken-4': isColWon(y) || isRowWon(x) || isDiagonalWon(x, y) }", @click.stop="selectItem(x, y)", track-by="$index")
        .inner
          .label(v-text="getWordFromXY(x, y).label")
</template>
<script>
import _ from 'lodash'

const TL2BR = 'TL2BR'
const TR2BL = 'TR2BL'

module.exports = {
  name: 'TwoDimensionsArray',
  // Options / Data
  data () {
    return {
      config: {
        side: 5
      },
      selectedItems: []
    }
  },
  props: ['words'],
  computed: {
    wonCols: function () {
      var wonCols = []
      for (var i = 0; i < this.config.side; i++) {
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
      for (var i = 0; i < this.config.side; i++) {
        var result = _.every(this.getRow(i), function (bool) {
          return bool
        })
        if (result) {
          wonRows.push(i)
        }
      }
      return wonRows
    },
    wonDiagonals: function () {
      var wonDiagonals = [[], []]
      var that = this
      var diagonal = _.every(this.getDiagonal(TL2BR), function (item) {
        return that.selectedItems[item[0]][item[1]]
      })
      var diagonalInvert = _.every(this.getDiagonal(TR2BL), function (item) {
        return that.selectedItems[item[0]][item[1]]
      })
      if (diagonal) {
        wonDiagonals[0] = this.getDiagonal(TL2BR)
      }
      if (diagonalInvert) {
        wonDiagonals[1] = this.getDiagonal(TR2BL)
      }
      return wonDiagonals
    },
    won: function () {
      return this.wonRows.length > 0 || this.wonCols.length > 0 || _.flatten(this.wonDiagonals).length > 0
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
    getDiagonal: function (type) {
      var results = []
      var i
      if (type === TL2BR) {
        for (i = 0; i < this.config.side; i++) {
          results.push([i, i])
        }
      } else if (type === TR2BL) {
        for (i = 0; i < this.config.side; i++) {
          results.push([i, this.config.side - 1 - i])
        }
      }
      return results
    },
    isRowWon: function (idx) {
      return this.wonRows.indexOf(idx) > -1
    },
    isColWon: function (idx) {
      return this.wonCols.indexOf(idx) > -1
    },
    isDiagonalWon: function (x, y) {
      return _.find(_.flatten(this.wonDiagonals), function (item) {
        return item[0] === x && item[1] === y
      })
    },
    resetselectedItems: function () {
      var arr = []
      for (var x = 0; x < this.config.side; x++) {
        arr[x] = []
        for (var y = 0; y < this.config.side; y++) {
          arr[x][y] = false
        }
      }
      this.$set('selectedItems', arr)
    },
    getWordFromXY: function (x, y) {
      return this.words[x * this.config.side + y]
    },
    selectItem: function (x, y) {
      this.$set('selectedItems[' + x + '][' + y + ']', !this.selectedItems[x][y])
    }
  }
}
</script>
