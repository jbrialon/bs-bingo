import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import { getRowsWon, getColsWon, getDiagonalsWon } from '../utils/umatrix.js'

// Make vue aware of vuex
Vue.use(Vuex)

const state = {
  // When the app starts, count is set to 0
  datas: [],
  matrix: [],
  won: false,
  wonCols: [],
  wonRows: [],
  wonDiagonals: [[], []],
  auth: {
    user: null
  }
}

const mutations = {
  // A mutation recieves the current state as the first argument
  // You can make any modifications you want inside this function
  SET_DATAS (state, datas) {
    state.datas = datas
  },
  SET_MATRIX (state, matrix) {
    state.matrix = matrix
  },
  SET_ITEM (state, x, y, bool) {
    state.matrix[x].$set(y, bool)
  },
  COMPUTE_WON (state) {
    // WON COLS
    state.wonCols = getRowsWon(state.matrix)
    // WON ROWS
    state.wonRows = getColsWon(state.matrix)
    // WON DIAGONALS
    state.wonDiagonals = getDiagonalsWon(state.matrix)
    // WON
    state.won = state.wonRows.length > 0 || state.wonCols.length > 0 || _.flatten(state.wonDiagonals).length > 0
  },
  SIGN_IN (state, user) {
    state.auth.user = user
  },
  SIGN_OUT (state) {
    state.auth.user = null
  }

}

// We combine the intial state and the mutations to create a vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
