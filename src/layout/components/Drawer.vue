<template>
  <v-navigation-drawer
    :value="drawer"
    temporary
    app
  >
    <v-text-field
      flat
      hide-details
      solo
      label="搜索 按回车"
      prepend-inner-icon="mdi-magnify"
      :value="value"
      class="text--field--show"
    ></v-text-field>
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
