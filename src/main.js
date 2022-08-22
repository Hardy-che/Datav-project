import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts'
import './style/style.css'
import * as echarts from 'echarts'
import VueECharts from 'vue-echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.component('v-charts', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
