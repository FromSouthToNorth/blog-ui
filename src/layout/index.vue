<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Blog</v-toolbar-title>

      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="deep-purple accent-4"
      ></v-progress-linear>

      <v-spacer></v-spacer>

      <v-text-field
        label="Solo"
        solo
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <AppMain />
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import AppMain from './components/AppMain'
import AppBar from './components/AppBar'
import LeftDrawer from './components/LeftDrawer'

export default {
  name: 'Layout',
  components: { AppBar, AppMain, LeftDrawer },
  data: () => ({
    drawer: null,
    loading: false,
  }),
  watch: {
    loading (val) {
      if (!val) return

      setTimeout(() => (this.loading = false), 3000)
    },
  },
}
</script>

<style scoped>

</style>
