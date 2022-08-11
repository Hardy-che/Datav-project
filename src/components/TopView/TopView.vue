<template>
    <div class = "top-view">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card shadow="hover">
                    <footfall-top/>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <spend-top/>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <footfall-bottom/>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <spend-bottom/>
                </el-card>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import FootfallTop from '../FootfallTop/FootfallTop.vue'
import SpendTop from '../SpendTop/SpendTop.vue'
import FootfallBottom from '../FootfallBottom/FootfallBottom.vue'
import SpendBottom from '../SpendBottom/SpendBottom.vue'

export default {
  components: {
    FootfallTop,
    SpendTop,
    FootfallBottom,
    SpendBottom
  }
}
</script>

<style lang="scss" scoped></style>
