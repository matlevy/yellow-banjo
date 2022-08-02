<template lang="html">
  <div class="home-view">
    <div><router-link class="link" :to="{ name: 'Favourites'}">Favorites</router-link></div>
    <PhotoList :photos="photos"></PhotoList>
  </div>
</template>

<script>
import PhotoList from './PhotoList'
import * as PhotoService from '../http/PhotoService'

export default {
  name: 'HomeView',

  components: {
    PhotoList
  },

  data () {
    return {
      photos: []
    }
  },

  created () {
    PhotoService.list({ client_id: this.$root.client_id })
      .then((res) => {
        this.photos = res.data
      })
      .catch(console.error)
  }
}
</script>
<style lang="scss" scoped>
.link {
  border: 1px solid rgb(184, 184, 184);
  background-color: transparent;
  color: white;
  margin-bottom: 1rem;
  padding: 1rem;
  display: inline-block;
  text-decoration: none;
}
</style>
