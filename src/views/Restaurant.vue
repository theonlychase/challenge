<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card class="ma-25">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        aspect-ratio="2.75"
      ></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ restaurant.title | upperCase }}</h3>
          <div>{{ restaurant.description }}</div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    restaurant: {
      // Simply receive the event to render
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
