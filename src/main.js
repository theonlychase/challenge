import Vue from "vue"
import "@/plugins/vuetify"
import App from "@/App.vue"
import router from "@/router"
import store from "@/store/store"
import "nprogress/nprogress.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
