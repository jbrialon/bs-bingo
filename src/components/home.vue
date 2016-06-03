<template lang="jade">
.home
  p Create or join a room
  .join-game
    label {{host}}
    input(type="text", v-model="gameName")
    button(@click="join") Join / Create

</template>

<script>
  import Twodimensions from './twodimensions'

  export default {
    data () {
      return {
        gameName: '',
        host: window.location.href
      }
    },
    methods: {
      join () {
        this.$router.go({name: 'game', params: {name: this.gameName}})
      }
    },
    components: {
      Twodimensions
    }
  }
</script>

<style lang="scss">
.join-game {
  display: flex;
  align-items: baseline;
  label {
    flex: 1;
    padding-right: 15px;
  }
  input {
    flex: 2;
    padding-right: 15px;
  }
  button {
    flex: 1;
  }
}

</style>
