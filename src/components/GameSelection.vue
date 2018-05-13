<template>
  <main>
    <section v-if="round1">
      <header>
        <h2 class="title">Round 1</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :uid="user.uid" :countries="countries" :stadiums="stadiums" :game="game" v-for="game in round1"></game-selection-item>
      </div>
    </section>
    <section v-if="round2">
      <header>
        <h2 class="title">Round 2</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :uid="user.uid" :countries="countries" :stadiums="stadiums" :game="game" v-for="game in round2"></game-selection-item>
      </div>
    </section>
    <section v-if="round3">
      <header>
        <h2 class="title">Round 3</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :uid="user.uid" :countries="countries" :stadiums="stadiums" :game="game" v-for="game in round3"></game-selection-item>
      </div>
    </section>
    <section v-if="round16">
      <header>
        <h2 class="title">Round of 16</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :uid="user.uid" :countries="countries" :stadiums="stadiums" :game="game" v-for="game in round16"></game-selection-item>
      </div>
    </section>
    <section v-if="quaterfinal">
      <header>
        <h2 class="title">Quater Finals</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :uid="user.uid" :countries="countries" :stadiums="stadiums" :game="game" v-for="game in quaterfinal"></game-selection-item>
      </div>
    </section>
    <section v-if="semifinal">
      <header>
        <h2 class="title">Semi Finals</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :uid="user.uid" :countries="countries" :stadiums="stadiums" :game="game" v-for="game in semifinal"></game-selection-item>
      </div>
    </section>
    <section v-if="thirdplace">
      <header>
        <h2 class="title">Third Place</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :uid="user.uid" :countries="countries" :stadiums="stadiums" :game="game" v-for="game in thirdplace"></game-selection-item>
      </div>
    </section>
    <section v-if="final">
      <header>
        <h2 class="title">Finals</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :uid="user.uid" :countries="countries" :stadiums="stadiums" :game="game" v-for="game in final"></game-selection-item>
      </div>
    </section>
  </main>
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
      round1: db.ref('games/stage_1'),
      round2: db.ref('games/stage_2'),
      round3: db.ref('games/stage_3'),
      round16: db.ref('games/stage_4'),
      quaterfinal: db.ref('games/stage_5'),
      semifinal: db.ref('games/stage_6'),
      thirdplace: db.ref('games/stage_7'),
      final: db.ref('games/stage_8'),
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
  .title {
    font-weight: bold;
    text-align: center;
    margin-top: 15px;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>