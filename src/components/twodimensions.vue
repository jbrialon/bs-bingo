<template lang="jade">
div
  table.centered
    tr(v-for="(x, row) in matrix", track-by="$index")
      td(v-for="(y, col) in row", :class="{ 'selected': col, 'blue darken-1': col, 'blue darken-4': isColWon(y) || isRowWon(x) || isDiagonalWon(x, y) }", @click="toggleItem(x, y)", track-by="$index")
        .inner
          .label(v-text="col")
            | {{y}}
</template>
<script>
import { isColWon, isRowWon, isDiagonalWon, getWordFromXY, toggleItem } from '../vuex/actions'

module.exports = {
  name: 'TwoDimensionsArray',
  vuex: {
    getters: {
      matrix: state => state.matrix
    },
    actions: {
      isColWon,
      isRowWon,
      isDiagonalWon,
      getWordFromXY,
      toggleItem
    }
  }
}
</script>
<style lang="scss" scoped>

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
</style>
