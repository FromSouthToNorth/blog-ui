<template>
  <v-app id="inspire">
    <Drawer />  <!-- 抽箱导航 -->
    <AppBar />  <!-- 头部导航 -->
    <v-main>
      <app-main />  <!-- 主体 -->
    </v-main>
  </v-app>
</template>

<script>
import AppMain from './components/AppMain'
import AppBar from './components/AppBar'
import Footer from './components/Footer'
import Drawer from './components/Drawer'

export default {
  name: 'Layout',
  components: { AppBar, AppMain, Footer, Drawer },
}
</script>

<style scoped>

</style>
