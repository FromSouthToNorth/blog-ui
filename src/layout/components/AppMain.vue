<template>
  <v-main>
    <router-view :key="key"/>
    <Footer/>
  </v-main>
</template>

<script>
import Footer from './Footer'

export default {
  name: 'AppMain',
  components: { Footer },
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
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
