import { createApp } from "vue";
import "./assets/styles/index.scss";
import App from "./App.vue";
import store from "./store";

const app = createApp(App);

// Integrates VueX Store
app.use(store);

// Mount the entire application
app.mount("#app");
