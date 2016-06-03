<template lang="jade">
.home
  Twodimensions

</template>

<script>
  /*global fetch:true*/
  import Twodimensions from './twodimensions'
  import 'whatwg-fetch'
  export default {
    data: function () {
      return {
        game: {}
      }
    },
    route: {
      activate: function (transition) {
        var self = this
        console.log('fetching ', '/api/games?name=' + self.$route.params.name + '&limit=1')
        fetch('/api/games?code=' + self.$route.params.name + '&limit=1')
          .then(function (res) {
            return res.json()
          })
          .then(function (res) {
            if (res.length < 1) throw new Error('No game found')
            self.game = res[0]
            transition.next()
          })

          .catch(function (err) {
            console.log(err)
            // if not exist, create it
            return fetch('/api/games',
              {
                method: 'POST',
                body: JSON.stringify({code: self.$route.params.name})
              })
              .then(function (res) {
                return res.json
              })
              .then(function (g) {
                self.game = g
                transition.next()
              })
          })
      }
    },
    components: {
      Twodimensions
    }
  }
</script>

<style lang="scss">


</style>
