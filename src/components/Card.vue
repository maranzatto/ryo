<script lang="ts" setup>
const props = defineProps<{
    title?: string;
    width?: string;
}>();
</script>

<template>
    <div class="card-container" :style="{ width: props.width || '25rem' }">
        <!-- <div v-if="props.title" class="card-title">{{ props.title }}</div> -->
        <slot />
    </div>
</template>

<style scoped>
.card-container {
    @apply bg-white overflow-hidden rounded-xl shadow;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
}

.card-container:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
}

.card-title {
    font-size: 1.125rem;
    font-weight: 600;
}
</style>
