<template>
  <v-navigation-drawer
    :value="drawer"
    absolute
    temporary
    app
  >
    <left-toolbar />
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
import LeftToolbar from '@/components/LeftToolbar/LeftToolbar'

export default {
  name: 'Drawer',
  components: { LeftToolbar },
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
