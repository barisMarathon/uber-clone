import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DirectionsView from '@/views/DirectionsView.vue'
import MapView from '@/views/MapView.vue'
import RideView from '@/views/RideView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/directions',
    name: 'directions',
    component: DirectionsView
  },
  {
    path: '/map',
    name: 'map',
    component: MapView
  },
  {
    path: '/ride',
    name: 'ride',
    component: RideView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
