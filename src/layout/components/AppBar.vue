<template>
  <v-app-bar app>
    <v-app-bar-nav-icon class="menu-btn" @click="setDrawer"></v-app-bar-nav-icon>

    <v-container>
      <v-row align="center" class="mx-auto py-0">
        <v-toolbar-title class="logo--show">Blog</v-toolbar-title>

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

        <v-text-field
          flat
          hide-details
          solo
          label="搜索 按回车"
          prepend-inner-icon="mdi-magnify"
          style="max-width: 320px"
          class="search-width"
          :value="value"
        ></v-text-field>

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

        <v-menu transition="slide-x-transition" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="n in 5"
              :key="n"
              link
            >
              <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>

      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="green"
      ></v-progress-linear>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    drawer: null,
    loading: false,
    value: undefined
  }),
  watch: {
    loading(val) {
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
  .logo--show {
    display: none;
  }
  .search-width {
    max-width: 178px!important;
  }
}

@media (min-width: 960px) {
  .menu-btn {
    display: none;
  }
}
</style>
