<template>
  <v-container>
    关于我
  </v-container>
</template>

<script>
export default {
  name: 'AboutMe',
  created() {
    this.$store.dispatch('settings/loadingSetting', true)
  }
}
</script>

<style scoped>

</style>
