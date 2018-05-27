<template>
  <main>
    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col"><a href="#" @click="sortByName">User</a></th>
          <th scope="col" class="text-center">Played(Selected)</th>
          <th scope="col" class="text-center"><a href="#" @click="sortByWins">Won</a></th>
          <th scope="col" class="text-center"><a href="#" @click="sortByLost">Lost</a></th>
          <th scope="col" class="text-center">WP</th>
        </tr>
      </thead>
      <tbody>
        <ladder-item @winAmount="winAmountChild" :key="selectUser['.key']" :selectedUser="selectUser['.key']" :winners="winners" :index="index" v-for="(selectUser, index) in basicSelection"></ladder-item>
      </tbody>
    </table>
  </main>
</template>

<script>
  import LadderItem from '@/components/LadderItem'
  import { db } from '../firebase';

  export default {
    name: 'Ladder',
    components: {
      LadderItem
    },
    data: function() {
      return {
        sortType: 'aplhabetical',
      }
    },
    firebase: { 
      selections: db.ref('selections'),
      winners: db.ref('winners'),
    },
    computed: {
      user() {
        return this.$store.getters.getUser;
      },
      basicSelection() {
        let selections = []
        this.selections.forEach(selection => {
          
          selections.push({ '.key': selection['.key'], 'wins': 0 })
        });
        return selections;
      }
    },
    mounted: function() {
      return {
      }
    },
    methods: {
      winAmountChild: function(value) {
        this.selections.forEach(selection => {
          if (selection['.key'] === value.selectedUser) {
            selection['wins'] = value.won;
            // selection['winPercentage'] = value.winPercentage;
          }
        });
      },
      sortByName: function() {
        this.selections.sort(function(a, b) {
          return b['.key'] < a['.key'];
        });
        this.sortType = 'aplhabetical';
      },
      sortByWins: function() {
        this.selections.sort(function(a, b) {
          return b.wins - a.wins;
        });
        this.sortType = 'wins';
      },
      sortByLost: function() {
        this.selections.sort(function(a, b) {
          return a.wins - b.wins;
        });
        this.sortType = 'lost';
      },
      sortByWinPercentage: function() {
        this.selections.sort(function(a, b) {
          return b.winPercentage - a.winPercentage;
        });
      },
    },
  }
</script>

<style lang="scss" scoped>
  .table {
    margin-top: 15px;
  }
  a {
    color: #fff;
    &:hover {
      color: #007bff;
    }
  }
</style>