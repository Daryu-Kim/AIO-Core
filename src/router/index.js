import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppDetailView from "../views/AppDetailView.vue";
import AppSearch from "../views/AppSearch.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
