<template>
  <v-flex xs4>
    <router-link
      :to="{ name: 'restaurant', params: { id: restaurant.id } }"
      style="text-decoration: none;"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        aspect-ratio="2.75"
      ></v-img>

      <v-card class="ma-25">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ restaurant.title | upperCase }}</h3>
            <div>{{ restaurant.description }}</div>
          </div>
        </v-card-title>
      </v-card>
    </router-link>
  </v-flex>
</template>

<script>
import _ from "lodash"

export default {
  props: {
    restaurant: Object
  },
  filters: {
    upperCase(value) {
      if (!value) return ""
      return _.upperCase(value)
    }
  }
}
</script>

<style scoped></style>
