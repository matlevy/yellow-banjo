<template lang="html">
  <div class="photo-element">
    <img width="100" :src="src" :alt="alt" @click="onImgClick" />
    <button type="button" @click="onBtnClick">{{ btnText }}</button>
  </div>
</template>

<script>
import * as FavoriteService from '@/local/FavService'

export default {
  name: 'PhotoElement',

  props: {
    photo: {
      type: Object,
      required: true
    },

    size: {
      type: String,
      default: 'regular'
    }
  },

  data () {
    return {
      isLiked: false
    }
  },

  computed: {
    src () {
      return this.photo.urls[this.size]
    },
    alt () {
      return this.photo.description
    },
    btnText () {
      return this.isLiked ? 'Unlike' : 'Like'
    }
  },

  mounted () {
    this.isLiked = FavoriteService.isLiked({ photo: this.photo })
    FavoriteService.subscribe(this)
  },

  methods: {
    onImgClick () {
      this.$router.push({ name: 'Photo', params: { id: this.photo.id } })
    },

    onBtnClick () {
      FavoriteService.likeOrNot({ photo: this.photo })
    },

    onFavsChange () {
      this.isLiked = FavoriteService.isLiked({ photo: this.photo })
    }
  }
}
</script>
