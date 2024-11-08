import { createRouter, createWebHistory } from 'vue-router'
import MapView from '../views/MapView.vue'
import KeplerView from '@/views/KeplerView.vue'
import YandexMapView from '@/views/YandexMapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MapView,
    },
    {
      path: '/kepler/',
      name: 'keplermap',
      component: KeplerView,
    },
    {
      path: '/yandex/',
      name: 'yandexmap',
      component: YandexMapView,
    },
  ],
})

export default router
