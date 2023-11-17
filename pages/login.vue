<template>
  <div>
    <Login v-if="!authenticated" />
    <b-row>
      <b-col offset-md="4" md="4">
        <NuxtLink v-if="authenticated" :to="{name:'index'}">
          You Are Logged In
        </NuxtLink>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Login from '@/components/auth/LogIn'

export default {
  components: { Login }
}
</script>
