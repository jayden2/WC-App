<template>
  <div class="game-card">
    <div class="header" :class="{ selected: selected }">
      <h5 class="game">G{{ game['.key'] }}: {{ country_1 }} vs {{ country_2 }}</h5>
    </div>
    <div class="game-card-body">
      <div class="game-info">
        <div>
          <p class="group">Group {{ game.group }}</p>
          <p class="datetime">{{ game.date }}</p>
        </div>
        <div>
          <p class="stadium">{{ place.stadium }}</p>
          <p class="location">{{ place.location }}</p>
        </div>
      </div>
      <div class="game-picker">
        <p v-if="selected" class="selected-item">Selected {{ selected }}</p> 
        <div class="btn-group" v-if="!selected">
          <button type="button" class="btn btn-primary" @click="selectCountry(country_1)">{{ country_1 }}</button>
          <button type="button" class="btn btn-primary draw" @click="selectCountry('draw')">Draw</button>
          <button type="button" class="btn btn-primary" @click="selectCountry(country_2)">{{ country_2 }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import { db } from '../firebase';

  export default {
    name: 'GameSelectionItem',
    props: ['countries','game', 'stadiums', 'email'],
    data () {
      return {
        country_1: this.countries[this.game.country_1 -1]['.value'],
        country_2: this.countries[this.game.country_2 -1]['.value'],
        place: this.stadiums[this.game.place],
        selected: null,
        selection: null,
        gameId: this.game['.key'],
      }
    },
    methods: {
      addSelection: function() {
        let obj = {};
        obj[this.game['.key']] = this.selected;
        const email = this.email.replace(/\./g, '*');
        db.ref(`selections/${email}`).update(obj);
      },
      selectCountry: function(choice) {
        this.selected = choice;
        this.addSelection();
      },
    },
    beforeMount: function() {
      const email = this.email.replace(/\./g, '*');
      this.$bindAsArray('selection', db.ref(`selections/${email}/`));
    },
    watch: {
      selection: function(val) {
        if (this.selection.length) {
          val.forEach(element => {
            if (element['.key'] == (this.gameId)) this.selected = element['.value'];
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .game-card {
    background-color: whitesmoke;
    margin-top: 15px;
    width: 30%;
  }
  .header {
    color: white;
    background: rgb(100, 98, 98);
    padding: 10px;

    .game {
      font-size: 1em;
      margin: 0;
    }

    &.selected {
      // background: darken(#2c7caa, 5%);
    }
  }
  .game-picker {
    width: 100%;
    
    .btn-group {
      width: 100%;

      .btn {
        border-radius: 0;
        flex-grow: 1;
        padding: 10px;
      }
    }

    .selected-item {
      background: darken(#2c7caa, 5%);
      color: white;
      text-align: center;
      padding: 10px;
      width: 100%;
      margin: 0;
    }

  }
  .game-info {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    p {      
      margin-top: 0;
      margin-bottom: 5px;
    }
    .datetime {
      font-size: 0.75em;
      color: rgb(112, 112, 112);
      font-style: italic;
    }
    .group {
      font-size: 0.95em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .stadium,
    .location {
      color: rgb(80, 79, 79);
      font-size: 0.82em;
      text-align: right;
      text-transform: capitalize;
    }
  }
</style>

