<template>
  <div class="home">
    <top-view></top-view>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from '../components/TopView/TopView.vue'
import MapView from '../components/MapView/MapView.vue'

export default {
  name: 'HomeView',
  components: {
    TopView,
    MapView
  }
}
</script>

<style>
  .home {
    width: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
