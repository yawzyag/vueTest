import { provide, h, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { apolloClient } from "./grapqhl";
import { DefaultApolloClient } from "@vue/apollo-composable";

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
  .mount("#app");
