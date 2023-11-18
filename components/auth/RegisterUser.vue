<template>
  <div>
    <b-row>
      <b-col offset-md="4" md="4">
        <div v-if="!showForm" class="col-12 bg-dark text-center p2">
          <p class="lead text-danger p-2">
            {{ msg }}
          </p>
        </div>
        <div v-if="showForm" class="col-12">
          <div class="text-info text-center bg-secondary">
            {{ form.email }}
          </div>
          <div v-if="lv_errors.abc" class="text-danger text-center">
            {{ lv_errors.abc[0] }}
          </div>
          <b-row class="mb-4">
            <b-form-input
              id="email"
              v-model="form.email"
              type="text"
              :state="hasError(lv_errors, 'email')"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="mail@example.com"
              trim
              required
            />
            <b-form-invalid-feedback v-if="lv_errors.email">
              {{ lv_errors.email[0] }}
            </b-form-invalid-feedback>
          </b-row>
          <b-row class="mb-4">
            <b-form-input
              id="name"
              v-model="form.name"
              type="text"
              :state="hasError(lv_errors, 'name')"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Full Name"
              trim
              required
            />
            <b-form-invalid-feedback v-if="lv_errors.name">
              {{ lv_errors.name[0] }}
            </b-form-invalid-feedback>
          </b-row>
          <b-row class="mb-4">
            <b-form-input
              id="username"
              v-model="form.username"
              type="text"
              :state="hasError(lv_errors, 'username')"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="username"
              trim
              required
            />
            <b-form-invalid-feedback v-if="lv_errors.username">
              {{ lv_errors.username[0] }}
            </b-form-invalid-feedback>
          </b-row>
          <b-row class="mb-4">
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              :state="hasError(lv_errors, 'password')"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="password"
              trim
              required
            />
            <b-form-invalid-feedback v-if="lv_errors.password">
              {{ lv_errors.password[0] }}
            </b-form-invalid-feedback>
          </b-row>
          <b-row class="mb-4">
            <b-form-input
              id="password_confirmation"
              v-model="form.password_confirmation"
              type="password"
              :state="hasError(lv_errors, 'password_confirmation')"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="re-type password"
              trim
              required
            />
            <b-form-invalid-feedback v-if="lv_errors.password_confirmation">
              {{ lv_errors.password_confirmation[0] }}
            </b-form-invalid-feedback>
          </b-row>
          <b-row class="mb-4">
            <div v-if="showLoader" class="text-center">
              <b-spinner type="grow" label="Spinning" />
            </div>
            <b-button block variant="secondary" @click="submit()">
              Register
            </b-button>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import utility from '../../mixins/utility'
export default {
  mixins: [utility],
  data () {
    return {
      showLoader: false,
      showForm: true,
      msg: '',
      form: {
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        otp: '',
        purpose: 'registration'
      }
    }
  },
  methods: {
    submit () {
      this.showLoader = true
      const that = this
      this.$axios.$post('api/auth/register', that.form)
        .then(function (response) {
          if (response.success) {
            that.$router.push({ name: 'login' })
          }
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error)
        }).finally(function () {
          that.showLoader = false
        })
    },
    randomString (len, an) {
      an = an && an.toLowerCase()
      let str = ''
      let i = 0
      // eslint-disable-next-line prefer-const
      let min = an === 'a' ? 10 : 0
      // eslint-disable-next-line prefer-const
      let max = an === 'n' ? 10 : 62
      for (; i++ < len;) {
        let r = Math.random() * (max - min) + min << 0
        str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48)
      }
      return str
    },
    login () {
      const that = this
      this.form.active = '1'
      this.$auth.login({ data: that.form })
        // that.$router.push({ name : 'user-profile'})
        .then(function (response) {
          if (response.data.success) {
            that.$router.push({ name: 'my-profile' })
          }
        })
    }
  }
}
</script>
