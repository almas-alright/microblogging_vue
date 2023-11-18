<template>
  <div>
    <b-button variant="outline-secondary" size="sm" @click="reaction">
      {{ totalLikes }}
      <span class="material-icons">
        favorite
      </span>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'LikeButton',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    likes: {
      type: String,
      defaults: '0',
      required: false
    },
    // eslint-disable-next-line vue/require-default-prop
    postId: {
      type: Number,
      required: false
    }
  },
  data () {
    return {
      totalLikes: 0
    }
  },
  created () {
    this.setLike()
  },
  methods: {
    reaction: function () {
      const that = this
      this.$axios.post(`/api/reactions/${that.postId}/react`).then((response) => {
        if (response.data.liked) {
          that.totalLikes = parseInt(that.totalLikes) + 1
        } else {
          that.totalLikes = parseInt(that.totalLikes) - 1
        }
      })
    },
    setLike: function () {
      if (this.likes == null || isNaN(this.likes)) {
        this.totalLikes = 0
      } else {
        this.totalLikes = parseInt(this.likes)
      }
    }
  }
}
</script>

<style scoped>

</style>
