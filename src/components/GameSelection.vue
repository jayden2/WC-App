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
      return {}
    },
    firebase: { 
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