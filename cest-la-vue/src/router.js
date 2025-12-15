import HomePage from "./views/HomePage.vue";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: () => import("./views/LoginPage.vue"),
  },
  {
    path: "/user",
    component: () => import("./views/UserPage.vue"),
  },
  {
    path: "/user/:id",
    component: () => import("./views/UserView.vue"),
  },
];
