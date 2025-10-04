<script setup>
import Card from '@/components/Card.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const source = [
    { id: 1, title: 'Curso de Vue.js 3 do básico ao avançado', type: 'frontend' },
    { id: 2, title: 'Curso de React do básico ao avançado', type: 'frontend' },
    { id: 3, title: 'Curso de Angular do básico ao avançado', type: 'frontend' },
    { id: 4, title: 'Curso de Svelte do básico ao avançado', type: 'frontend' },
    { id: 5, title: 'Curso de Node.js do básico ao avançado', type: 'backend' },
    { id: 6, title: 'Curso de Python do básico ao avançado', type: 'backend' },

];
</script>

<template>
    <div class="flex items-start justify-between mb-4">
        <span>Meus Cursos</span>
    </div>
    <div class="grid gap-6 
                sm:grid-cols-1
                lg:grid-cols-2
                xl:grid-cols-3">
        <Card v-for="value in source" class="container" :title="value.title" :key="value.id">
            <img alt="Vue logo" class="logo" src="@/assets/banner.jpeg" />
            <div class="content-card">
                <span class="type">{{ value.type }}</span>
                <span class="text-truncate text-lg">{{ value.title }}</span>
                <div class="flex justify-end w-full mt-4">
                    <Button label="Continuar" icon="pi pi-check" class="p-button-sm p-button-outlined" />
                </div>
            </div>
        </Card>
    </div>
</template>

<style scoped>
.container {
    overflow: hidden;
}

.content-card {
    @apply p-4 flex flex-col items-start max-w-full;
}

.logo {
    width: 100%;
    height: 15rem;
    pointer-events: none;
    user-select: none;
}

.text-truncate {
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    max-width: 100%;
}

.type {
    @apply text-sm text-gray-500 mb-2;
}
</style>