import { routeGuard } from "@/logic/guards/route-guard";
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterLink,
} from "vue-router";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/account",
    name: "account",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Account,
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
    meta: { auth: true },
    children: [
      {
        name: "flow",
        path: "/flow",
        component: () => import("@/views/EventFlow.vue"),
      },
      {
        name: "newevent",
        path: "/newevent",
        component: () => import("@/views/NewEvent.vue"),
      },
      {
        name: "profile",
        path: "/profile",
        component: () => import("@/views/Profile.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.onError((error) => {
//   if (/loading chunk \d* failed./i.test(error.message)) {
//     window.location.reload();
//   }
// });

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = routeGuard.isAuthenticated();

  console.log("beforeEach");

  if (!isAuthenticated && !!to.meta.auth) {
    next({
      name: "login",
      query: { redirect: to.fullPath },
    });
  }

  next();
});

export default router;
