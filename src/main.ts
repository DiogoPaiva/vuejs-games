import { createApp } from "vue";
import "./assets/styles/index.scss";
import App from "./App.vue";
import store from "./store";

const app = createApp(App);

app.use(store);
app.mount("#app");
