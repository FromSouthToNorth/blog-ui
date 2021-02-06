export function initOption(echarts, monthArray, pushData, flowData, commentData) {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['发布数', '浏览数', '评论数']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: monthArray
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '发布数',
        type: 'line',
        stack: '总量',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#18FFFF'
          }, {
            offset: 1,
            color: '#00B8D4'
          }])
        },
        emphasis: {
          focus: 'series'
        },
        data: pushData
      },
      {
        name: '浏览数',
        type: 'line',
        stack: '总量',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#00E676'
          }, {
            offset: 1,
            color: '#00C853'
          }])
        },
        emphasis: {
          focus: 'series'
        },
        data: flowData
      },
      {
        name: '评论数',
        type: 'line',
        stack: '总量',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#F50057'
          }, {
            offset: 1,
            color: '#C51162'
          }])
        },
        emphasis: {
          focus: 'series'
        },
        data: commentData
      },
    ]
  }
}
