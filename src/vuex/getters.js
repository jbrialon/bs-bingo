// This getter is a function which just returns the count
// With ES6 you can also write it as:
// export const getCount = state => state.count

export function getWon ({ won }) {
  return won
}

export function getUser ({auth}) {
  return auth.user
}
