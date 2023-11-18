<template>
  <div>
    <b-nav vertical>
      <b-nav-item to="/">
        Home
      </b-nav-item>
      <b-nav-item :to="{ name: 'explore' }">
        Explore
      </b-nav-item>
      <b-nav-item :to="{ name: 'profile-username', params: { username: user.username } }">
        Profile
      </b-nav-item>
      <b-nav-item @click="logout()">
        Logout
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logout (e) {
      // const that = this
      // this.$auth.logout()
      this.$emit('logOut')
    }
  }
}
</script>

<style scoped>

</style>
