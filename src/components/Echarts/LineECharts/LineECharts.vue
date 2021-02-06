<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import resize from '../mixins/resize'
require('echarts/theme/macarons')
import { initOption } from './lineOptions'

export default {
  mixins: [resize],
  name: 'LineEcharts',
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
  data() {
    return {
      chart: null,
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
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions()
    },
    setOptions() {
      this.chart.setOption(initOption(echarts, this.monthArray, this.pushData, this.flowData, this.commentData))
    }
  },
}
</script>
