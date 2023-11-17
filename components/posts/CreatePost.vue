<template>
  <div>
    <b-jumbotron>
      <b-form-textarea
        id="textarea-rows"
        v-model="post.content"
        placeholder="create post"
        rows="3"
      ></b-form-textarea>
      <hr>
      <b-button variant="primary" size="sm" @click="createPost">post</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'CreatePost',
  data () {
    return {
      post: { content: '' }
    }
  },
  methods: {
    createPost: function () {
      const that = this
      this.$axios.post('api/posts', that.post).then((response) => {
        if (response.data.success) {
          that.$emit('managed')
          this.$bvModal.hide('results-modal')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
