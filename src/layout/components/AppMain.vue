<template>
  <router-view :key="key"/>
</template>

<script>
import Footer from './Footer'
import RightDrawer from './RightDrawer'

export default {
  name: 'AppMain',
  components: { Footer, RightDrawer },
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
</style>
