<template>
  <common-card title="Spend Top Index">
    <template>
      <div id="spendtop-chart"></div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  mixins: [commonCardMixin],
  mounted () {
  const chartDom = document.getElementById('spendtop-chart')
  const chart = this.$echarts.init(chartDom)
  chart.setOption({
    color: ['#F94D45'],
    xAxis: {
      type: 'category',
      data: ['Blackpool', 'Wakefield', 'Huddersfield', 'Telford', 'Middlesbrough', 'Barnsley', 'Burnley', 'Hull', 'Liverpool'],
      show: false
    },
    yAxis: {
      show: false
    },
    series: [{
      type: 'bar',
      data: [195, 190, 144, 140, 139, 138, 138, 135, 134],
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
  #spendtop-chart {
      height: 100%;
      width: 100%;
    }
</style>
