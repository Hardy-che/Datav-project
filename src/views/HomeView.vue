<template>
  <div class="home">
    <top-view></top-view>
    <middle-view></middle-view>
    <botton-view></botton-view>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from '../components/TopView/TopView.vue'
import MiddleView from '../components/MiddleView/MiddleView.vue'
import BottonView from '../components/BottonView/BottonView.vue'
import MapView from '../components/MapView/MapView.vue'

export default {
  name: 'HomeView',
  components: {
    TopView,
    MiddleView,
    BottonView,
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
