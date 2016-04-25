<template lang="jade">
div
  #toast-container
    div.toast
      | won : {{getWon}}
    div.toast
      | row : {{wonRows | json}}
    div.toast
      | col : {{wonCols | json}}
    div.toast
      | diagonal : {{wonDiagonals | json}}
</template>
<script>
import { getWon } from '../vuex/getters'
export default {
  vuex: {
    getters: {
      getWon,
      wonRows: state => state.wonRows,
      wonCols: state => state.wonCols,
      wonDiagonals: state => state.wonDiagonals
    },
    actions: {
    }
  }
}
</script>
<style lang="scss">
#toast-container {
  top: 10px;
  right: 10px;
  max-width: 300px;
  pointer-events: none;
}
</style>
