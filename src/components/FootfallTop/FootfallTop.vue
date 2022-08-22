<template>
  <common-card title="Footfall Top Index">
    <template>
      <div id="footfalltop-chart"></div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('footfalltop-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      color: ['#F94D45'],
      xAxis: {
        type: 'category',
        data: ['Plymouth', 'Blackpool', 'Southend', 'Dundee', 'Burnley', 'Barnsley', 'Swansea', 'York', 'Sunderland'],
        show: false
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'bar',
        data: [165, 160, 143, 140, 138, 134, 132, 130, 126],
        barWidth: '60%'
      }],
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      tooltip: {}
    })
  }
}
</script>

<style lang="scss" scoped>
  #footfalltop-chart {
    height: 100%;
    width: 100%;
  }
</style>
