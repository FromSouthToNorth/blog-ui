<template>
  <v-navigation-drawer
    :value="eChartsDrawer"
    right
    temporary
    app
    width="300"
  >
    <v-card flat>
      <v-row>
        <v-col cols="12" sm="12">
          <LineECharts />
        </v-col>
        <v-col cols="12" sm="12">
          <PieECharts />
        </v-col>
        <v-col cols="12" sm="12">
          <BarECharts />
        </v-col>
      </v-row>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

import LineECharts from '@/components/Echarts/LineECharts/LineECharts'
import PieECharts from '@/components/Echarts/PieECharts/PieECharts'
import BarECharts from '@/components/Echarts/BarECharts/BarECharts'

export default {
  name: 'EChartsDrawer',
  components: {BarECharts, PieECharts, LineECharts},
  computed: {
    ...mapState({
      eChartsDrawer: state => state.settings.eChartsDrawer
    })
  },
}
</script>
