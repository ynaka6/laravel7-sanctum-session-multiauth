<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="w-full p-4">
            <h1 class="font-semibold text-2xl text-center mb-10">
                Secured Page
            </h1>
            <div>
                <button
                    class="block w-full max-w-sm mx-auto bg-orange-500 rounded-full shadow-lg p-4 text-lg text-white hover:opacity-75"
                    @click.prevent="onClickLogout"
                >
                    Logout
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
    methods: {
        async onClickLogout() {
            await this.logout();
            this.$router.push("/login");
        },
        ...mapActions({
            logout: "auth/logout"
        })
    }
});
</script>
