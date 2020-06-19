import { GetterTree } from "vuex";
import { RootState, AuthState } from "@/store/types";

const getters: GetterTree<AuthState, RootState> = {
    user: (state: AuthState) => {
        return state.user;
    },
    loggedIn: (state: AuthState) => {
        return null !== state.user;
    }
};

export default getters;
