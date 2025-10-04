<script setup lang="ts">
import PrimeCard from 'primevue/card';
import Button from 'primevue/button';
import IconClose from '@/icons/IconClose.vue';
import { useHelpers } from '@/composables/useHelpres';

defineProps<{
    title: string;
    actions?: Array<{ label: string; onClick: () => void }>;
    onClose?: () => void; // <- importante
}>();

const { capitalizeFirstLetter } = useHelpers();
</script>

<template>
    <PrimeCard class="card">
        <template #title>
            <div class="header">
                <span class="title">{{ capitalizeFirstLetter(title) }}</span>
                <IconClose width="13" height="13" class="text-gray-500 hover:cursor-pointer" @click="onClose?.()" />
            </div>
        </template>

        <template #content>
            <slot />
        </template>

        <template #footer>
            <div v-if="actions?.length" class="card-actions">
                <Button v-for="(action, index) in actions" :key="index" :label="action.label" @click="action.onClick"
                    class="p-button-text" />
            </div>
        </template>
    </PrimeCard>
</template>

<style scoped>
.card {
    @apply p-2 rounded-xl;
    min-width: 640px;
    max-width: 720px
}

.header {
    @apply flex justify-between items-center mb-2 gap-4;
}

.title {
    @apply flex items-start justify-between;
}

.card-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
}

p-button-text {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #f9f9f9;
    cursor: pointer;
    transition: border-color 0.25s;
}

p-button-text:hover {
    @apply border-primary-50;
}
</style>
