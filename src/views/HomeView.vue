<template>
  <div class="home">
    <top-view></top-view>
    <middle-view></middle-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from '../components/TopView/TopView.vue'
import MiddleView from '../components/MiddleView/MiddleView.vue'
import BottomView from '../components/BottomView/BottomView.vue'
import MapView from '../components/MapView/MapView.vue'

export default {
  name: 'HomeView',
  components: {
    TopView,
    MiddleView,
    BottomView,
    MapView
  }
}
</script>

<style>
  .home {
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
