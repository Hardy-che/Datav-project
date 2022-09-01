<template>
    <div id="map-chart">
    </div>
</template>

<script>
/* eslint-disable */
    import 'echarts/extension/bmap/bmap'

    // const chartDom
    const data = [
        {name: '海门', value: 9},
        {name: '鄂尔多斯', value: 12},
        {name: '招远', value: 12},
        {name: '舟山', value: 12},
        {name: '齐齐哈尔', value: 14},
        {name: '盐城', value: 15},
        {name: '赤峰', value: 16},
        {name: '青岛', value: 18},
        {name: '乳山', value: 18},
        {name: '金昌', value: 19},
        {name: '泉州', value: 21},
        {name: '莱西', value: 21},
        {name: '日照', value: 21},
    ],

    geoCoordMap = {
        '海门':[121.15,31.89],
        '鄂尔多斯':[109.781327,39.608266],
        '招远':[120.38,37.35],
        '舟山':[122.207216,29.985295],
        '齐齐哈尔':[123.97,47.33],
        '盐城':[120.13,33.38],
        '赤峰':[118.87,42.28],
        '青岛':[120.33,36.07],
        '乳山':[121.52,36.89],
        '金昌':[102.188043,38.520089],
        '泉州':[118.58,24.93],
        '莱西':[120.53,36.86],
        '日照':[119.46,35.42]
    }

    export default {
        
        data() {
            return {
                options: {}
            }
        },
        mounted() {
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            this.options = {
                bmap: {
                    key: 'nZfKjSpI5NtKcZIGFGRsTincMAOWMcUM',
                    center: [104.114129, 37.550339],
                    zoom: 4,
                    roam: false
                },
                series: [
                    {
                        name: 'pm2.5',
                        type: 'scatter',
                        coordinateSystem: 'bmap',
                        data: convertData(data),
                    }
                ],
                tooltip: {}
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
