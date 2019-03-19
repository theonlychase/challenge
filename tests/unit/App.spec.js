import App from "@/App"
import { shallowMount } from "@vue/test-utils"
import { expect } from "chai"

describe("App.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(App)
  })

  it("should render correct contents", () => {
    expect(wrapper.is("nav")).toBe(true)
  })
})
