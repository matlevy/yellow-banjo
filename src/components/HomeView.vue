<template lang="html">
  <div class="home-view">
    <div>
      <router-link class="link" :to="{ name: 'Favourites' }"
        >Favorites</router-link
      >
    </div>
    <div><input class="search" v-model="search" placeholder="search.." /></div>
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
      photos: [],
      searchTerm: ''
    }
  },

  computed: {
    search: {
      set (value) {
        this.searchTerm = value
        if (value.length > 3) {
          PhotoService.search({
            client_id: this.$root.client_id,
            query: value,
            page: 1,
            per_page: 20
          })
            .then((res) => {
              this.photos = res.data.results
            })
            .catch(console.error)
        } else {
          PhotoService.list({ client_id: this.$root.client_id })
            .then((res) => {
              this.photos = res.data
            })
            .catch(console.error)
        }
      },
      get () {
        return this.searchTerm
      }
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
.search {
  background: transparent;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: transparent;
  padding: 1rem;
  border-radius: 0;
  border: 1px solid rgb(184, 184, 184);
  color: white;
  outline: none;
}
</style>
