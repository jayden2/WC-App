<template>
  <section>
    <h2 class="h2">Game Selections</h2>
    <div>
      <game-selection-item :key="game.key" :uid="user.uid" :countries="countries" :stadiums="stadiums" :game="game" v-for="game in stage1"></game-selection-item>
    </div>
  </section>
</template>

<script>
  import GameSelectionItem from '@/components/GameSelectionItem';
  import { db } from '../firebase';

  export default {
    name: 'GameSelection',
    components: {
      GameSelectionItem
    },
    data: function() {
      return {
        countries: [],
        stadiums: [],
        games: [],
      }
    },
    firebase: { 
      countries: db.ref('countries'),
      stadiums: db.ref('stadiums'),
      stage1: db.ref('games/stage_1'),
    },
    computed: {
      user() {
        return this.$store.getters.getUser;
      }
    },
    mounted: function() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>