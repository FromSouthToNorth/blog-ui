<template>
  <v-app>
    <AppBar />
    <LeftDrawer />
    <RightDrawer />
    <AppMain />
  </v-app>
</template>

<script>
import AppMain from './components/AppMain'
import AppBar from './components/AppBar'
import LeftDrawer from './components/LeftDrawer'
import RightDrawer from './components/RightDrawer'

export default {
  name: 'Layout',
  components: { AppBar, AppMain, LeftDrawer, RightDrawer },
}
</script>

<style scoped>

</style>
