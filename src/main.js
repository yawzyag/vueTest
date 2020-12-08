import { provide, h, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { apolloClient } from "./grapqhl";
import { DefaultApolloClient } from "@vue/apollo-composable";
import Toaster from "@meforma/vue-toaster";

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render() {
    return h(App);
  },
})
  .use(store)
  .use(router)
  .use(Toaster)
  .mount("#app");
