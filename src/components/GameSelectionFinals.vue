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
      <header class="header">
        <h2 class="title">Round of 16</h2>
        <p class="subheader">games worth 2 wins</p>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :email="user.email" :finals="true" :locked="locked" :winners="winners" :game="game" v-for="game in round16"></game-selection-item>
      </div>
    </section>
    <section v-if="quaterfinal">
      <header class="header">
        <h2 class="title">Quater Finals</h2>
        <p class="subheader">games worth 3 wins</p>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :email="user.email" :finals="true" :locked="locked" :winners="winners" :game="game" v-for="game in quaterfinal"></game-selection-item>
      </div>
    </section>
    <section v-if="semifinal">
      <header class="header">
        <h2 class="title">Semi Finals</h2>
        <p class="subheader">games worth 4 wins</p>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :email="user.email" :finals="true" :locked="locked" :winners="winners" :game="game" v-for="game in semifinal"></game-selection-item>
      </div>
    </section>
    <section v-if="thirdplace">
      <header class="header">
        <h2 class="title">Third Place</h2>
        <p class="subheader">game worth 4 wins</p>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :email="user.email" :finals="true" :locked="locked" :winners="winners" :game="game" v-for="game in thirdplace"></game-selection-item>
      </div>
    </section>
    <section v-if="final">
      <header class="header">
        <h2 class="title">Finals</h2>
        <p class="subheader">game worth 5 wins</p>
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
      quaterfinal: db.ref('games/quarter_finals'),
      semifinal: db.ref('games/semi_finals'),
      thirdplace: db.ref('games/third_place'),
      final: db.ref('games/finals'),
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
  .header {
    margin-top: 15px;
    text-align: center;
  }
  .title {
    font-weight: bold;
    margin-bottom: 0px;
  }
  .subheader {
    font-size: 0.85em;
    color: #838383;
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