<template>
  <div>
    <div>{{ restaurant.title }}</div>
    <div>{{ restaurant.description }}</div>
  </div>
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
