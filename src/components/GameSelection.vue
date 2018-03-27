<template>
  <section>
    <h2>Game Selections</h2>
    <div>
      <game-selection-item :key="game.key" :countries="countries" :game="game" v-for="game in stage1"></game-selection-item>
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
        countries: [],
        stadiums: [],
        games: []
      }
    },
    components: {
      GameSelectionItem
    },
    firebase: { 
      countries: db.ref('countries'),
      stadiums: db.ref('stadiums'),
      stage1: db.ref('games/stage_1'),
    },
    mounted: function() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>