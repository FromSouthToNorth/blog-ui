<template>
  <v-app id="inspire">
    <Drawer />  <!-- 导航抽箱 -->
    <EChartsDrawer /> <!-- 图表抽箱 -->
    <AppBar />  <!-- 头部导航 -->
    <v-main>
      <app-main />  <!-- 主体 -->
    </v-main>
    <Cta />
  </v-app>
</template>

<script>
import AppMain from './components/AppMain'
import AppBar from './components/AppBar'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import Cta from './components/Cta'
import EChartsDrawer from './components/EChartsDrawer'

export default {
  name: 'Layout',
  components: {EChartsDrawer, Cta, AppBar, AppMain, Footer, Drawer },
}
</script>

<style scoped>

</style>
