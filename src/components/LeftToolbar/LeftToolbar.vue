<template>
  <v-container>
    <v-card tile>
      <v-parallax
        height="200"
        src="https://images.unsplash.com/photo-1612286350087-116a6b734781?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
      </v-parallax>

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
          <v-parallax
            height="200"
            src="https://images.unsplash.com/photo-1612286350087-116a6b734781?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
          </v-parallax>
          <v-card-text class="pb-0">
            <p class="body-2 text--primary">
              上午好迎接美好的一天！<v-icon>mdi-white-balance-sunny</v-icon>
            </p>
            <v-progress-linear
              :value="skill"
              height="25"
            >
              <template>
                <strong>{{ Math.ceil(skill) }}%</strong>
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

export default {
  components: { Menu },
  data: () => ({
    reveal: false,
    skill: 25,
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
