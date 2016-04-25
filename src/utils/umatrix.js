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
