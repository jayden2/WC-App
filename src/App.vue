<template>
  <div id="app">
    <navigation></navigation>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'

  export default {
    name: 'App',
    components: {
      Navigation
    },
    methods: {
      setUser: function() {
        this.$store.dispatch('setUser');
      }
    },
    created() {
      this.setUser();
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
