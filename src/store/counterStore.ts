import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useCounterStore = defineStore("counter", () => {
    const count = ref(Number(localStorage.getItem("count")) || 0);

    function increment() {
        count.value++;
    }

    function clear() {
        count.value = 0;
    }

    watch(count, val => {
        localStorage.setItem("count", val.toString());
    });

    return { count, increment, clear };
});
