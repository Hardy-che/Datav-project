<template>
  <div class="chart-box">
    <div class="line-chart" ref="chart"></div>
  </div>
</template>

<script>
/* eslint-disable */
    export default {
        name: 'LineChart',
        props: {
            title: {
                type: String,
                require: true
            },
            subText: {
                type: String,
                require: true
            },
            lineChartDataList: {
                type: Array,
                required: true
            },
            xDataList: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                chartOption: {
                    legend: {
                        bottom: '0%',
                        textStyle: {
                            fontSize: '14'
                        }
                    },
                    title: {
                            text: this.title,
                            subtext: this.subText
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.xDataList
                        
                    },
                    yAxis: {
                        type: 'value'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '2%',
                        right: '4%',
                        bottom: '10%',
                        containLabel: true
                    },
                    series: this.lineChartDataList
                }
            }
        },
        mounted() {
            this.initLineChart()
        },
        methods: {
            initLineChart() {
                this.myChart = this.$echarts.init(this.$refs.chart)
                this.myChart.setOption(this.chartOption)
            },
            updateLineChartXAxisData(newXAxisData) {
                this.chartOption.title.text = this.title
                this.chartOption.title.subtext = this.subText
                this.chartOption.xAxis.data = newXAxisData
                this.myChart.setOption(this.chartOption, true)
            },
            updateLineChartData(newDataList) {
                this.chartOption.series = newDataList
                this.myChart.setOption(this.chartOption, true)
            }
        },
        watch: {
            // update xaxis data
            xDataList: {
                deep: true,
                handler(newXAxisData) {
                    this.updateLineChartXAxisData(newXAxisData)
                }
            },
            lineChartDataList: {
                deep: true,
                // updata chart series
                handler(newDataList) {
                    this.updateLineChartData(newDataList)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .chart-box {
        width: 100%;
        height: 100%;
    }
    .line-chart {
        width: 100%;
        height: 100%;
    }
</style>
