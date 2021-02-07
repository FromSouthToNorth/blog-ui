<template>
  <v-container>
    <v-row sm="12">
      <v-col>
        <v-card tile>
          <v-img
            :src="require('@/assets/images/juan-rojas-urHVMETO4fw-unsplash.jpg')"
            class="grey lighten-2"
            :height="200"
            width="100%"
          >
            <v-row
              class="fill-height pa-3"
              align="center"
            >
              <v-col
                cols="12"
                md="7"
                offset-md="1"
              >
                <h1 class="display-3 font-weight-light" style="color: aliceblue">
                  旅行的艺术
                </h1>

                <div class="subheading text-uppercase pl-2 mb-4" style="color: aliceblue">
                  寻找美，一次次的飞行
                </div>
                <v-btn
                  color="primary"
                  depressed
                  @click="reveal = true"
                >
                  起飞
                </v-btn>
              </v-col>
            </v-row>
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
          <v-expand-transition>
            <v-card
              tile
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="teal accent-4"
                  @click="reveal = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6" xm="6" v-for="item in 6" :key="item">
        <v-card
          class="mx-auto"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
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

          <v-card-subtitle class="pb-0">
            Number 10
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              text
            >
              Share
            </v-btn>

            <v-btn
              color="orange"
              text
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LineEcharts from '@/components/Echarts/LineECharts/LineECharts'
import PieEcharts from '@/components/Echarts/PieECharts/PieECharts'
export default {
  name: 'Index',
  components: { PieEcharts, LineEcharts },
  data: () => ({
    reveal: false,
    height: null,
  })
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
