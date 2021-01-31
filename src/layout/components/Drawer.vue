<template>
  <v-navigation-drawer
    :value="drawer"
    absolute
    temporary
    app
  >
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Drawer',
  computed: {
    ...mapState({
      drawer: state => state.settings.drawer
    })
  },
  created() {
    console.log(this.drawer)
  }
}
</script>

<style scoped>

</style>
