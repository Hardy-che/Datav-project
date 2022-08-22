<template>
    <ve-bmap
        :settings = "chartSettings"
        :title = "title"
        :tooltip = "{}"
        :series = "chartSeries"
        height = "100%"
    ></ve-bmap>
</template>

<script>
    const dataPoint = [{
        name: 'Nottingham',
        value: [-1.166538, 52.953889, 112]
    }, {
        name: 'Blackpool',
        value: [-8.048796, 52.092831, 195]
    }, {
        name: 'Wakefield',
        value: [-1.492722, 53.685322, 190]
    }, {
        name: 'Huddersfield',
        value: [-8.315439, 51.797593, 144]
    }]

    export default {
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
                        styleJson: [{
                            'featureType': 'water',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                            }, {
                            'featureType': 'land',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#f3f3f3',
                            }
                            }, {
                            'featureType': 'railway',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                            }, {
                            'featureType': 'highway',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#fdfdfd'
                            }
                            }, {
                            'featureType': 'highway',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                            }, {
                            'featureType': 'arterial',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#fefefe'
                            }
                            }, {
                            'featureType': 'arterial',
                            'elementType': 'geometry.fill',
                            'stylers': {
                                'color': '#fefefe'
                            }
                            }, {
                            'featureType': 'poi',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                            }, {
                            'featureType': 'green',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                            }, {
                            'featureType': 'subway',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                            }, {
                            'featureType': 'manmade',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                            }, {
                            'featureType': 'local',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                            }, {
                            'featureType': 'arterial',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                            }, {
                            'featureType': 'boundary',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#fefefe'
                            }
                            }, {
                            'featureType': 'building',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                            }, {
                            'featureType': 'label',
                            'elementType': 'labels.text.fill',
                            'stylers': {
                                'color': '#999999'
                            }
                            }]
                        }
                    }
                },

                title: {
                    text: 'UK Economic Recovery Trend After Covid-19',
                    subtext: 'city data analysis',
                    sublink: 'https://www.centreforcities.org/data/',
                    left: 'center'
                },

                chartSeries: [{
                    name: 'spend index',
                    type: 'scatter',
                    coordinateSystem: 'bmap',
                    data: dataPoint,
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
        }
    }
</script>
