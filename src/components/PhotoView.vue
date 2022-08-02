<template lang="html">
  <div class="home-view">
    <div><router-link class="link" :to="{ name: 'Favourites'}">Favorites</router-link></div>
    <UserCard
      v-if="photo.user.username"
      :username="photo.user.username"
    ></UserCard>
    <PhotoElement :photo="photo"></PhotoElement>
  </div>
</template>

<script>
import PhotoElement from './PhotoElement'
import UserCard from './UserCard'

import * as PhotoService from '../http/PhotoService'

export default {
  name: 'PhotoView',

  components: {
    PhotoElement,
    UserCard
  },

  data () {
    return {
      photo: {
        urls: {},
        user: {}
      }
    }
  },

  created () {
    PhotoService.get(this.$route.params.id, { client_id: this.$root.client_id })
      .then((res) => {
        this.photo = res.data
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
