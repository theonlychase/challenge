<template>
  <v-layout row wrap>
    <RestaurantItem
      v-for="restaurant in restaurant.restaurants"
      :key="restaurant.id"
      :restaurant="restaurant"
    />
    <v-flex text-xs-center>
      <template v-if="page != 1">
        <router-link
          :to="{ name: 'restaurant-list', query: { page: page - 1 } }"
          rel="prev"
          style="text-decoration: none;"
        >
          <v-icon>arrow_back</v-icon>
        </router-link>
      </template>

      <router-link
        v-if="hasNextPage"
        :to="{ name: 'restaurant-list', query: { page: page + 1 } }"
        rel="next"
        style="text-decoration: none;"
      >
        <v-icon>arrow_forward</v-icon>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
import RestaurantItem from "@/components/RestaurantItem.vue"
import { mapState } from "vuex"
import store from "@/store/store"

function getPages(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page || 1)
  store
    .dispatch("fetchRestaurants", {
      page: currentPage
    })
    .then(() => {
      routeTo.params.page = currentPage
      next()
    })
}

export default {
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    RestaurantItem
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPages(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPages(routeTo, next)
  },
  computed: {
    hasNextPage() {
      return (
        this.restaurant.restaurantsTotal > this.page * this.restaurant.perPage
      )
    },
    ...mapState(["restaurant"])
  }
}
</script>

<style scoped></style>
