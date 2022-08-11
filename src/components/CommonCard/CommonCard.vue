<template>
    <div class="common-card">
        <div class="title">{{title}}</div>
        <div class="chart">
            <slot></slot>
        </div>
        <div class="line"></div>
        <div class="period">
            <slot name="footer"></slot>
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
        font-size: 25px;
        color: #000;
    }

    .chart {
        height: 150px;
        // background-color: aqua;
    }

    .line {
        margin: 10px, 0;
        border-top: 1px solid #eee;
    }

    .period {
        font-size: 12px;
        color: #666;
    }
</style>
