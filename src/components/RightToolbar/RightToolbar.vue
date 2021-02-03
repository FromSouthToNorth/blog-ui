<template>
  <v-container>
    <v-card>
      <tab />
      <blog-info />
      <tags />
    </v-card>
  </v-container>
</template>

<script>
import Tab from '@/components/RightToolbar/Tab'
import BlogInfo from '@/components/RightToolbar/BlogInfo'
import Tags from '@/components/RightToolbar/Tags'

export default {
  components: { Tab, Tags, BlogInfo },
}
</script>

<style lang="scss" scoped>
.right--toolbar {

}
</style>
