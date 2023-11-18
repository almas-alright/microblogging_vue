<template>
  <div>
    <div v-if="posts.length" class="mt-5">
      <b-card v-for="(post, index) in posts" :key="index" class="mb-2">
        <b-card-text>
          {{ post.content }}
        </b-card-text>
        <template #footer>
          <LikeButton :likes="post.likes" :post-id="parseInt(post.id)" />
        </template>
      </b-card>
    </div>
  </div>
</template>

<script>
import LikeButton from '@/components/posts/LikeButton'
export default {

  name: 'SinglePost',
  components: { LikeButton },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    username: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      posts: {}
    }
  },
  created () {
    this.getPosts()
  },
  methods: {
    getPosts: function () {
      const that = this
      this.$axios.get(`/api/user/posts/${that.username}`).then((response) => {
        that.posts = response.data.data
      })
    }
  }
}
</script>

<style scoped>
  .liked{
    color: crimson;
  }
  .likes{
    color: dimgray;
  }
</style>
