<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  mounted () {
    if (!this.$root.client_id) {
      this.$router.push('/auth')
    }
  }
}
</script>
<style lang="scss">
html,
body,
.app {
  background-color: rgb(25, 25, 25);
  color: white;
  font-family: 'Avenir, Helvetica, Arial, sans-serif';
  margin: 1rem;
}
</style>
