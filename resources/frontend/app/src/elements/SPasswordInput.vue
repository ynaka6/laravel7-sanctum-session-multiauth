<template>
    <div>
        <label :for="id" class="block text-grey-darker text-sm font-bold mb-2">
            {{ label }}
        </label>
        <div class="relative">
            <input
                :id="id"
                :type="inputType"
                class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-1"
                :class="{ 'border-red-500 bg-red-100': !!error }"
                @input="updateInput"
            />
            <span
                v-if="icon"
                class="absolute right-0 top-0 mt-2 mr-3 text-blue-500"
                @click="toggleType"
            >
                <font-awesome-icon :icon="icon" />
            </span>
        </div>
        <p v-if="error" class="text-red-500 text-xs italic">{{ error }}</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { uuid } from "vue-uuid";

export type DataType = {
    inputType: string;
    password: string;
    text: string;
};

export default Vue.extend({
    props: {
        id: {
            type: String,
            required: false,
            default() {
                return `password-input-${uuid.v1()}`;
            }
        },
        label: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false
        },
        error: {
            type: String,
            required: false
        }
    },
    data(): DataType {
        const password = "password";
        const text = "text";
        return {
            inputType: "password",
            password,
            text
        };
    },
    methods: {
        toggleType(): void {
            if (this.inputType === this.password) {
                this.inputType = this.text;
            } else {
                this.inputType = this.password;
            }
        },
        updateInput($event: Event): void {
            if ($event.target instanceof HTMLInputElement) {
                this.$emit("input", $event.target.value);
            }
        }
    }
});
</script>
