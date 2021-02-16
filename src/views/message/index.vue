<template>
  <v-container>
    留言板
  </v-container>
</template>

<script>
export default {
  name: 'Message',
  created() {
    this.$store.dispatch('settings/loadingSetting', true)
  }
}
</script>

<style scoped>

</style>
