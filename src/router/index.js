import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/clients",
      name: "clients-list",
      component: () => import("../views/ListClientsView.vue"),
    },
    {
      path: "/clients/create",
      name: "clients-create",
      component: () => import("../views/CreateClientView.vue"),
    },
    {
      path: "/clients/:id/edit",
      name: "clients-edit",
      component: () => import("../views/EditClientView.vue"),
    },
    {
      path: "/clients/:id",
      name: "clients-view",
      component: () => import("../views/ClientView.vue"),
    },
  ],
});

export default router;
