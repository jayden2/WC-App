<template>
  <div class="dashboard container">
    <game-selection></game-selection>
  </div>
</template>

<script>
  import GameSelection from '@/components/GameSelection';
  export default {
    name: 'SlectionDashboard',
    components: {
      GameSelection
    },
    data () {
      return {
        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.dashboard {
  padding-bottom: 15px;
}
</style>
