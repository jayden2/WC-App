<template>
  <main>
    <header>
      <h2 class="title">Ladder</h2>
    </header>
    <div class="grid">
      <ladder-item :key="selectUser['.key']" :selectedUser="selectUser['.key']" :winners="winners" v-for="selectUser in selections"></ladder-item>
    </div>
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
</style>