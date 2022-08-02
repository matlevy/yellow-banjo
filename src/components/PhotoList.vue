<template lang="html">
  <div class="photo-list">
    <PhotoElement
      class="photo"
      v-for="photo in photos"
      :key="photo.id"
      :photo="photo"
      :preview="true"
    ></PhotoElement>
  </div>
</template>

<script>
import PhotoElement from './PhotoElement'

export default {
  name: 'PhotoList',

  components: {
    PhotoElement
  },

  props: {
    photos: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.photo-list {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  .photo {
    width: 40%;
    img {
      max-width: 100%;
    }
  }
}
</style>
