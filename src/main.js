import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import VueECharts from 'vue-echarts'
import './plugins/element.js'
import './plugins/vcharts'
import './style/style.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.component('v-charts', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
