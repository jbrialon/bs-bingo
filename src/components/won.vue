<template lang="jade">
.won-card
  .won-card__inner
    .card.blue.darken-1
      .card-content.white-text
        span.card-title Congratulations !
        p
          | Do you want to replay ? (todo)
      .card-action
        a(href='#') Yes
        a(href='#') No
</template>
<script>
module.exports = {
  name: 'Won',
  vuex: {
    getters: {
    }
  }
}
</script>
<style lang="scss" scoped>
.won-card {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    width: 300px;
  }
}

</style>
