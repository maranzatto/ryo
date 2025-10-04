<script setup lang="ts">
import Popup from "@/components/Popup.vue";
import { useOverlay } from "@/composables/useOverlay";
import { h } from "vue";

const { show, hide } = useOverlay();

const actions = [
    { label: "Confirmar", onClick: () => console.log("Confirmar") },
    { label: "Excluir", onClick: () => console.log("Excluir") },
];

function openPopup() {
    show(
        Popup,
        {
            title: "Meu Popup Dinâmico",
            actions,
        },
        h("div", { class: "flex gap-2" }, [
            h("span", "teste 1 asas asa s"),
        ])
    );
}
</script>

<template>
    <section class="flex gap-4">
        <button @click="openPopup">Abrir Popup</button>
        <button @click="hide">Fechar Popup</button>
    </section>
</template>
