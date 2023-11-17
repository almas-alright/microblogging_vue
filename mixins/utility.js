// import _ from 'lodash'

export default {
  data () {
    return {
      departments: [],
      batches: [],
      u_students: [],
      gpa_options: [
        {
          value: null,
          text: 'select gpa'
        }
      ]
    }
  },
  methods: {
    hasError (error, key) {
      if (Object.keys(error).includes(key)) {
        return false
      } else {
        return null
      }
    },
    loadBatches () {
      const that = this
      this.$axios.get('/batches').then((response) => {
        const data = response.data.data
        const result = data.map(({
          name: text,
          id
        }) => ({
          text,
          id
        }))
        that.batches = result
      }).finally(function () {

      })
    },
    loadDepartments () {
      const that = this
      this.$axios.get('/departments').then((response) => {
        const data = response.data.data
        that.departments = data.map(({
          name: text,
          id
        }) => ({
          text,
          id
        }))
      }).finally(function () {

      })
    },
    loadStudents () {
      const that = this
      this.$axios.get('/student-list').then((response) => {
        const data = response.data.data
        const result = data.map(({
          name: text,
          id
        }) => ({
          text,
          id
        }))
        that.u_students = result
      }).finally(function () {

      })
    },
    loadGpa () {
      const that = this
      this.$axios.get('/gpa-list').then((response) => {
        const data = response.data.data
        data.forEach(function (item) {
          that.gpa_options.push({
            value: item.gpa,
            text: item.gpa
          })
        })
      }).finally(function () {

      })
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
    }
  }
}
