<template>
  <v-tabs @change="tabsChange">
    <v-tab>
      <v-icon>mdi-hand-heart</v-icon>
    </v-tab>
    <v-tab>
      <v-icon>mdi-comment-outline</v-icon>
    </v-tab>
    <v-tab>
      <v-icon>mdi-gift-outline</v-icon>
    </v-tab>
    <v-tab-item v-for="n in 3" :key="n">
      <v-container fluid>
        <v-list three-line class="pa-0">
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle><v-icon dense style="margin-right: 12px">mdi-comment-outline</v-icon>{{ item.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-container>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      header: undefined,
      headers:[
        '热门文章','最新评论','随机文章'
      ],
      items: [
        { header: 'Today' },
        {
          avatar: 'https://images.unsplash.com/photo-1612286350087-116a6b734781?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          title: 'Mysql事务',
          subtitle: '12',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://images.unsplash.com/photo-1612169479936-8c1d2382d818?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          title: 'Spring',
          subtitle: '9',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://images.unsplash.com/photo-1612215087296-b76051129e12?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          title: 'Oui oui',
          subtitle: '9',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://images.unsplash.com/photo-1612230651513-8139f7711215?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          title: 'Birthday gift',
          subtitle: '9',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://images.unsplash.com/photo-1612231868724-f5192a66c84a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDJ8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          title: 'Recipe to try',
          subtitle: '9',
        },
      ],
    }
  },
  created() {
    this.header = this.headers[0]
  },
  methods: {
    tabsChange(val) {
      this.header = this.headers[val]
    }
  }
}
</script>

<style scoped>

</style>
