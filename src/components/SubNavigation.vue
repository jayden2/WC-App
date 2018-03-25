<template>
  <nav>
    <button>Ladder</button>
    <button>Game Selections</button>
  </nav>
</template>

<script>
  export default {
    name: 'SubNavigation',
    data: function() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  nav {
    color: white;
    text-align: center;
    margin-top: 20px;

    button {
      display: inline;
      color: #fff;
      background: #3589bb;
      border: none;
      font-weight: bold;
      padding: 10px 50px;
      cursor: pointer;

      &:hover,
      &:focus {
          background: darken(#3589bb, 5%);
      }
    }
  }
</style>
