// import _ from 'lodash'

export default {
  methods: {
    hasError (error, key) {
      if (Object.keys(error).includes(key)) {
        return false
      } else {
        return null
      }
    }
  },
  filters: {
    dateFormat: function (value) {
      if (!value) {
        return ''
      } else {
        const parts = value.split('-')
        return parts[2] + '-' + parts[1] + '-' + parts[0]
      }
    },
    logout: function () {
      this.$auth.logout()
      location.reload()
    }
  }
}
