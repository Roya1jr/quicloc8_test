import { createApp } from "vue";
import { VuesticPlugin } from "vuestic-ui"; // <-
import "vuestic-ui/dist/vuestic-ui.css"; // <-
import App from "./App.vue";
import router from "./router";

setTimeout(function () {
  createApp(App)
    .use(router, VuesticPlugin, {
      colors: {
        // Default colors
        primary: "#23e066",
        secondary: "#002c85",
        success: "#40e583",
        info: "#2c82e0",
        danger: "#e34b4a",
        warning: "#ffc200",
        gray: "#babfc2",
        dark: "#34495e",

        // Custom colors
        myprimary: "#FF5722",
        mysecondary: "#FFCCBC",
        myaccent: "#2e302f",
        myerror: "#fe2a39",
      },
    })
    .mount("#app");
}, 3400);
