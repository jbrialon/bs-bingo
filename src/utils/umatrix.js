import _ from 'lodash'

/**
 * Utils for marix
 */

export function getRow (matrix, idx) {
  return matrix[idx]
}

export function getCol (matrix, idx) {
  return matrix.map(function (value) {
    return value[idx]
  })
}

export function getDiagonal (matrix, type) {
  var results = []
  var i
  if (type === 'TL2BR') {
    for (i = 0; i < matrix.length; i++) {
      results.push([i, i])
    }
  } else if (type === 'TR2BL') {
    for (i = 0; i < matrix.length; i++) {
      results.push([i, matrix.length - 1 - i])
    }
  }
  return results
}

export function getRowsWon (matrix) {
  var wonArr = []
  for (var i = 0; i < matrix.length; i++) {
    var result = _.every(getCol(matrix, i), function (bool) {
      return bool
    })
    if (result) {
      wonArr.push(i)
    }
  }
  return wonArr
}

export function getColsWon (matrix) {
  var wonArr = []
  for (var i = 0; i < matrix.length; i++) {
    var result = _.every(getRow(matrix, i), function (bool) {
      return bool
    })
    if (result) {
      wonArr.push(i)
    }
  }
  return wonArr
}

export function getDiagonalsWon (matrix) {
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
  return wonArr
}
