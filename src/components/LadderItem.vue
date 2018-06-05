<template>
  <tr>
    <th>{{ index + 1 }}</th>
    <td>{{ user }}</td>
    <td class="text-center">{{ getTotalGames }} ({{ selections.length }})</td>
    <td class="text-center">{{ getWins }}</td>
    <td class="text-center">{{ getLoses }}</td>
    <td class="text-center">{{ getWinPercentage }}%</td>
  </tr>
</template>

<script>
  import { db } from '../firebase';
  
  export default {
    name: 'LadderItem',
    props: ['selectedUser', 'winners', 'index'],
    data () {
      return {
        user: [],
        selections: [],
      }
    },
    created: function() {
      this.$bindAsArray('selections', db.ref(`selections/${this.selectedUser}/`));
      this.user = this.selectedUser.replace(/\*/g, '.');
    },
    computed: {
      getWins: function() {
        let won = 0;

        this.selections.forEach(selection => {
          this.winners.forEach(winner => {
            if (winner['.key'] === selection['.key'] && winner['.value'] === selection['.value']) won += 1;
          });
        });
        const selectedUser = this.selectedUser;
        this.$emit('winAmount', { selectedUser, won });
        return won;
      },
      getTotalGames: function() {
        let games = 0;

        this.selections.forEach(selection => {
          this.winners.forEach(winner => {
            if (winner['.key'] === selection['.key']) games += 1;
          });
        });
        return games;
      },
      getLoses: function() {
        return (this.getTotalGames - this.getWins);
      },
      getWinPercentage: function() {
        const percentage = Number((this.getWins / this.getTotalGames) * 100).toFixed(1);
        return (isNaN(percentage)) ? 0 : percentage;
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

