<template lang="jade">
.home
  Twodimensions

</template>

<script>
  import Twodimensions from './twodimensions'
  export default {
    data: function () {
      return {
        game: {}
      }
    },
    route: {
      activate: function (transition) {
        transition.next()
      }
    },
    components: {
      Twodimensions
    }
  }
</script>

<style lang="scss">


</style>
