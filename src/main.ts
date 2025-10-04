import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persistedstate";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";

const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});
app.mount("#app");
