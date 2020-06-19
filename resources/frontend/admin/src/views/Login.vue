<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="w-full p-4">
            <h1 class="font-semibold text-2xl text-center mb-10">
                Admin Login
            </h1>
            <form @submit.prevent="onSubmit">
                <s-input
                    v-model="form.email"
                    type="email"
                    label="email"
                    class="mb-4"
                    :error="errors['email'] ? errors['email'][0] : ``"
                />
                <s-password-input
                    v-model="form.password"
                    label="password"
                    class="mb-4"
                    :error="errors['password'] ? errors['password'][0] : ``"
                />
                <button
                    type="submit"
                    class="block w-64 mx-auto shadow-xl bg-orange-500 text-white rounded-full p-3"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import SInput from "@/elements/SInput.vue";
import SPasswordInput from "@/elements/SPasswordInput.vue";
import { ValidationErrors } from "../infra/network/APIError";

export type FormType = {
    email: string;
    password: string;
};

export type DataType = {
    form: FormType;
    errors: ValidationErrors | null;
};

export default Vue.extend({
    components: {
        SInput,
        SPasswordInput
    },
    data(): DataType {
        return {
            form: {
                email: "",
                password: ""
            },
            errors: {}
        };
    },
    methods: {
        async onSubmit() {
            try {
                const user = await this.login(this.form);
                if (user) {
                    this.$router.push("/");
                }
            } catch (err) {
                this.errors = err.errors;
            }
        },
        ...mapActions({
            login: "auth/login"
        })
    }
});
</script>
