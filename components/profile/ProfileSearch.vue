<template>
  <div>
    <b-card bg-variant="secondary" text-variant="white">
      <b-input-group class="mt-2">
        <b-form-input v-model="searchString" />
        <b-input-group-append>
          <b-button variant="dark">
            search
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-card>
    <b-card v-if="foundUsers.length" bg-variant="secondary" text-variant="text-black-50">
      <b-list-group>
        <b-list-group-item v-for="(foundUser, index) in foundUsers" :key="index" :to="{ name: 'profile-username', params: { username: foundUser.username } }" class="d-flex align-items-center">
          <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3" />
          <div class="mr-auto flex-row">
            <span class="font-weight-bold">
              {{ foundUser.name }}
            </span><br>
            <span class="text-muted font-weight-lighter">
              {{ foundUser.email }}
            </span>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ProfileSearch',
  data () {
    return {
      searchString: '',
      foundUsers: {}
    }
  },
  watch: {
    searchString: {
      handler: function (value) {
        if (value.length >= 4) {
          this.searchUser()
        }
      }
    }
  },
  methods: {
    searchUser: function () {
      const that = this
      this.$axios.get('/api/user/search', { params: { search: that.searchString } }).then((response) => {
        that.foundUsers = response.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>
