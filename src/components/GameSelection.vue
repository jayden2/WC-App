<template>
  <section>
    <h2>Game Selections</h2>
    <div>
      <game-selection-item></game-selection-item>
    </div>
  </section>
</template>

<script>
  import GameSelectionItem from '@/components/GameSelectionItem'

  export default {
    name: 'GameSelection',
    components: {
      GameSelectionItem
    }
  }
</script>

<style lang="scss" scoped>

</style>