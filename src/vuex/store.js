import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import { getRow, getCol, getDiagonal } from '../utils/umatrix.js'

// Make vue aware of vuex
Vue.use(Vuex)

const state = {
  // When the app starts, count is set to 0
  datas: [],
  matrix: [],
  matrixSide: 0,
  wonCols: [],
  wonRows: [],
  wonDiagonals: [[], []]
}

const mutations = {
  // A mutation recieves the current state as the first argument
  // You can make any modifications you want inside this function
  SET_DATAS (state, datas) {
    state.datas = datas
  },
  SET_MATRIX (state, matrix) {
    state.matrix = matrix
    state.matrixSide = matrix.length
  },
  SET_ITEM (state, x, y, bool) {
    state.matrix[x].$set(y, bool)
  },
  COMPUTE_WON_COLS ({ matrixSide, matrix, wonCols }) {
    var wonArr = []
    for (var i = 0; i < matrixSide; i++) {
      var result = _.every(getCol(matrix, i), function (bool) {
        return bool
      })
      if (result) {
        wonArr.push(i)
      }
    }
    state.wonCols = wonArr
  },
  COMPUTE_WON_ROWS  ({ matrixSide, matrix, wonRows }) {
    var wonArr = []
    for (var i = 0; i < matrixSide; i++) {
      var result = _.every(getRow(matrix, i), function (bool) {
        return bool
      })
      if (result) {
        wonArr.push(i)
      }
    }
    state.wonRows = wonArr
  },
  COMPUTE_WON_DIAGONALS ({ matrix, wonDiagonals }) {
    var wonArr = [[], []]
    var diagonal = _.every(getDiagonal(matrix, 'TL2BR'), function (item) {
      return matrix[item[0]][item[1]]
    })
    var diagonalInvert = _.every(getDiagonal(matrix, 'TR2BL'), function (item) {
      return matrix[item[0]][item[1]]
    })
    if (diagonal) {
      wonArr[0] = getDiagonal(matrix, 'TL2BR')
    }
    if (diagonalInvert) {
      wonArr[1] = getDiagonal(matrix, 'TR2BL')
    }
    state.wonDiagonals = wonArr
  }
}

// We combine the intial state and the mutations to create a vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
