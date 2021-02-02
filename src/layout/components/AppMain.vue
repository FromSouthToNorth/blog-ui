<template>
  <v-container class="d-flex pa-0 pa-md-26 align-center">
    <v-row no-gutters>
      <v-col cols="12" md="2" class="left--navigation--show">
        <left-toolbar />
      </v-col>
      <v-col cols="12" md="8">
        <router-view :key="key"/>
      </v-col>
      <v-col cols="12" md="2">
        <right-toolbar />
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import TagCloud from '@/components/Echarts/TagCloud'
import RightToolbar from '@/components/RightToolbar/RightToolbar'
import LeftToolbar from '@/components/LeftToolbar/LeftToolbar'

export default {
  components: { LeftToolbar, RightToolbar, TagCloud },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 960px) {
  .left--navigation--show {
    display: none;
  }
}
</style>
