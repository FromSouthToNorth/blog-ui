<template>
  <v-list class="pa-0" shaped>
    <v-subheader>博客信息</v-subheader>
    <v-list-item-group
      color="primary"
    >
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-icon>
          <v-icon v-text="item.icon" :color="item.color"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            <v-badge
              :color="item.color"
              :content="item.subtitle"
            >
              {{ item.text }}
            </v-badge>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      items: [
        {text: '文章数目', icon: 'mdi-shield-star-outline', color: 'light-blue', subtitle: 12},
        {text: '评论数目', icon: 'mdi-comment-processing-outline', color: 'cyan', subtitle: 1},
        {text: '运行天数', icon: 'mdi-vector-union', color: 'green', subtitle: 7},
        {text: '最后活动', icon: 'mdi-atom', color: 'pink lighten-1', subtitle: '2020-02-01'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
