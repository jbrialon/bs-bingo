import contants from '../contants'

var firebase = contants.firebase

export default {
  signIn () {
    var provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/plus.login')
    return firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        console.log('Login success ', result)
        return result.user
      })
      .catch(function (error) {
        console.log('Error: ', error)
      })
  },
  signOut () {
    return firebase.auth().signOut()
  }
}
