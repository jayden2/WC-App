<template>
  <section>
    <h2>Game Selections</h2>
    <div>
      <ul>
        <li v-for="country in countries">{{ country }}</li>
      </ul>
      <game-selection-item></game-selection-item>
    </div>
  </section>
</template>

<script>
  import GameSelectionItem from '@/components/GameSelectionItem'
  import { db } from '../firebase'

  export default {
    name: 'GameSelection',
    data: function() {
      return {
        countries: []
      }
    },
    components: {
      GameSelectionItem
    },
    firebase: { 
      countries: db.ref('countries'),
      stadiums: db.ref('stadiums'),
      games: {
        source: db.ref('games'),
        asObject: true
      },
    },
    mounted: function() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>