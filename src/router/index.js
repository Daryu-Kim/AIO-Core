import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppDetailView from "../views/AppDetailView.vue";
import AppSearch from "../views/AppSearch.vue";
import AppCategory from "../views/AppCategory.vue";
import UserLogin from "../views/UserLogin";
import UserRegister from "../views/UserRegister";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/details",
    name: "detail",
    component: AppDetailView,
  },
  {
    path: "/search",
    name: "search",
    component: AppSearch,
  },
  {
    path: "/category",
    name: "category",
    component: AppCategory,
  },
  {
    path: "/login",
    name: "login",
    component: UserLogin,
  },
  {
    path: "/register",
    name: "register",
    component: UserRegister,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
