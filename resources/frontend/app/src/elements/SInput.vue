<template>
    <div>
        <label :for="id" class="block text-grey-darker text-sm font-bold mb-2">
            {{ label }}
        </label>
        <div class="relative">
            <input
                :id="id"
                :type="type"
                :min="min"
                :step="step"
                class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-1"
                :class="{ 'border-red-500 bg-red-100': !!error }"
                :value="value"
                @input="updateInput"
            />
        </div>
        <p v-if="error" class="text-red-500 text-xs italic">{{ error }}</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { uuid } from "vue-uuid";

export default Vue.extend({
    props: {
        id: {
            type: String,
            required: false,
            default() {
                return `input-${uuid.v1()}`;
            }
        },
        type: {
            type: String as () => `text`,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        min: {
            type: Number,
            required: false
        },
        step: {
            type: Number,
            required: false
        },
        error: {
            type: String,
            required: false
        }
    },
    methods: {
        updateInput($event: Event): void {
            if ($event.target instanceof HTMLInputElement) {
                this.$emit("input", $event.target.value);
            }
        }
    }
});
</script>
