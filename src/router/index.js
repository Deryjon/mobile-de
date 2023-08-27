import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage/HomeView.vue'
const LogView = () => import("../views/LogoutPage/LogView.vue");
const CarFilterView = () => import("../views/CarFilterPage/CarFilterView.vue");
const MotorbikeFilterView = () => import("../views/MotorbikeFilterPage/MotorbikeFilterView.vue");
const VansFilterView = () => import("../views/VansFilterPage/VansFilterView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LogView
    },
    {
      path: '/car-filter',
      name: 'car-filter',
      component: CarFilterView
    },
		{
      path: '/motorbike-filter',
      name: 'motorbike-filter',
      component: MotorbikeFilterView
    },
		{
      path: '/vans-filter',
      name: 'vans-filter',
      component: VansFilterView
    },
  ]
})

export default router
