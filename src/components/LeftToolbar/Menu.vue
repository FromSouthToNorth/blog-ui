<template>
  <v-card tile>
    <v-list dense>
      <v-subheader>导航</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="menuClick(item.path)"
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
    <v-divider></v-divider>
    <v-treeview
      activatable
      :items="treeview"
    ></v-treeview>
  </v-card>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      selectedItem: 0,
      items: [
        { text: '首页', path: 'index', icon: 'mdi-home-outline ' },
        { text: '关于我', path: 'aboutMe', icon: 'mdi-account-circle-outline' },
        { text: '留言板', path: 'message', icon: 'mdi-comment-processing-outline' },
        { text: '归档', path: 'flie', icon: 'mdi-ballot-recount-outline' },
      ],
      labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
      time: 0,
      forecast: [
        { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
        { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
        { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
      ],
      treeview: [
        {
          id: 1,
          name: '分类',
          children: [
            { id: 4, name: '生活百态' },
            { id: 2, name: '闲鱼心事',
              children: [
                { id: 6, name: '孤独心事' },
                { id: 7, name: '每日日记' }
              ]
            },
            { id: 8, name: '学习笔记',
              children: [
                { id: 3, name: 'java' },
                { id: 10, name: 'mysql' },
                { id: 9, name: 'vue' }
              ]
            },
          ],
        }
      ],
    }
  },
  methods: {
    menuClick(path) {
      this.$router.push({
        path: path
      })
    }
  }
}
</script>

<style scoped>

</style>
