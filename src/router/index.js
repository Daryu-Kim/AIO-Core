import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppDetailView from "../views/AppDetailView.vue";
import AppSearch from "../views/AppSearch.vue";
import AppCategory from "../views/AppCategory.vue";
import UserLogin from "../views/UserLogin";
import UserRegister from "../views/UserRegister";
import Developer from "../views/Developer";
import AppModify from "../views/AppModify";

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
  {
    path: "/developer",
    name: "developer",
    component: Developer,
  },
  {
    path: "/modify",
    name: "modify",
    component: AppModify,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
