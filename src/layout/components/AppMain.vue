<template>
  <v-container class="d-flex pa-0 pa-md-26 align-center">
    <v-row>
      <v-col cols="12" md="2">
      </v-col>
      <v-col cols="12" md="8">
        <router-view :key="key"/>
      </v-col>
      <v-col cols="12" md="2">
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import TagCloud from '@/components/Echarts/TagCloud'

export default {
  components: { TagCloud },
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
