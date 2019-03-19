<template>
  <v-app>
    <Navigation />
    <v-content>
      <v-container fluid grid-list-md>
        <router-view :key="$route.fullPath" />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  }
}
</script>
