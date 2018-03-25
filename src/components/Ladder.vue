<template>
  <section>
    <h2>Ladder</h2>
    <div>
      <ladder-item></ladder-item>
    </div>
  </section>
</template>

<script>
  import LadderItem from '@/components/LadderItem'

  export default {
    name: 'VoteCard',
    components: {
      LadderItem
    },
    data () {
      return {
          items: {
              id: '0',
              name: 'Jayden'
          }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>