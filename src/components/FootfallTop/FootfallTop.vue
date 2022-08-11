<template>
  <common-card title="Footfall Top">
    <template>
      <div id="footfall-chart" :style="{width: '100%', height: '100%'}">

      </div>
    </template>
    <template v-slot:footer>
        <span>Record Date:</span>
        <span class="record-date">165</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('footfall-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        data: ['Plymouth', 'Blackpool', 'Southend', 'Dundee', 'Burnley', 'Barnsley', 'Swansea', 'York', 'Sunderland'],
        show: false
      },
      yAxis: {},
      series: [{
        type: 'bar',
        data: [165, 160, 143, 140, 138, 134, 132, 130, 126]
      }],
      grid: {
        top: 10,
        bottom: 10,
        left: 23,
        right: 0
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .footfall-chart {
    height: 100%;
  }
  .record-date {
    margin-left: 5px;
  }
</style>
