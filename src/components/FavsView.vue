<template lang="html">
  <div class="home-view">
    <h1>Favorites</h1>
    <div><router-link :to="{ name: 'Home'}">Home</router-link></div>
    <PhotoList :photos="photos"></PhotoList>
  </div>
</template>

<script>
import PhotoList from './PhotoList'

import * as FavsService from '@/local/FavService'

export default {
  name: 'FavsView',

  components: {
    PhotoList
  },

  data () {
    return {
      photos: []
    }
  },

  mounted () {
    this.photos = FavsService.all()
    FavsService.subscribe(this)
  },

  methods: {
    onFavsChange () {
      this.photos = FavsService.all()
      this.$forceUpdate()
    }
  }
}
</script>
