<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import resize from '../mixins/resize'

require('echarts/theme/macarons')
require('@/assets/ECharts/walden')

import { initOption } from './barOptions'

export default {
  mixins: [resize],
  name: "BarECharts",
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
      xAxisData: ['生活百态', '闲鱼心事', '学习笔记'],
      seriesData: [12, 6, 17]
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
      this.chart.setOption(initOption(this.xAxisData, this.seriesData))
    }
  },
}
</script>

<style scoped>

</style>
