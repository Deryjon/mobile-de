import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePage/HomeView.vue";
import LogView from "../views/LogoutPage/LogView.vue";
import CarFilter from "../views/CarFilterPage/CarFilterView.vue";
import MotorbikeFilter from "../views/MotorbikeFilterPage/MotorbikeFilterView.vue";
import MotorhomesFilter from "../views/MotorhomesFilterPage/MotorhomesFilterView.vue";
import TrucksFilterPage from "../views/TrucksFilterPage/TrucksFilterView.vue";
import TrailerFilterPage from "../views/TrailerFilterPage/TrailerFilterView.vue";
import VanFilterPage from "../views/VansFilterPage/VansFilterView.vue";
import SemiTrucksFilterPage from "../views/SemiTrucksFilterPage/SemitrucksFilterView.vue";
import SemiTrailerFilterPage from "../views/SemiTrailerFilterPage/TrailerFilterView.vue";
import CoachesFilterPage from "../views/CoachesFilterPage/CoachesFilterView.vue";
import AgriculturalsFilterPage from "../views/AgriculturalsFilterPage/AgriculturalFilterView.vue";
import MachinesFilterPage from "../views/MachinesFilterPage/MachinesFilterView.vue";
import ForkliftsFilterPage from "../views/ForkliftsFilterPage/ForkliftsFilterView.vue";
import SettingProfile from "../views/SettingProfilePage/SettingsProfilePage.vue";
import CompanySettings from "../views/CompanyProfilePage/CompanySettingsProfilePage.vue";
import About from "../views/AboutPage/AboutPage.vue";
import NotFound from "../views/NotFoundPage/NotFound404Page.vue";
import CarList from "../views/CarListPage/CarListPage.vue";
import MotorbikeList from "../views/MotorbikeListPage/MotorbikeListPage.vue";
import MotorhomeList from "../views/MotorhomeListPage/MotorhomeListPage.vue";
import TruckList from "../views/TruckListPage/TruckListPage.vue";
import TrailerList from "../views/TrailerListPage/TrailerListPage.vue";
import VanList from "../views/VanListPage/VanListPage.vue";
import SemitrailerList from "../views/SemiTrailerListPage/TrailerListPage.vue";
import SemitruckList from "../views/SemiTruckListPage/TruckListPage.vue";
import CoacheList from "../views/CoacheListPage/CoacheListPage.vue";
import AgriculturalList from "../views/AgruculturalsListPage/AgriculturalsListPage.vue";
import MachineList from "../views/MachineListPage/MachineListPage.vue";
import ForkliftList from "../views/ForkliftListPage/ForkliftListPage.vue";
import EditPage from "../views/EditAdPage/EditAdCarPage.vue";
import EditMotrobikePage from "../views/EditMotorbikeAdPage/EditAdMotorbikePage.vue";
import EditMotorhomesPage from "../views/EditMotorhomesPage/EditAdMotorhomesPage.vue";
import EditTrucksPage from "../views/EditTrucksPage/EditAdTrucksPage.vue";
import EditAdTrailerPage from "../views/EditTrailersPage/EditAdTrailerPage.vue";
import EditVansPage from "../views/EditVansPage/EditAdVansPage.vue";
import EditSemiTrucksPage from "../views/EditSemiTrucksPage/EditAdSemiTrucksPage.vue";
import EditSemiTrailersPage from "../views/EditSemiTrailersPage/EditAdSemiTrailerPage.vue";
import EditAgriculturalsPage from "../views/EditAgriculturalsPage/EditAdAgriculturalsPage.vue";
import EditConstructionsPage from "../views/EditConstructionsPage/EditAdConstructionsPage.vue";
import EditForkliftsPage from "../views/EditForkliftsPage/EditAdForkliftsPage.vue";
import EditCoachesPage from "../views/EditCoachesPage/EditAdCoachesPage.vue";
import NewsPage from "../views/NewsPage/NewsPage.vue";
import ContactPage from "../views/ContactPage/Contact.vue";
import CarSinglePage from "../views/CarSinglePage/CarSinglePage.vue";
import MotorbikeSinglePage from "../views/MotorbikeSinglePage/MotorbikeSinglePage.vue";
import MotorhomeSinglePage from "../views/MotorhomeSinglePage/MotorhomeSinglePage.vue";
import FullNews from "../views/FullNews/FullNews.vue";
import PriceList from "../views/PriceList/PriceList.vue";
import AfterPaymentPage from "../views/AfterPaymentPage/AfterPaymentPage.vue";
import AfterFailedPaymentPage from "../views/AfterPaymentFailedPage/AfterPaymentPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LogView,
    },
    {
      path: "/car-filter",
      name: "car-filter",
      component: CarFilter,
    },
    {
      path: "/motorbike-filter",
      name: "motorbike-filter",
      component: MotorbikeFilter,
    },
    {
      path: "/motorhomes-filter",
      name: "vans-filter",
      component: MotorhomesFilter,
    },
    {
      path: "/trucks-filter",
      name: "trucks-filter",
      component: TrucksFilterPage,
    },
    {
      path: "/trailer-filter",
      name: "trailer-filter",
      component: TrailerFilterPage,
    },
    {
      path: "/van-filter",
      name: "van-filter",
      component: VanFilterPage,
    },
    {
      path: "/semitruck-filter",
      name: "semitruck-filter",
      component: SemiTrucksFilterPage,
    },
    {
      path: "/semitrailer-filter",
      name: "semitrailer-filter",
      component: SemiTrailerFilterPage,
    },
    {
      path: "/coache-filter",
      name: "coache-filter",
      component: CoachesFilterPage,
    },
    {
      path: "/agricultural-filter",
      name: "agricultural-filter",
      component: AgriculturalsFilterPage,
    },
    {
      path: "/machine-filter",
      name: "machine-filter",
      component: MachinesFilterPage,
    },
    {
      path: "/forklift-filter",
      name: "forklift-filter",
      component: ForkliftsFilterPage,
    },
    {
      path: "/my-profile",
      name: "profile-settings",
      component: SettingProfile,
    },
    {
      path: "/my-company",
      name: "company-settings",
      component: CompanySettings,
    },
    {
      path: "/about",
      name: "about-us",
      component: About,
    },
    {
      path: "/car-list",
      name: "car-list",
      component: CarList,
    },
    {
      path: "/motorbike-list",
      name: "motorbike-list",
      component: MotorbikeList,
    },
    {
      path: "/motorhome-list",
      name: "motorhome-list",
      component: MotorhomeList,
    },
    {
      path: "/truck-list",
      name: "truck-list",
      component: TruckList,
    },
    {
      path: "/trailer-list",
      name: "trailer-list",
      component: TrailerList,
    },
    {
      path: "/van-list",
      name: "van-list",
      component: VanList,
    },
    {
      path: "/semitrailer-list",
      name: "semitrailer-list",
      component: SemitrailerList,
    },
    {
      path: "/semitruck-list",
      name: "semitruck-list",
      component: SemitruckList,
    },
    {
      path: "/coache-list",
      name: "coache-list",
      component: CoacheList,
    },
    {
      path: "/agricultural-list",
      name: "agricultural-list",
      component: AgriculturalList,
    },
    {
      path: "/construction-list",
      name: "construction-list",
      component: MachineList,
    },
    {
      path: "/forklift-list",
      name: "forklift-list",
      component: ForkliftList,
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
      path: "/edit/ad-trucks/:id",
      name: "edit-ad-trucks",
      component: EditTrucksPage,
    },
    {
      path: "/edit/ad-trailers/:id",
      name: "edit-ad-trailers",
      component: EditAdTrailerPage,
    },
    {
      path: "/edit/ad-vans/:id",
      name: "edit-ad-vans",
      component: EditVansPage,
    },
    {
      path: "/edit/ad-semitruck/:id",
      name: "edit-ad-semitruck",
      component: EditSemiTrucksPage,
    },
    {
      path: "/edit/ad-semitrailer/:id",
      name: "edit-ad-semitrailer",
      component: EditSemiTrailersPage,
    },
    {
      path: "/edit/ad-coache/:id",
      name: "edit-ad-coache",
      component: EditCoachesPage,
    },
    {
      path: "/edit/ad-agricultural/:id",
      name: "edit-ad-agricultural",
      component: EditAgriculturalsPage,
    },
    {
      path: "/edit/ad-construction/:id",
      name: "edit-ad-construction",
      component: EditConstructionsPage,
    },
    {
      path: "/edit/ad-forklift/:id",
      name: "edit-ad-forklift",
      component: EditForkliftsPage,
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
      path: "/fullnews/:id",
      name: "full-news",
      component: FullNews,
    },
    {
      path: "/pricelist",
      name: "price-list",
      component: PriceList,
    },
    {
      path: "/success-pay",
      name: "success-pay",
      component: AfterPaymentPage,
    },
    {
      path: "/failed-pay",
      name: "failed-pay",
      component: AfterFailedPaymentPage,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
});

export default router;
