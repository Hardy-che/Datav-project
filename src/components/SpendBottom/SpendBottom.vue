<template>
  <common-card title="Spend Bottom Index">
    <template>
      <div id="spendbot-chart"></div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  mixins: [commonCardMixin],
  mounted () {
  const chartDom = document.getElementById('spendbot-chart')
  const chart = this.$echarts.init(chartDom)
  chart.setOption({
    color: ['#7EF940'],
    xAxis: {
      type: 'category',
      data: ['Aldershot', 'Slough', 'Oxford', 'London', 'Newport', 'Edinburgh', 'Basildon', 'Peterborough', 'Coventry'],
      show: false
    },
    yAxis: {
      show: false
    },
    series: [{
      type: 'bar',
      data: [70, 98, 100, 101, 102, 102, 102, 103, 104],
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
  #spendbot-chart {
      height: 100%;
      width: 100%;
    }
</style>
