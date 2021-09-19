import { routeGuard } from "@/logic/guards/route-guard";
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterLink,
} from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/account",
    name: "account",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Account.vue"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "/signup",
        name: "signup",
        component: () => import("@/views/SignUp.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { isAuthenticationRequired: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = routeGuard.isAuthenticated();

  if (
    !isAuthenticated &&
    to.name != "login" &&
    !!to.meta.isAuthenticationRequired
  ) {
    next({
      name: "login",
      query: { redirect: to.fullPath },
    });
  }

  next();
});

export default router;
