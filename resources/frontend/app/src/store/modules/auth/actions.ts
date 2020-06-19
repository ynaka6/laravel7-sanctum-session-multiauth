import { ActionTree } from "vuex";
import { RootState, AuthState } from "@/store/types";
import { UserLogin, User } from "@/types/entities/user";
import { APIClient } from "@/infra/network/APIClient";
import { APIRequest, HTTPMethod } from "@/infra/network/APIRequest";

const actions: ActionTree<AuthState, RootState> = {
    currentUser: async ({ commit }) => {
        try {
            const user = await new APIClient().request<User>({
                path: "/me",
                method: HTTPMethod.GET
            } as APIRequest);
            commit("SET_USER", user);
            return user;
        } catch (e) {
            return null;
        }
    },
    login: async ({ commit }, login: UserLogin) => {
        const user = await new APIClient().request<User, UserLogin>({
            path: "/login",
            method: HTTPMethod.POST,
            params: login
        } as APIRequest<UserLogin>);
        commit("SET_USER", user);
        return user;
    },
    logout: async ({ commit }) => {
        await new APIClient().request<{}>({
            path: "/logout",
            method: HTTPMethod.DELETE
        } as APIRequest);
        commit("SET_USER", null);
    }
};

export default actions;
