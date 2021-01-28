<template>
  <v-main
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="9"
      >
        <router-view :key="key"/>
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <RightDrawer />
      </v-col>
    </v-row>
    <Footer/>
  </v-main>
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
