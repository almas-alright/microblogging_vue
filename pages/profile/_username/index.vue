<template>
  <div>
    <b-container class-name="bv-example-row" class="mt-3">
      <b-row>
        <b-col cols="3">
          <NavBar @logOut="logout" />
        </b-col>
        <b-col cols="9">
          <ProfileHeader />
          <AllPosts :username="$route.params.username" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import ProfileHeader from '@/components/profile/ProfileHeader'
import AllPosts from '@/components/posts/AllPosts'

export default {
  name: 'Index',
  components: { NavBar, AllPosts, ProfileHeader },
  // layout: 'general',
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
