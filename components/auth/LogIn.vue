<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col offset-md="4" md="4">
          <div class="mb-3">
            <b-form-input
              v-model="form.email"
              type="email"
              :state="hasError(lv_errors, 'email')"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="mail@example.com"
              trim
            />
            <div v-if="lv_errors.email" class="invalid-feedback">
              {{ lv_errors.email[0] }}
            </div>
          </div>
          <div class="mb-3">
            <b-form-input
              v-model="form.password"
              type="password"
              :state="hasError(lv_errors, 'password')"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="password"
              trim
            />
            <div v-if="lv_errors.password" class="invalid-feedback">
              {{ lv_errors.password[0] }}
            </div>
          </div>
          <b-button size="sm" variant="dark" @click="login()">
            Login
          </b-button>
          <p v-if="!lv_errors.abc" class="text-info text-sm-center">
            do not have an account?
            <nuxt-link to="/register">
              sign up
            </nuxt-link>
          </p>
          <div v-if="lv_errors.abc" class="text-danger text-sm-center bg-custom mx-3">
            forgot password?
            <nuxt-link to="/forgot-password">
              reset password
            </nuxt-link>
          </div>
          <div v-if="lv_errors.abc" class="text-warning text-sm-center bg-custom mx-3">
            or if you do not have an account
            then
            <nuxt-link to="/register">
              create an account
            </nuxt-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import utility from '@/mixins/utility'

export default {
  mixins: [utility],
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      const that = this
      this.$axios.$post('api/auth/login', that.form)
        .then(function (response) {
          if (response.success) {
            const token = response.access_token
            const expiry = response.expires_in
            that.$auth.$storage.setCookie('token', token)
            that.$store.dispatch('setToken', {
              token,
              expiry
            })
            that.$router.push({ name: 'dashboard' })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    async login () {
      const that = this
      try {
        await this.$auth.login({ data: that.form })
          // that.$router.push({ name : 'user-profile'})
          .then(function (response) {
            if (response.data.success) {
              that.$router.push({ name: '/' })
            }
          })
      } catch (e) {
        console.log(e)
      }
    },

    logout () {
      this.$auth.logout()
    }

  }

}
</script>
