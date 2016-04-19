<template lang="jade">
div
  div
  | row : {{getRow(0)}}
  div
  | col : {{getCol(0)}}
  h2 game
  table
    tr(v-for="x in config.row")
      td(v-for="y in config.column", @click.stop="selectItem(x, y)", :class="{'selected': getWordFromXY(x, y).selected }")
        {{getWordFromXY(x, y).label}}
  h2 values
  table
    tr(v-for="row in selectedItems", track-by="$index")
      td(v-for="col in row", :class="{'selected': col }", track-by="$index")
        {{col}}
</template>
<script>
(function () {
  'use strict'

  // var Vue = require('vue')
  // var _ = require('lodash')

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

      },
      won: function () {

      }
    },
    beforeCompile: function () {
      this.resetselectedItems()
    },
    methods: {
      getRow: function (idx) {
        return this.selectedItems.map(function (value, index) {
          return value[idx]
        })
      },
      getCol: function (idx) {
        return this.selectedItems[idx]
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
        // Vue.set(item, 'selected', true)
      }
    }
  }
})()
</script>
