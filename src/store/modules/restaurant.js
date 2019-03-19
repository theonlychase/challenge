import RestaurantService from "@/services/RestaurantService.js"

export const state = {
  restaurants: [],
  restaurantsTotal: 0,
  restaurant: {},
  perPage: 3
}

export const mutations = {
  SET_RESTAURANTS(state, restaurants) {
    state.restaurants = restaurants
  },
  SET_RESTAURANTS_TOTAL(state, restaurantsTotal) {
    state.restaurantsTotal = restaurantsTotal
  },
  SET_RESTAURANT(state, restaurant) {
    state.restaurant = restaurant
  },
  SORT_RESTAURANTS(state, restaurants) {
    state.restaurants = restaurants
  }
}

export const actions = {
  fetchRestaurants({ commit, state }, { page }) {
    return RestaurantService.getRestaurants(state.perPage, page)
      .then(response => {
        commit(
          "SET_RESTAURANTS_TOTAL",
          parseInt(response.headers["x-total-count"])
        )
        commit("SET_RESTAURANTS", response.data)
      })
      .catch(error => {
        console.Console.log(error)
      })
  },
  fetchRestaurant({ commit, getters }, id) {
    var restaurant = getters.getRestaurantById(id)
    if (restaurant) {
      commit("SET_RESTAURANT", restaurant)
      return restaurant
    } else {
      return RestaurantService.getRestaurant(id).then(response => {
        commit("SET_RESTAURANT", response.data)
        return response.data
      })
    }
  },
  sortByTitle({ commit, getters }) {
    let sortedRestaurants = getters.sortTitles
    console.log("sortedRestaurants", sortedRestaurants)
    commit("SORT_RESTAURANTS", sortedRestaurants)
  }
}

export const getters = {
  getRestaurantById: state => id => {
    return state.restaurants.find(restaurant => restaurant.id === id)
  },
  sortRest: state => {
    return state.restaurants.sort((a, b) => (a.title > b.title ? 1 : -1))
  }
}
