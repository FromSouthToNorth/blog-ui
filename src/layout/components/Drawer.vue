<template>
  <v-navigation-drawer
    :value="drawer"
    temporary
    app
    width="268"
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
  data() {
    return {
      value: undefined
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>
