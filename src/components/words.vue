<template lang="jade">
.words
  ul.list
    li(v-for="(index, word) in words")
      span.value(v-text="word.value")
      span.remove(@click="remove(index)") X
  .add
    input(type="text", v-model="newWord")
    button(@click="add") Add
</template>

<script>
  import constants from '../contants'

  var firebase = constants.firebase
  export default {
    data: function () {
      return {
        words: [],
        newWord: ''
      }
    },
    methods: {
      add () {
        firebase.database().ref('words').push({value: this.newWord})
        this.newWord = ''
      },
      remove (index) {
        console.log('REmove', index)
        firebase.database().ref('words/' + index).remove()
      }
    },
    route: {
      activate: function (transition) {
        var self = this
        var ref = firebase.database().ref('words')
        ref.on('value', function (snap) {
          console.log('snap val ', snap.val())
          self.words = snap.val()
        })
        transition.next()
      }
    }
  }
</script>

<style lang="scss">
  .add {
    //max-width: 500px;
    //display: flex;
    //align-items: baseline;


    input {
      //flex: 2;
      padding-right: 15px;
    }

    button {
      //flex: 1;
    }

  }
  li{
    span {
      padding: 10px;
    }
  }
  .remove {
    color: red;
    cursor: pointer;

  }


</style>
