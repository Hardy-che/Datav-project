<template>
  <common-card title="Footfall Bottom Index">
    <template>
      <div id="footfallbot-chart"></div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('footfallbot-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      color: ['#7EF940'],
      xAxis: {
        type: 'category',
        data: ['London', 'Birmingham', 'Slough', 'Coventry', 'Luton', 'Bradford', 'Reading', 'Manchester', 'Milton Keynes'],
        show: false
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'bar',
        data: [59, 77, 78, 79, 81, 83, 84, 87, 89],
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
  #footfallbot-chart {
    height: 100%;
    width: 100%;
  }
</style>
