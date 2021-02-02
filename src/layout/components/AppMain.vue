<template>
  <v-container>
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
import Footer from '@/layout/components/Footer'

export default {
  components: { LeftToolbar, RightToolbar, TagCloud, Footer },
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
