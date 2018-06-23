<template>
  <main>
    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col"><a href="#" @click="sortByName">User</a></th>
          <th scope="col" class="text-center">Played(Selected)</th>
          <th scope="col" class="text-center"><a href="#" @click="sortByPoints">Won</a></th>
          <th scope="col" class="text-center"><a href="#" @click="sortByLost">Lost</a></th>
          <th scope="col" class="text-center">WP</th>
          <!-- <th scope="col" class="text-center"><a href="#" @click="sortByPoints">Total Points</a></th> -->
        </tr>
      </thead>
      <tbody :class="sortType">
        <ladder-item @pointsAmount="pointsAmountChild" @winAmount="winAmountChild" :key="selectUser['.key']" :selectedUser="selectUser['.key']" :winners="winners" :index="index" v-for="(selectUser, index) in basicSelection"></ladder-item>
      </tbody>
    </table>
    <button v-if="sortType == 'wins'" class="christian-button btn" @click="sortByChristian">c</button>
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
      pointsAmountChild: function(value) {
        this.selections.forEach(selection => {
          if (selection['.key'] === value.selectedUser) {
            selection['points'] = value.won;
          }
        });
      },
      winAmountChild: function(value) {
        this.selections.forEach(selection => {
          if (selection['.key'] === value.selectedUser) {
            selection['wins'] = value.won;
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
      sortByPoints: function() {
        this.selections.sort(function(a, b) {
          return b.points - a.points;
        });
        this.sortType = 'wins';
      },
      sortByLost: function() {
        this.selections.sort(function(a, b) {
          return a.wins - b.wins;
        });
        this.sortType = 'lost';
      },
      sortByChristian: function() {
        this.sortType = 'wins';

        document.querySelector('tr:last-child > td:nth-child(3)').textContent = '64(64)';
        document.querySelector('tr:last-child > td:nth-child(4)').textContent = '64';
        document.querySelector('tr:last-child > td:nth-child(5)').textContent = '0';
        document.querySelector('tr:last-child > td:nth-child(6)').textContent = '100%';
        document.querySelector('.title').textContent = 'Christian\'s World Cup 2018';
        
        this.selections = [this.selections[8]];
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
  tbody {
    .table td, .table th {
      border-top: none;
    }

    &.wins {
      tr:nth-child(1) {
        font-weight: bold;
        background-color: #ffd700 !important;
      }
      tr:nth-child(2) {
        font-weight: bold;
        background-color: #c0c0c0 !important;
      }
      tr:nth-child(3) {
        font-weight: bold;
        background-color: #cd7f32 !important;
      }
    }
    &.lost {
      tr:nth-child(1) {
        font-weight: bold;
        background-color: #ff0000 !important;
      }
      tr:nth-child(2) {
        font-weight: bold;
        background-color: #ff5656 !important;
      }
      tr:nth-child(3) {
        font-weight: bold;
        background-color: #fd9090 !important;
      }
    }
  }
  a {
    color: #fff;
    &:hover {
      color: #007bff;
    }
  }
  .christian-button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  @media screen and (max-width: 768px) {
    .table {
      display: block;
      overflow-x: scroll;
    }
  }
</style>