<template>
  <main>
    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">User</th>
          <th scope="col" class="text-center">Played(Selected)</th>
          <th scope="col" class="text-center" @click="sortByWins">Won</th>
          <th scope="col" class="text-center">Lost</th>
          <th scope="col" class="text-center">WP</th>
        </tr>
      </thead>
      <tbody>
        <ladder-item @winAmount="winAmountChild" :key="selectUser['.key']" :selectedUser="selectUser['.key']" :winners="winners" :index="index" v-for="(selectUser, index) in sortByWins"></ladder-item>
      </tbody>
    </table>
    <span :key="index" v-for="(selectUser, index) in selections">{{selectUser.wins}}</span>
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
      sortByWins() {
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
          }
        });
        console.log(this.selections);
        this.sortByWins;
      },
    },
  }
</script>

<style lang="scss" scoped>
  .table {
    margin-top: 15px;
  }
</style>