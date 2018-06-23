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
    <section v-if="round2">
      <header>
        <h2 class="title">Round 2</h2>
      </header>
      <div class="grid">
        <game-selection-item :key="game.key" :email="user.email" :finals="false" :locked="locked" :winners="winners" :game="game" v-for="game in round2"></game-selection-item>
      </div>
    </section>
  </main>
</template>

<script>
  import GameSelectionItem from '@/components/GameSelectionItem';
  import { db } from '../firebase';

  export default {
    name: 'GameSelectionRound2',
    components: {
      GameSelectionItem
    },
    data: function() {
      return {}
    },
    firebase: { 
      round2: db.ref('games/stage_2'),
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