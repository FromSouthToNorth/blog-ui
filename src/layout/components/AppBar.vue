<template>
  <v-app-bar app>
    <v-container class="d-flex pa-0 pa-md-26 align-center">

      <v-app-bar-nav-icon class="menu-btn" @click="setDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Blog</v-toolbar-title>

      <v-btn icon @click="theme">
        <v-icon>{{ $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>

      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="green"
      ></v-progress-linear>

      <v-spacer></v-spacer>

      <v-row>
        <v-col md="10" sm="8">
          <v-text-field
            solo
            dense
            label="搜索 按回车"
            prepend-inner-icon="mdi-magnify"
            :value="value"
            style="max-width: 320px; margin-top: 30px"
            class="text--field--show"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            color="pink"
            icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >闲言碎语</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

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
    loading: true,
    value: undefined
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

<style lang="scss" scoped>
@media (max-width: 600px) {
  .text--field--show {
    display: none;
  }
}
@media (min-width: 960px) {
  .menu-btn {
    display: none;
  }
}
</style>
