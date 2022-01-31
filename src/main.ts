import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

setTimeout(function () {
  createApp(App).use(router).mount("#app");
}, 3400);
