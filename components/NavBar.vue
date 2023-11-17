<template>
  <div>
    <b-nav vertical>
      <b-nav-item active>
        Home
      </b-nav-item>
      <b-nav-item>
        Find
      </b-nav-item>
      <b-nav-item>
        Another Link
      </b-nav-item>
      <b-nav-item @click="logout()">Logout</b-nav-item>
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
