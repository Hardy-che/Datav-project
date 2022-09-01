<template>
    <div class="map-view">
        <div class="left">
            <b-map-scatter
                :scatterPointArr="scatterPointArr"
                @cityClick="handelCityClick"
            ></b-map-scatter>
        </div>
        <div class="right">
            <el-card shadow="hover">
                <template v-slot:header>
                    <div class="menu-con">
                        <el-menu
                            :default-active="activeMenuIndex"
                            mode="horizontal"
                            @select="onMenuSel"
                        >
                            <el-menu-item :index='0'>unemployment</el-menu-item>
                            <el-menu-item :index='1'>inflation</el-menu-item>
                        </el-menu>
                    </div>
                </template>
                <template>
                    <div class="chart-view">
                        <div class="line-chart-view">
                            <line-chart
                                :xDataList="xAxisList[activeMenuIndex]"
                                :title="allTitleList[activeMenuIndex].title"
                                :subText="allTitleList[activeMenuIndex].subText"
                                :lineChartDataList="lineChartDataList[activeMenuIndex]"
                            ></line-chart>
                        </div>
                        <div class="info-relate">
                            <div class="info-title">Polic Timeline</div>
                            <div class="info-list" v-for="item in policyData" :key="item.no">
                                <div class="info-list-policy">{{item.policy}}</div>
                                <div class="info-list-date">{{item.date}}</div>
                            </div>
                        </div>
                    </div>
                </template>
            </el-card>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import BMapScatter from '../BMapScatter/BMapScatter.vue'
import LineChart from '../LineChart/LineChart.vue'

const MapScatterPointArr = [
  {
    name: 'London',
    value: [-0.126681, 51.505429, 59]
  },
  {
    name: 'Birmingham',
    value: [-1.881245, 52.495027, 77]
  },
  {
    name: 'Glasgow',
    value: [-4.232459, 55.855537, 95]
  },
  {
    name: 'Liverpool',
    value: [-2.980125, 53.414752, 102]
  },
  {
    name: 'Bristol',
    value: [-2.592853, 51.454007, 91]
  },
  {
    name: 'Sheffield',
    value: [-1.473726, 53.383861, 96]
  },
  {
    name: 'Manchester',
    value: [-2.246704, 53.479672, 87]
  },
  {
    name: 'Leeds',
    value: [-1.545639, 53.815606, 92]
  },
  {
    name: 'Edinburgh',
    value: [-3.188862, 55.954966, 110]
  },
  {
    name: 'Leicester',
    value: [-1.133421, 52.638231, 92]
  },
  {
    name: 'Bradford',
    value: [-1.750743, 53.795838, 83]
  },
  {
    name: 'Cardiff',
    value: [-3.175827, 51.486942, 103]
  },
  {
    name: 'Conventry',
    value: [-1.510941, 52.408224, 79]
  },
  {
    name: 'Nottingham',
    value: [-1.162039, 52.954458, 96]
  }
]

// unemploymentList data
// // xaxis scale
const UnemploymentXAxisList = [
  '2020 January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  '2021 January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  '2022 January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July'
]
// // series data
const unemploymentLineChartDataList = [
  {
    name: 'London',
    type: 'line',
    data: [
      2.8, 2.9, 3.0, 4.8, 7.3, 7.2, 7.4, 7.6, 7.6, 7.5, 7.7, 7.8, 7.7, 8.1, 8.1,
      8.0, 7.5, 7.0, 6.8, 6.5, 6.1, 5.9, 5.6, 5.4, 5.2, 5.2, 5.0, 4.7, 4.6, 4.5,
      4.5
    ]
  },
  {
    name: 'Birmingham',
    type: 'line',
    data: [
      5.457, 5.579, 5.705, 7.919, 9.371, 9.321, 9.464, 9.637, 9.647, 9.532,
      9.652, 9.608, 9.554, 9.896, 9.906, 9.764, 9.391, 9.014, 8.833, 8.61,
      8.334, 8.105, 7.846, 7.6, 7.472, 7.528, 7.431, 7.232, 7.063, 6.955, 6.948
    ]
  },
  {
    name: 'Glasgow',
    type: 'line',
    data: [
      3.632, 3.719, 3.632, 3.642, 3.68, 3.722, 3.763, 3.828, 3.865, 6.193,
      7.085, 7.092, 7.382, 7.489, 7.304, 6.978, 7.052, 6.958, 6.864, 7.039,
      7.071, 6.927, 6.551, 6.118, 6.02, 5.813, 5.398, 5.14, 4.988, 4.839, 4.76,
      4.726, 4.521, 4.283, 4.12, 4.032, 4.091
    ]
  },
  {
    name: 'Bradford',
    type: 'line',
    data: [
      4.89086, 5.10736, 5.13894, 7.41974, 8.98036, 9.06005, 9.14875, 9.30361,
      9.32616, 9.21491, 9.26452, 9.26151, 9.28858, 9.61935, 9.67949, 9.62085,
      9.16529, 8.83302, 8.75935, 8.50977, 8.16848, 7.99858, 7.71442, 7.48138,
      7.29645, 7.29344, 7.20925, 7.1025, 6.97771, 6.87246, 6.82285
    ]
  },
  {
    name: 'Bristol',
    type: 'line',
    data: [
      2.15291, 2.18095, 2.19397, 4.03245, 5.4724, 5.29215, 5.40631, 5.56252,
      5.48542, 5.23908, 5.24609, 5.18902, 5.00877, 5.29716, 5.26612, 5.16699,
      4.78447, 4.38593, 4.30983, 4.11556, 3.88826, 3.74106, 3.59286, 3.46168,
      3.33751, 3.33651, 3.22236, 3.02509, 2.91995, 2.85786, 2.8078
    ]
  },
  {
    name: 'Cardiff',
    type: 'line',
    data: [
      3.24678, 3.32528, 3.31119, 5.42271, 6.30435, 6.21578, 6.44324, 6.53986,
      6.46135, 6.28019, 6.41506, 6.37279, 6.24396, 6.49557, 6.47142, 6.36473,
      6.05878, 5.60185, 5.4066, 5.157, 4.84098, 4.66385, 4.51288, 4.34984,
      4.30958, 4.3599, 4.2653, 3.90298, 3.77013, 3.74195, 3.71377
    ]
  },
  {
    name: 'Conventry',
    type: 'line',
    data: [
      2.94013, 3.02804, 3.12572, 4.72374, 6.11469, 6.18307, 6.28661, 6.38819,
      6.45461, 6.43703, 6.41945, 6.41749, 6.32763, 6.68123, 6.73788, 6.6402,
      6.28074, 6.04632, 5.90957, 5.69663, 5.44852, 5.22777, 5.06953, 4.88198,
      4.79993, 4.87808, 4.76868, 4.70812, 4.62216, 4.61825, 4.59481
    ]
  },
  {
    name: 'Edinburgh',
    type: 'line',
    data: [
      1.87522, 1.92813, 1.97698, 3.79385, 4.82373, 4.78573, 4.96349, 5.11274,
      4.96077, 4.79388, 4.93092, 4.82508, 4.74231, 4.99741, 5.00012, 4.92007,
      4.532, 4.10186, 3.98789, 3.76943, 3.4587, 3.27416, 3.09506, 2.91323,
      2.82911, 2.80061, 2.72463, 2.53195, 2.42068, 2.39762, 2.40304
    ]
  },
  {
    name: 'Leeds',
    type: 'line',
    data: [
      3.25501, 3.39908, 3.48072, 5.53803, 6.73285, 6.77127, 6.875, 6.92014,
      6.88748, 6.72324, 6.73093, 6.72997, 6.75014, 7.01715, 7.03155, 6.90861,
      6.56669, 6.17098, 6.03939, 5.81753, 5.54476, 5.29119, 5.07989, 4.90413,
      4.78695, 4.78983, 4.69571, 4.53915, 4.42774, 4.33169, 4.35954
    ]
  },
  {
    name: 'Leicester',
    type: 'line',
    data: [
      2.69116, 2.80757, 2.86049, 4.85617, 6.24711, 6.25013, 6.44063, 6.59182,
      6.56007, 6.36504, 6.36352, 6.31514, 6.25769, 6.55856, 6.66741, 6.62206,
      6.24711, 5.88577, 5.71341, 5.5078, 5.27799, 5.11773, 4.94084, 4.74429,
      4.65963, 4.69894, 4.5674, 4.40866, 4.34969, 4.19397, 4.17583
    ]
  },
  {
    name: 'Liverpool',
    type: 'line',
    data: [
      4.52077, 4.65095, 4.74427, 7.58415, 8.75352, 8.55075, 8.60375, 8.69476,
      8.66826, 8.51158, 8.65213, 8.5231, 8.4413, 8.72702, 8.80882, 8.67978,
      8.3019, 7.85259, 7.6671, 7.4148, 7.02079, 6.76272, 6.48507, 6.24083,
      6.13484, 6.16594, 6.05995, 5.76271, 5.62101, 5.48967, 5.47124
    ]
  },
  {
    name: 'Manchester',
    type: 'line',
    data: [
      3.82718, 4.06158, 4.14282, 6.70714, 7.88658, 7.77421, 7.87102, 7.97841,
      7.9258, 7.75211, 7.86728, 7.79039, 7.7381, 8.09016, 8.08953, 7.97529,
      7.54791, 7.09873, 6.95866, 6.73018, 6.43197, 6.21501, 5.98217, 5.76396,
      5.65751, 5.71291, 5.61424, 5.38358, 5.28615, 5.20989, 5.18561
    ]
  },
  {
    name: 'Nottingham',
    type: 'line',
    data: [
      3.38872, 3.53107, 3.52218, 5.25157, 6.48605, 6.35037, 6.45491, 6.52164,
      6.44046, 6.27697, 6.28809, 6.16242, 6.08902, 6.39597, 6.42044, 6.3259,
      6.00004, 5.6386, 5.52738, 5.37502, 5.14814, 4.95907, 4.7689, 4.59762,
      4.47306, 4.52089, 4.42635, 4.21949, 4.12385, 4.046, 4.01597
    ]
  },
  {
    name: 'Sheffield',
    type: 'line',
    data: [
      3.07163, 3.15169, 3.28362, 5.32258, 6.31976, 6.15963, 6.28337, 6.36071,
      6.29429, 6.16236, 6.31521, 6.30884, 6.23151, 6.499, 6.51902, 6.41803,
      6.07592, 5.79478, 5.71745, 5.58097, 5.37808, 5.15698, 4.96501, 4.7885,
      4.69296, 4.71389, 4.60926, 4.45277, 4.28172, 4.14797, 4.11612
    ]
  }
]
// // title and subtitle
const unemploymentTitleObj = {
  title: 'Claimant Count',
  subText: 'Percentage of population receiving claimant and work-age population'
}

// inflationList data
// // xaxis scale
const InflationXAxisList = [
  'May, 21',
  'Jun, 21',
  'Jul, 21',
  'Aug, 21',
  'Sep, 21',
  'Oct, 21',
  'Nov, 21',
  'Dec, 21',
  'Jan, 22',
  'Feb, 22',
  'Mar, 22',
  'Apr, 22',
  'May, 22',
  'Jun, 22',
  'Jul, 22'
]

// // serises data
const inflationLineChartDataList = [
  {
    name: 'Birmingham',
    type: 'line',
    data: [
      0.021, 0.026, 0.021, 0.034, 0.033, 0.046, 0.054, 0.059, 0.057, 0.065,
      0.075, 0.095, 0.096, 0.1, 0.108
    ]
  },
  {
    name: 'Bradford',
    type: 'line',
    data: [
      0.021, 0.026, 0.021, 0.033, 0.032, 0.046, 0.055, 0.059, 0.058, 0.065,
      0.076, 0.098, 0.099, 0.103, 0.111
    ]
  },
  {
    name: 'Bristol',
    type: 'line',
    data: [
      0.021, 0.026, 0.021, 0.035, 0.033, 0.044, 0.052, 0.058, 0.056, 0.063,
      0.073, 0.09, 0.091, 0.095, 0.103
    ]
  },
  {
    name: 'Cardiff',
    type: 'line',
    data: [
      0.021, 0.026, 0.021, 0.034, 0.033, 0.043, 0.052, 0.057, 0.055, 0.063,
      0.073, 0.089, 0.09, 0.094, 0.102
    ]
  },
  {
    name: 'Coventry',
    type: 'line',
    data: [
      0.021, 0.026, 0.022, 0.034, 0.033, 0.045, 0.054, 0.059, 0.058, 0.065,
      0.075, 0.094, 0.095, 0.099, 0.107
    ]
  },
  {
    name: 'Edinburgh',
    type: 'line',
    data: [
      0.02, 0.025, 0.02, 0.034, 0.032, 0.042, 0.049, 0.055, 0.053, 0.06, 0.07,
      0.085, 0.085, 0.09, 0.098
    ]
  },
  {
    name: 'Glasgow',
    type: 'line',
    data: [
      0.022, 0.026, 0.022, 0.034, 0.033, 0.047, 0.055, 0.06, 0.058, 0.066,
      0.076, 0.099, 0.099, 0.104, 0.112
    ]
  },
  {
    name: 'Leeds',
    type: 'line',
    data: [
      0.021, 0.026, 0.021, 0.035, 0.033, 0.045, 0.053, 0.058, 0.056, 0.063,
      0.074, 0.092, 0.092, 0.097, 0.105
    ]
  },
  {
    name: 'Leicester',
    type: 'line',
    data: [
      0.022, 0.026, 0.022, 0.034, 0.033, 0.046, 0.055, 0.06, 0.059, 0.066,
      0.076, 0.097, 0.098, 0.102, 0.11
    ]
  },
  {
    name: 'Liverpool',
    type: 'line',
    data: [
      0.021, 0.025, 0.02, 0.033, 0.031, 0.043, 0.051, 0.056, 0.055, 0.063,
      0.073, 0.092, 0.092, 0.096, 0.104
    ]
  },
  {
    name: 'London',
    type: 'line',
    data: [
      0.021, 0.025, 0.021, 0.036, 0.034, 0.042, 0.048, 0.055, 0.051, 0.058,
      0.069, 0.079, 0.079, 0.083, 0.091
    ]
  },
  {
    name: 'Manchester',
    type: 'line',
    data: [
      0.021, 0.026, 0.021, 0.034, 0.033, 0.044, 0.052, 0.057, 0.056, 0.063,
      0.073, 0.09, 0.091, 0.095, 0.104
    ]
  },
  {
    name: 'Nottingham',
    type: 'line',
    data: [
      0.021, 0.026, 0.021, 0.034, 0.033, 0.045, 0.054, 0.059, 0.057, 0.064,
      0.075, 0.095, 0.096, 0.1, 0.108
    ]
  },
  {
    name: 'Sheffield',
    type: 'line',
    data: [
      0.021, 0.026, 0.021, 0.034, 0.033, 0.045, 0.053, 0.058, 0.057, 0.064,
      0.074, 0.093, 0.094, 0.098, 0.106
    ]
  }
]
// // title and subtitle
const inflationTitleObj = {
  title: 'inflationt',
  subText: 'Index of price inflation'
}

// all title stack
const allTitleList = [unemploymentTitleObj, inflationTitleObj]

// all xaxis stack
const AllXAxisList = [UnemploymentXAxisList, InflationXAxisList]

// all series stack
const AllLineChartDataList = [
  unemploymentLineChartDataList,
  inflationLineChartDataList
]

export default {
    name: 'MapView',
    components: {
        BMapScatter,
        LineChart
    },
    data() {
        return {
            scatterPointArr: MapScatterPointArr,
            activeMenuIndex: 0,
            xAxisList: AllXAxisList,
            allTitleList: allTitleList,
            lineChartDataList: [[], []],
            // chartOption: {
            //     title: {
            //         text: 'Claimant Count',
            //         subtext: 'Percentage of population receiving claimant and work-age population'
            //     },
            //     xAxis: {
            //         type: 'category',
            //         data: ['2020 January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', '2021 January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', '2022 January', 'February', 'March', 'April', 'May', 'June', 'July']
            //     },
            //     yAxis: {
            //         type: 'value'
            //     },
            //     tooltip: {
            //         trigger: 'axis'
            //     },
            //     grid: {
            //         left: '3%',
            //         right: '4%',
            //         bottom: '3%',
            //         containLabel: true
            //     },
            //     series: {
            //         name: 'London',
            //         data: [2.8, 2.9, 3.0, 4.8, 7.3, 7.2, 7.4, 7.6, 7.6, 7.5, 7.7, 7.8, 7.7, 8.1, 8.1, 8.0, 7.5, 7.0, 6.8, 6.5, 6.1, 5.9, 5.6, 5.4, 5.2, 5.2, 5.0, 4.7, 4.6, 4.5, 4.5],
            //         type: 'line'
            //     }
            // },
            policyData: [
                {
                    no: 1,
                    policy: 'Restrictions eased',
                    date: '20 January'
                },
                {
                    no: 2,
                    policy: 'Plan B working from home guidance',
                    date: '13 Dec'
                },
                {
                    no: 3,
                    policy: 'Further re-opening of businesses',
                    date: '17 May'
                },
                {
                    no: 4,
                    policy: 'National lockdown partially lifted',
                    date: '12 April'
                },
                {
                    no: 5,
                    policy: 'National lockdown begins',
                    date: '6 January'
                },
                {
                    no: 6,
                    policy: 'Second lockdown in England begins',
                    date: '5 Nov'
                },
                {
                    no: 7,
                    policy: 'Eat Out to Help Out begins',
                    date: '3 August'
                },
                {
                    no: 8,
                    policy: 'VAT cut on certain leisure activities',
                    date: '15 July'
                },
                {
                    no: 9,
                    policy: 'Pubs re-open in England',
                    date: '4 July'
                },
                {
                    no: 10,
                    policy: 'Non-essential retail re-opens',
                    date: '15 June'
                },
                {
                    no: 11,
                    policy: 'First easing of restrictions',
                    date: '13 May'
                },
                {
                    no: 12,
                    policy: 'Lockdown',
                    date: '24 March'
                },
                {
                    no: 13,
                    policy: 'PM urgest working from home',
                    date: '16 March'
                }
            ]
        }
    },

    methods: {
        onMenuSel(index) {
            this.activeMenuIndex = index
        },
        // click add data
        handelCityClick(cityName) {
            const activeIndex = this.activeMenuIndex
            // Find if the current city data is available in the existing line chart array
            const findIndex = this.lineChartDataList[activeIndex].findIndex(
                lineObj => lineObj.name === cityName
            )
            if (findIndex === -1) {
                // Find the index of the corresponding city data in all data set
                const clickCityLineChartData = AllLineChartDataList[activeIndex].find(
                lineObj => lineObj.name === cityName
                )
                // add it in existing data array
                if (clickCityLineChartData)
                    this.lineChartDataList[activeIndex].push(clickCityLineChartData)
            } 
            // if the city date existing, delete it
            else {
                this.lineChartDataList[activeIndex].splice(findIndex, 1)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .map-view {
        margin-top: 20px;
        height: 600px;
    }
</style>

<style lang="scss" scoped>
    .map-view {
        display: flex;
        width: 100%;
        .left {
            flex: 0 0 40%;
            height: 500px;
        }
        .right {
            width: 100%;
            margin-left: 20px;
        }
    }
    .chart-view {
        display: flex;
        height: 500px;
        .line-chart-view {
            flex: 0, 0, 60%;
            width: 60%;
        }
        .info-title {
            font-weight: 500;
            font-size: 24px;
            color: #666;
        }
        .info-relate {
            flex: 1;
            width: 100%;
        }
        .info-list {
            display: flex;
            font-size: 12px;
            margin-top: 10px;
            justify-content: space-between;
        }
    }
</style>
