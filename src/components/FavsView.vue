<template lang="html">
  <div class="home-view">
    <div><router-link class="link" :to="{ name: 'Home'}">Home</router-link></div>
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
