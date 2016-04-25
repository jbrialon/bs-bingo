import _ from 'lodash'

// This getter is a function which just returns the count
// With ES6 you can also write it as:
// export const getCount = state => state.count

export function getWon ({ wonRows, wonCols, wonDiagonals }) {
  return wonRows.length > 0 || wonCols.length > 0 || _.flatten(wonDiagonals).length > 0
}
