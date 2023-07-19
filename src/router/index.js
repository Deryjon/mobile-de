import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage/HomeView.vue'
const LogView = () => import("../views/LogoutPage/LogView.vue");
const ForgetView = () => import("../views/LogoutPage/ForgetView.vue");

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
      path: '/forget',
      name: 'forget',
      component: ForgetView
    },
  ]
})

export default router
