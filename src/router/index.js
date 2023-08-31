import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage/HomeView.vue'
import LogView from "../views/LogoutPage/LogView.vue"
import CarFilter from "../views/CarFilterPage/CarFilterView.vue"
import MotorbikeFilter from "../views/MotorbikeFilterPage/MotorbikeFilterView.vue"
import VansFilter from "../views/VansFilterPage/VansFilterView.vue"
import SettingProfile from "../views/SettingProfilePage/SettingsProfilePage.vue"
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
      component: CarFilter
    },
		{
      path: '/motorbike-filter',
      name: 'motorbike-filter',
      component: MotorbikeFilter
    },
		{
      path: '/vans-filter',
      name: 'vans-filter',
      component: VansFilter
    },
		{
      path: '/my-profile',
      name: 'profile-settings',
      component: SettingProfile
    },
  ]
})

export default router
