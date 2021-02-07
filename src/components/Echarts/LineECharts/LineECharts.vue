<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import resize from '../mixins/resize'

require('echarts/theme/macarons')
require('@/assets/ECharts/walden')

import { initOption } from './lineOptions'

export default {
  mixins: [resize],
  name: 'LineEcharts',
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
        theme = 'walden'
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
      legendData: ['发布数', '浏览数', '评论数'],
      monthArray: ['12', '01', '02', '03'],
      pushData: [6, 8, 2, 9],
      flowData: [2, 6, 34, 12],
      commentData: [5, 6, 0, 7 ],
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
      this.chart.setOption(initOption(echarts, this.legendData, this.monthArray, this.pushData, this.flowData, this.commentData))
    }
  },
}
</script>
