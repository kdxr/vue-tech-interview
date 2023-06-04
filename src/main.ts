import { createApp } from "vue";
import App from "./App.vue";
import Store from "./stores";
import "./styles/main.scss";

const app = createApp(App);

app.use(Store).mount("#app");
