import "./index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/* import the fontawesome solid */
// import { library } from "@fortawesome/free-solid-svg-icons";
const app = createApp(App);

app.use(router);

app.mount("#app");
