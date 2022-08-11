import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BiMap from '../views/BiMap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/BiMap',
    name: 'BiMap',
    component: BiMap
  }
]

const router = new VueRouter({
  routes
})

export default router
