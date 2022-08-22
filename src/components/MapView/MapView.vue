<template>
    <div class="map-view">
        <div class="left">
            <b-map-scatter></b-map-scatter>
        </div>
        <div class="right">
            <el-card shadow="hover">
                <template v-slot:header>
                    <div class="menu-con">
                        <el-menu
                            :default-active="activeIndex"
                            mode="horizontal"
                            @select="onMenuSel"
                        >
                            <el-menu-item index="1">unemployment</el-menu-item>
                            <el-menu-item index="2">inflation</el-menu-item>
                        </el-menu>
                    </div>
                </template>
                <template>
                    <div class="chart-view">
                        <v-charts :options="chartOption"></v-charts>
                    </div>
                </template>
            </el-card>
        </div>
    </div>
</template>

<script>
import BMapScatter from '../BMapScatter/BMapScatter.vue'
export default {
    data() {
        return {
            activeIndex: '1',
            chartOption: {
                title: {
                    text: 'Claimant Count',
                    subtext: 'Percentage of population receiving claimant and work-age population'
                },
                xAxis: {
                    type: 'category',
                    data: ['2020 January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', '2021 January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', '2022 January', 'February', 'March', 'April', 'May', 'June', 'July']
                },
                yAxis: {
                    type: 'value'
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                series: {
                    name: 'London',
                    data: [2.8, 2.9, 3.0, 4.8, 7.3, 7.2, 7.4, 7.6, 7.6, 7.5, 7.7, 7.8, 7.7, 8.1, 8.1, 8.0, 7.5, 7.0, 6.8, 6.5, 6.1, 5.9, 5.6, 5.4, 5.2, 5.2, 5.0, 4.7, 4.6, 4.5, 4.5],
                    type: 'line'
                }
            }
        }
    },
    components: {
        BMapScatter
    },
    methods: {
        onMenuSel(index) {
            this.activeIndex = index
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
</style>
