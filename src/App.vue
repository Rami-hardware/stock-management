<template lang="pug">
  #app
    .container
      .row
        .col
          add
        .col
          remove
        .col
          move
      .row
        records
  </div>
</template>

<script>
import add from './components/add.vue'
import move from './components/move.vue'
import remove from './components/delete.vue'
import records from "./components/table.vue"
export default {
  name: 'App',
  components: {
    add,
    remove,
    move,
    records
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
