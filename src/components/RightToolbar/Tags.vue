<template>
  <v-list class="pa-0" shaped>
    <v-subheader>标签云</v-subheader>
    <v-btn
      color="light-blue accent-1"
      text
      v-for="(item, i) in tags" :key="i"
    >
      {{ item }}
    </v-btn>
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

<style scoped>

</style>
