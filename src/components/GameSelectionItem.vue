<template>
  <div>
    <p>Game: {{ game['.key'] }}</p>
    <p>Date: {{ game.date }} {{ game.time }}</p>
    <p>Location: {{ game.place }}</p>
    <p>Group: {{ game.group }}</p>
    <span>{{ country_1 }}</span>
    <span>Draw</span>
    <span>{{ country_2 }}</span>
  </div>
</template>

<script>
  export default {
    name: 'GameSelectionItem',
    props: ['countries', 'game'],
    data () {
      return {
        country_1: this.countries[this.game.country_1 -1]['.value'],
        country_2: this.countries[this.game.country_2 -1]['.value'],
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

