<template lang="html">
  <div class="photo-element" :style="styles" :alt="alt" @click="onImgClick">
    <button type="button" class="fav-button" @click="onBtnClick">{{ btnText }}</button>
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
    },

    preview: {
      type: Boolean,
      default: false
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
    },
    styles () {
      return {
        'background-image': `url('${this.src}')`,
        'background-size': 'cover',
        'max-width': this.preview ? '50%' : '80%',
        'min-height': this.preview ? '400px' : `${this.photo.height / 4}px`,
        'background-repeat': 'no-repeat'
      }
    }
  },

  mounted () {
    console.log(this.photo)
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
<style lang="scss" scoped>
.fav-button {
  margin: 1rem;
  border: 1px solid white;
  background: black;
  color: white;
  padding: 1rem;
}
</style>
