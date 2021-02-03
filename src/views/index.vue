<template>
  <v-container>
    <v-row sm="12">
      <v-col>
        <v-card dark>
          <v-img
            :src="require('@/assets/img/juan-rojas-urHVMETO4fw-unsplash.jpg')"
            class="grey lighten-2"
            height="200"
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
                <h1 class="display-3 font-weight-light shades">
                  旅行的艺术
                </h1>

                <div class="subheading text-uppercase pl-2 mb-4 shades">
                  寻找美，一次次的飞行
                </div>
              </v-col>
            </v-row>
          </v-img>
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
export default {
  name: 'Index'
}
</script>

<style scoped>

</style>
