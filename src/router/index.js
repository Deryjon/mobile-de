import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage/HomeView.vue'
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
      component: import("/views/LogoutPage/LogView.vue")
    },
    {
      path: '/car-filter',
      name: 'car-filter',
      component: import("/views/CarFilterPage/CarFilterView.vue")
    },
		{
      path: '/motorbike-filter',
      name: 'motorbike-filter',
      component: import("/views/MotorbikeFilterPage/MotorbikeFilterView.vue")
    },
		{
      path: '/vans-filter',
      name: 'vans-filter',
      component: import("/views/VansFilterPage/VansFilterView.vue")
    },
		{
      path: '/my-profile',
      name: 'profile-settings',
      component: import("/views/SettingProfilePage/SettingsProfilePage.vue")
    },
  ]
})

export default router
