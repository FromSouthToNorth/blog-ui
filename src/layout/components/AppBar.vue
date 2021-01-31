<template>
  <v-app-bar app>
    <v-container class="d-flex pa-0 pa-md-26 align-center">

      <v-app-bar-nav-icon class="d-sm-none" @click="setDrawer"></v-app-bar-nav-icon>

      <v-btn icon @click="theme">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-toolbar-title>Blog</v-toolbar-title>

      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="deep-purple accent-4"
      ></v-progress-linear>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    drawer: null,
    loading: false,
  }),
  watch: {
    loading (val) {
      // 加载进度条
      if (!val) return
      setTimeout(() => (this.loading = false), 3000)
    },
  },
  methods: {
    /** 设置主题 */
    theme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    /** 设置导航抽箱 */
    setDrawer() {
      this.drawer = !this.drawer
      this.$store.dispatch('settings/drawerSetting', {
        key: 'drawer',
        value: this.drawer
      })
    }
  }
}
</script>

<style scoped>

</style>
