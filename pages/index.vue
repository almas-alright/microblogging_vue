<template>
  <div>
    <b-container class-name="bv-example-row" class="mt-3">
      <b-row>
        <b-col cols="3">
          {{ user.name }}
          <NavBar @logOut="logout"/>
        </b-col>
        <b-col cols="9">
          <CreatePost />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import CreatePost from '@/components/posts/CreatePost'

export default {
  name: 'Index',
  components: { NavBar, CreatePost },
  layout: 'general',
  middleware: ['guest'],
  methods: {
    logout: function () {
      this.$auth.logout()
      location.reload()
    }
  }
}
</script>

<style scoped>

</style>
