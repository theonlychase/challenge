import axios from "axios"

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 15000
})

export default {
  getRestaurants(perPage, page) {
    return apiClient.get("/restaurants?_limit=" + perPage + "&_page=" + page)
  },
  getRestaurant(id) {
    return apiClient.get("/restaurants/" + id)
  }
}
