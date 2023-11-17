<template>
  <div>
    <b-button size="sm" variant="dark" @click="logout()">
      logout
    </b-button>
  </div>
</template>

<script>

export default {
  methods: {
    logout () {
      this.$auth.logout()
    }
  }

}
</script>
