<template>
  <div>
    <header class="position-relative">
      <div class="position-relative">
        <b-img fluid src="~/assets/images/abstract-banner.jpg" alt="banner" class="rounded-lg" />
        <img
          src="~/assets/images/profile.jpg"
          alt=""
          class="border border-success rounded-full mr-2 position-absolute bottom-0 transform -translate-x-1/2 translate-y-1/2"
          style="left: 2%; bottom: -30%; border-radius: 50%;"
          height="150"
          width="150"
        >
      </div>
      <div class="d-flex bd-highlight">
        <div class="p-2 flex-fill bd-highlight">
          <br>
        </div>
        <div class="p-2 flex-fill bd-highlight">
          <h5>{{ user.name }}</h5>
        </div>
        <div class="p-2 flex-fill bd-highlight">
          <br>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'ProfileHeader'
}
</script>

<style scoped>

</style>
