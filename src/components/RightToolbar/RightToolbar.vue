<template>
  <v-container>
    <v-card>
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
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-container>
        </v-tab-item>
      </v-tabs>
      <blog-info />
      <tags />
    </v-card>
  </v-container>
</template>

<script>
import BlogInfo from '@/components/RightToolbar/BlogInfo'
import Tags from '@/components/RightToolbar/Tags'

export default {
  components: {Tags, BlogInfo },
  data() {
    return {
      header: undefined,
      headers:[
        '热门文章','最新评论','随机文章'
      ],
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
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

<style lang="scss" scoped>
.right--toolbar {

}
</style>
