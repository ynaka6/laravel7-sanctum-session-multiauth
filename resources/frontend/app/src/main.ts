import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins";

Vue.config.productionTip = false;

const createApp = async () => {
    await store.dispatch("auth/currentUser");
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount("#app");
};
createApp();
