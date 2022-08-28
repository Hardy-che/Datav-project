<template>
    <ve-bmap
        :settings = "chartSettings"
        :title = "title"
        :tooltip = "{}"
        :series = "chartSeries"
        height = "100%"
        :events = "{click: handleChartsEvent}"
    ></ve-bmap>
</template>

<script>
/* eslint-disable */
    export default {
        props:{
            scatterPointArr: {
            type: Array,
            required: true
            }
        },

        data() {
            return {
                /* eslint-disable */
                chartSettings: {
                    key: 'nZfKjSpI5NtKcZIGFGRsTincMAOWMcUM',
                    bmap: {
                        center: [-4.54613, 54.25859],
                        zoom: 6.9,
                        roam: false,
                        mapStyle: {
                        styleJson: [ {
                            featureType: 'water',
                            elementType: 'all',
                            stylers: {
                                color: '#044161'
                            }
                            },
                            {
                            featureType: 'land',
                            elementType: 'all',
                            stylers: {
                                color: '#004981'
                            }
                            },
                            {
                            featureType: 'boundary',
                            elementType: 'geometry',
                            stylers: {
                                color: '#064f85'
                            }
                            },
                            {
                            featureType: 'railway',
                            elementType: 'all',
                            stylers: {
                                visibility: 'off'
                            }
                            },
                            {
                            featureType: 'highway',
                            elementType: 'geometry',
                            stylers: {
                                color: '#004981'
                            }
                            },
                            {
                            featureType: 'highway',
                            elementType: 'geometry.fill',
                            stylers: {
                                color: '#005b96',
                                lightness: 1
                            }
                            },
                            {
                            featureType: 'highway',
                            elementType: 'labels',
                            stylers: {
                                visibility: 'off'
                            }
                            },
                            {
                            featureType: 'arterial',
                            elementType: 'geometry',
                            stylers: {
                                color: '#004981'
                            }
                            },
                            {
                            featureType: 'arterial',
                            elementType: 'geometry.fill',
                            stylers: {
                                color: '#00508b'
                            }
                            },
                            {
                            featureType: 'poi',
                            elementType: 'all',
                            stylers: {
                                visibility: 'off'
                            }
                            },
                            {
                            featureType: 'green',
                            elementType: 'all',
                            stylers: {
                                color: '#056197',
                                visibility: 'off'
                            }
                            },
                            {
                            featureType: 'subway',
                            elementType: 'all',
                            stylers: {
                                visibility: 'off'
                            }
                            },
                            {
                            featureType: 'manmade',
                            elementType: 'all',
                            stylers: {
                                visibility: 'off'
                            }
                            },
                            {
                            featureType: 'local',
                            elementType: 'all',
                            stylers: {
                                visibility: 'off'
                            }
                            },
                            {
                            featureType: 'arterial',
                            elementType: 'labels',
                            stylers: {
                                visibility: 'off'
                            }
                            },
                            {
                            featureType: 'boundary',
                            elementType: 'geometry.fill',
                            stylers: {
                                color: '#029fd4'
                            }
                            },
                            {
                            featureType: 'building',
                            elementType: 'all',
                            stylers: {
                                color: '#1a5787'
                            }
                            },
                            {
                            featureType: 'label',
                            elementType: 'all',
                            stylers: {
                                visibility: 'off'
                            }
                            }]
                        }
                    }
                },

                title: {
                    text: 'UK Economic Recovery Trend After Covid-19',
                    subtext: 'city data analysis',
                    sublink: 'https://www.centreforcities.org/data/',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },

                chartSeries: [{
                    name: 'spend index',
                    type: 'scatter',
                    coordinateSystem: 'bmap',
                    data: this.scatterPointArr,
                    encode: {
                        value: 2,
                    },
                    itemStyle: {
                        color: 'green'
                    },
                    symbolSize: function(val) {
                        return val[2] / 15
                    },
                    label: {
                        show: false,
                        position: 'right',
                        formatter: function(v) {
                            return v.data.name
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                }]
            }
        },
        methods: {
            handleChartsEvent({name}) {
                this.$emit('cityClick', name)
            }
            // handleChartsEvent(i) {
            //     console.log(i)
            // }
        }
    }
</script>

