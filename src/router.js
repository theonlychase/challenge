import Vue from "vue"
import Router from "vue-router"
import RestaurantList from "./views/RestaurantList.vue"
import Restaurant from "./views/Restaurant.vue"
import NotFound from "./views/NotFound.vue"
import NetworkIssue from "./pages/NetworkIssue.vue"
import NProgress from "nprogress"
import store from "@/store/store"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "restaurant-list",
      component: RestaurantList,
      props: true
    },
    {
      path: "/restaurant/:id",
      name: "restaurant",
      component: Restaurant,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        // before this route is loaded
        store
          .dispatch("fetchRestaurant", routeTo.params.id)
          .then(restaurant => {
            routeTo.params.restaurant = restaurant
            next()
          })
          .catch(error => {
            if (error.response && error.response.status == 404) {
              next({
                name: "404",
                params: {
                  resource: "event"
                }
              })
            } else {
              next({
                name: "network-issue"
              })
            }
          })
      }
    },
    {
      path: "/network-issue",
      name: "network-issue",
      component: NetworkIssue
    },
    {
      path: "/404",
      name: "404",
      component: NotFound,
      props: true
    },
    {
      path: "*",
      redirect: {
        name: "404",
        params: {
          resource: "page"
        }
      }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
