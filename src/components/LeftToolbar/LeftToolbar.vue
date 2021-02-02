<template>
  <v-container>
    <v-card
      class="mx-auto"
    >
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        src="https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        height="200px"
      ></v-img>

      <v-card-title>
        月色真美
      </v-card-title>

      <v-card-subtitle>
        只要心还跳
      </v-card-subtitle>

      <v-card-actions style="padding: 0">
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            晚上好注意早点休息 <v-icon>mdi-moon-waning-crescent</v-icon>
            <v-progress-linear rounded value="95"></v-progress-linear>
          </v-card-text>
        </div>
      </v-expand-transition>
      <hr class="v-divider theme--light" />
      <v-list dense>
        <v-subheader>导航</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    selectedItem: 1,
    items: [
      { text: '关于我', icon: 'mdi-account' },
      { text: '首页', icon: 'mdi-home-group' },
      { text: '分类', icon: 'mdi-format-list-bulleted-type' },
      { text: '标签', icon: 'mdi-tag-heart' },
      { text: '留言板', icon: 'mdi-comment-processing' },

    ],
  }),
}
</script>

<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
