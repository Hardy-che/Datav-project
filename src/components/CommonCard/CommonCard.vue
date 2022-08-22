<template>
    <div class="common-card">
        <div class="title">{{title}}</div>
        <div class="chart">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
    .title {
        font-size: 15px;
        color: #000;
    }

    .chart {
        height: 120px;
        // background-color: aqua;
    }
</style>
