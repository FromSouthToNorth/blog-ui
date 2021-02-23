<template>
  <v-list class="pa-0" shaped>
    <v-subheader>标签云</v-subheader>
    <v-container>
      <v-btn
        elevation="1"
        style="margin: 4px"
        text
        color="blue lighten-1"
        v-for="(item, i) in tags" :key="i"
      >
        {{ item }}
      </v-btn>
    </v-container>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        'java', 'html', 'vue', 'JavaScript', 'SQL', 'Spring'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
