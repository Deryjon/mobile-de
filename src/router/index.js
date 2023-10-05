import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage/HomeView.vue'
import LogView from "../views/LogoutPage/LogView.vue"
import CarFilter from "../views/CarFilterPage/CarFilterView.vue"
import MotorbikeFilter from "../views/MotorbikeFilterPage/MotorbikeFilterView.vue"
import VansFilter from "../views/VansFilterPage/VansFilterView.vue"
import SettingProfile from "../views/SettingProfilePage/SettingsProfilePage.vue"
import CompanySettings from "../views/CompanyProfilePage/CompanySettingsProfilePage.vue"
import About from "../views/AboutPage/AboutPage.vue"
import NotFound from "../views/NotFoundPage/NotFound404Page.vue"
import CarList from "../views/CarListPage/CarListPage.vue"
import MotorbikeList from "../views/MotorbikeListPage/MotorbikeListPage.vue"
import MotorhomeList from "../views/MotorhomeListPage/MotorhomeListPage.vue"
import EditPage from "../views/EditAdPage/EditAdCarPage.vue"
import EditMotrobikePage from "../views/EditMotorbikeAdPage/EditAdMotorbikePage.vue"
import EditMotorhomesPage from "../views/EditMotorhomesPage/EditAdMotorhomesPage.vue"
import NewsPage from "../views/NewsPage/NewsPage.vue"
import ContactPage from "../views/ContactPage/Contact.vue"
import CarSinglePage from "../views/CarSinglePage/CarSinglePage.vue"
import MotorbikeSinglePage from "../views/MotorbikeSinglePage/MotorbikeSinglePage.vue"
import MotorhomeSinglePage from "../views/MotorhomeSinglePage/MotorhomeSinglePage.vue"
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
		{
      path: '/my-company',
      name: 'company-settings',
      component: CompanySettings
    },
		{
      path: '/about',
      name: 'about-us',
      component: About
    },
		{
      path: '/car-list',
      name: 'car-list',
      component: CarList
    },
		{
      path: '/motorbike-list',
      name: 'motorbike-list',
      component: MotorbikeList
    },
		{
      path: '/motorhome-list',
      name: 'motorhome-list',
      component: MotorhomeList
    },
		{
      path: "/edit/ad/:id",
      name: "edit-ad",
      component: EditPage,
    },
		{
      path: "/edit/ad-motorbike/:id",
      name: "edit-ad-motobike",
      component: EditMotrobikePage,
    },
		{
      path: "/edit/ad-motorhomes/:id",
      name: "edit-ad-motorhomes",
      component: EditMotorhomesPage,
    },
		{
      path: "/news",
      name: "news",
      component: NewsPage,
    },
		{
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
		{
      path: "/car/:id",
      name: "car-single",
      component: CarSinglePage,
    },
		{
      path: "/motorbike/:id",
      name: "motorcycle-single",
      component: MotorbikeSinglePage,
    },
		{
      path: "/motorhome/:id",
      name: "motorhome-single",
      component: MotorhomeSinglePage,
    },
		{
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
})

export default router
