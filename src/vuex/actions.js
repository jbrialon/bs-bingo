import _ from 'lodash'

// An action will receive the store as the first argument.
// Since we are only interested in the dispatch (and optionally the state)
// We can pull those two parameters using the ES6 destructuring feature

export const setDatas = function ({ dispatch, state }, datas) {
  dispatch('SET_DATAS', datas)
}

export const setMatrix = function ({ dispatch, state }, side) {
  var arr = []
  for (var x = 0; x < side; x++) {
    arr[x] = []
    for (var y = 0; y < side; y++) {
      arr[x][y] = false
    }
  }
  dispatch('SET_MATRIX', arr)
}

export const isRowWon = function ({ state }, idx) {
  return state.wonRows.indexOf(idx) > -1
}

export const isColWon = function ({ state }, idx) {
  return state.wonCols.indexOf(idx) > -1
}

export const isDiagonalWon = function ({ state }, x, y) {
  return _.find(_.flatten(state.wonDiagonals), function (item) {
    return item[0] === x && item[1] === y
  })
}

export const toggleItem = function ({ dispatch, state }, x, y) {
  dispatch('SET_ITEM', x, y, !state.matrix[x][y])
  dispatch('COMPUTE_WON_ROWS')
  dispatch('COMPUTE_WON_COLS')
  dispatch('COMPUTE_WON_DIAGONALS')
}

export const getWordFromXY = function ({ state }, x, y) {
  return state.datas[x * state.matrixSide + y]
}
