<template>
    <v-charts
        :options="options">
    </v-charts>
</template>

<script>
    import 'echarts/extension/bmap/bmap'

    export default {
        data() {
            return {
                options: {}
            }
        },
        mounted() {
            this.options = {
                bmap: {
                    key: 'nZfKjSpI5NtKcZIGFGRsTincMAOWMcUM',
                    center: [104.114, 37.550],
                    zoom: 5,
                    roam: true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bmap {
        width: 100%;
        height: 100%;
    }
</style>
