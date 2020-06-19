import { MutationTree } from "vuex";
import { AuthState } from "@/store/types";
import { User } from "@/types/entities/user";

const mutations: MutationTree<AuthState> = {
    SET_USER: (state: AuthState, user: User) => {
        state.user = user;
    },
    RESET_USER: state => {
        state.user = null;
    }
};

export default mutations;
