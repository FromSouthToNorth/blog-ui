<template>
  <v-container>
    <v-card>
      <v-img
        height="200"
        :src="imgPart"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <v-card-title>
        月色真美
      </v-card-title>

      <v-card-subtitle>
        只要心还跳
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          icon
          @click="reveal = true"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          tile
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%;"
        >
          <v-img
            height="200"
            :src="imgClose"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-text class="pb-0">
            <p class="body-2 text--primary">
              {{ blessing.text }}
              <v-icon :color="blessing.color" v-text="blessing.icon"></v-icon>
            </p>
            <v-progress-linear
              :value="residueData"
              height="25"
            >
              <template>
                <strong>{{ Math.ceil(residueData) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              icon
              @click="reveal = false"
            >
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
      <v-divider></v-divider>
      <Menu />
    </v-card>
  </v-container>
</template>

<script>
import Menu from './Menu'
import close from '@/assets/images/austin-ban-_cQDpF6n3t0-unsplash.jpg'
import part from '@/assets/images/austin-ban-IS6RwpuEJpY-unsplash.jpg'

export default {
  components: { Menu },
  data: () => ({
    reveal: false,
    skill: 25,
    day: 24,
    residueData: null,
    blessing: {
      text: undefined,
      icon: undefined,
      color: undefined,
    },
    imgClose: close,
    imgPart: part
  }),
  created() {
    this.theRestOfTime()
  },
  methods: {
    theRestOfTime() {
      var date = new Date()
      let residue = this.day - date.getHours()
      this.residueData = 100 - ((residue / this.day) * 100)
      if (date.getHours() >= 6 && date.getHours() < 11) {
        this.blessing.text = '早上好~迎接美好的一天！'
        this.blessing.icon = 'mdi-emoticon-kiss-outline'
        this.blessing.color = 'pink'
      } else if (date.getHours() >= 11 && date.getHours() <= 14) {
        this.blessing.text = '今天你那阳光明媚吗？'
        this.blessing.icon = 'mdi-emoticon-lol-outline'
        this.blessing.color = 'orange'
      } else if (date.getHours() >= 15 && date.getHours() <= 19) {
        this.blessing.text = '下午不打个盹？'
        this.blessing.icon = 'mdi-emoticon-wink-outline'
        this.blessing.color = 'cyan'
      } else if (date.getHours() >= 20) {
        this.blessing.text = '晚上好，天色不早啦~早点休息'
        this.blessing.icon = 'mdi-weather-night'
        this.blessing.color = 'blue-grey'
      }
    }
  }
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
