<template>
  <div class="game-card">
    <div class="header">
      <h5 class="game">Game {{ game['.key'] }}</h5>
    </div>
    <div class="game-card-body">
      <div class="game-information">
        <div class="game-info">
          <p class="group">Group {{ game.group }}</p>
          <p class="datetime">{{ game.date }} {{ game.time }}</p>
          <p class="stadium">{{ place.stadium }}</p>
          <p class="location">{{ place.location }}</p>
        </div>
      </div>
      <div class="game-picker">
        <span v-if="selected">Selected {{ selected }}</span> 
        <div class="btn-group-vertical" v-if="!selected">
          <button type="button" class="btn btn-primary" @click="selectCountry(country_1)">{{ country_1 }}</button>
          <button type="button" class="btn btn-primary" @click="selectCountry('draw')">Draw</button>
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
    props: ['countries','game', 'stadiums', 'uid'],
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
        db.ref(`selections/${this.uid}`).update(obj);
      },
      selectCountry: function(choice) {
        this.selected = choice;
        this.addSelection();
      },
    },
    beforeMount: function() {
      this.$bindAsArray('selection', db.ref(`selections/${this.uid}/`));
    },
    watch: {
      selection: function(val) {
        if (val.length > this.gameId) this.selected = val[this.gameId -1]['.value'];
      }
    }
  }
</script>

<style lang="scss" scoped>
  .game-card {
    margin: 20px auto;
    background-color: whitesmoke;
    width: 55rem;
    border-radius: 5px;
  }
  .game-card-body {
    display: flex;
    justify-content: space-between;
    padding: 15px 50px 15px 10px;
  }
  .header {
    color: white;
    background: grey;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .game-picker {
    width: 25rem;
    float: right;
    
    .btn-group-vertical {
      width: 100%;
    }
  }
  .game-info {
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
      text-transform: capitalize;
    }
  }
</style>

