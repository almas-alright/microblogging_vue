<template>
  <div>
    <b-container class="mt-5">
      <RegisterUser/>
    </b-container>
  </div>
</template>

<script>
import RegisterUser from '@/components/auth/RegisterUser'

export default {
  components: { RegisterUser },
  layout: 'general'
}
</script>
