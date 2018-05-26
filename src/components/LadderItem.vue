<template>
  <div>
    <p>{{ user }}</p>
    <p>{{ selections }}</p>
    <p>{{ winners }}</p>
  </div>
</template>

<script>
  import { db } from '../firebase';
  
  export default {
    name: 'LadderItem',
    props: ['selectedUser', 'winners'],
    data () {
      return {
        user: null,
        selections: null,
      }
    },
    beforeMount: function() {
      this.$bindAsArray('selections', db.ref(`selections/${this.selectedUser}/`));
      this.user = this.selectedUser.replace(/\*/g, '.');
    },
  }
</script>

<style lang="scss" scoped>

</style>

