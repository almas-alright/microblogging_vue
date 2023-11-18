<template>
  <div>
    <b-container class-name="bv-example-row" class="mt-3">
      <b-row>
        <b-col cols="3">
          <slot name="sidebar" />
        </b-col>
        <b-col cols="9">
          <slot name="flow" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'General'

}
</script>

<style scoped>

</style>
