import Vue from "vue"
import Vuex from "vuex"
import * as restaurant from "@/store/modules/restaurant.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    restaurant
  }
})
