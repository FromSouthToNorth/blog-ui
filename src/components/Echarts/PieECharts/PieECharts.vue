<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import resize from '../mixins/resize'

require('echarts/theme/macarons')
require('@/assets/ECharts/hy')

import { initOption } from './pieOptions'

export default {
  name: 'PieEcharts',
  mixins: [resize],
  computed: {
    getTheme() {
      return this.$vuetify.theme.dark
    }
  },
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  watch: {
    getTheme(val) {
      let theme
      if (val) {
        theme = 'hy'
      } else {
        theme = 'macarons'
      }
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
      this.initChart(theme)
    }
  },
  data() {
    return {
      chart: null,
      data: [
        { name: 'java', value: 12 },
        { name: 'html', value: 6 },
        { name: 'JavaScript', value: 2 },
        { name: 'mysql', value: 3 },
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart(theme) {
      this.chart = echarts.init(this.$el, !theme ? 'macarons' : theme)
      this.setOptions()
    },
    setOptions() {
      this.chart.setOption(initOption(this.data))
    }
  },
}
</script>
