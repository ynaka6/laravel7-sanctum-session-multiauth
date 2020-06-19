import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "@/store/types";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
    state: {
        version: "1.0.0"
    },
    mutations: {},
    actions: {},
    modules: {
        auth
    }
});
