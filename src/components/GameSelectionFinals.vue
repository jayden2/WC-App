<template>
  <main>
    <nav>
      <div class="btn-group">
        <router-link class="btn btn-outline-primary" to="/dashboard/selections/round1" v-if="user">Round 1</router-link>
        <router-link class="btn btn-outline-primary" to="/dashboard/selections/round2" v-if="user">Round 2</router-link>
        <router-link class="btn btn-outline-primary" to="/dashboard/selections/round3" v-if="user">Round 3</router-link>
        <router-link class="btn btn-outline-primary" to="/dashboard/selections/finals" v-if="user">Finals</router-link>
      </div>
    </nav>
    <section v-if="round16">
      <header>
        <h2 class="title">Round of 16</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :email="user.email" :finals="true" :locked="locked" :winners="winners" :game="game" v-for="game in round16"></game-selection-item>
      </div>
    </section>
    <section v-if="quaterfinal">
      <header>
        <h2 class="title">Quater Finals</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :email="user.email" :finals="true" :locked="locked" :winners="winners" :game="game" v-for="game in quaterfinal"></game-selection-item>
      </div>
    </section>
    <section v-if="semifinal">
      <header>
        <h2 class="title">Semi Finals</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :email="user.email" :finals="true" :locked="locked" :winners="winners" :game="game" v-for="game in semifinal"></game-selection-item>
      </div>
    </section>
    <section v-if="thirdplace">
      <header>
        <h2 class="title">Third Place</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :email="user.email" :finals="true" :locked="locked" :winners="winners" :game="game" v-for="game in thirdplace"></game-selection-item>
      </div>
    </section>
    <section v-if="final">
      <header>
        <h2 class="title">Finals</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :email="user.email" :finals="true" :locked="locked" :winners="winners" :game="game" v-for="game in final"></game-selection-item>
      </div>
    </section>
  </main>
</template>

<script>
  import GameSelectionItem from '@/components/GameSelectionItem';
  import { db } from '../firebase';

  export default {
    name: 'GameSelectionFinals',
    components: {
      GameSelectionItem
    },
    data: function() {
      return {
        round16: [],
        quaterfinal: [],
        semifinal: [],
        thirdplace: [],
        final: [],
        winners: [],
      }
    },
    firebase: {
      round16: db.ref('games/round_16'),
      // quaterfinal: db.ref('games/quarter_finals'),
      // semifinal: db.ref('games/semi_finals'),
      // thirdplace: db.ref('games/third_place'),
      // final: db.ref('games/finals'),
      winners: db.ref('winners'),
      locked: db.ref('locked'),
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
    padding-bottom: 15px;
  }
  .router-link-exact-active {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }
  nav {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
</style>