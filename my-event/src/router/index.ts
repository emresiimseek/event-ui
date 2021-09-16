import { routeGuard } from '@/logic/guards/route-guard'
import { createRouter, createWebHistory, RouteRecordRaw, RouterLink } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },

]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {

  const isAuthenticated = routeGuard.isAuthenticated();

  console.log("test");

  if (!isAuthenticated && to.name != "Login") {
    next({
      name: "Login",
      query: { redirect: to.fullPath },
    });
  }

  next();
})

export default router
