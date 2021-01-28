<template>
  <v-app>
    <AppBar />
    <LeftDrawer />
    <AppMain />
  </v-app>
</template>

<script>
import AppMain from './components/AppMain'
import AppBar from './components/AppBar'
import LeftDrawer from './components/LeftDrawer'

export default {
  name: 'Layout',
  components: { AppBar, AppMain, LeftDrawer },
}
</script>

<style scoped>

</style>
