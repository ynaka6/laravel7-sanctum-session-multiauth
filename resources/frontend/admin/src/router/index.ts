import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: { layout: "default", requiresGuest: true }
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { layout: "default", requiresAuth: true }
    }
];

const router = new VueRouter({
    mode: "history",
    base: "/admin",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters["auth/loggedIn"]) {
            next({ path: "/login" });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (store.getters["auth/loggedIn"]) {
            next({ path: "/" });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
