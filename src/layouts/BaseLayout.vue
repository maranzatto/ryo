<script setup lang="ts">
import Logo from '@/icons/Logo.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navRoutes = router.options.routes.filter((r: any) => r.name && r.path !== '/:pathMatch(.*)*');
</script>

<template>
    <div class="layout">
        <header class="header">
            <Logo width="120" height="60" color="text-primary" />
            <div class="nav">
                <a v-for="route in navRoutes" :key="route.path" class="nav-link" :href="route.path">
                    {{ route.name }}
                </a>
                <!-- <a class="nav-link" href="/">Home</a>
                <a class="nav-link" href="/about">About</a> -->
            </div>
        </header>

        <main class="content">
            <slot />
        </main>

        <footer class="footer">
            <span>© 2025 Aprenda Qualquer Coisa</span>
            <div class="flex justify-center space-x-4 mt-2">
                <span href="/privspancy" class="text-sm hover:underline">Privacy Policy
                </span>
                <span href="/terms" class="text-sm hover:underline">Terms of Service
                </span>
                <span href="/terms" class="text-sm hover:underline">Terms of Service
                </span>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.layout {
    @apply min-h-screen flex flex-col overflow-x-hidden;
}


.header {
    @apply flex justify-between items-center w-full bg-primary-100 text-white p-1 px-8;
}

.title {
    @apply text-xl font-bold;
}

.nav {
    @apply space-x-4;
}

.nav-link {
    @apply text-white hover:text-blue-200;
}

.content {
    @apply flex-1 mx-auto my-8 p-8;
}

/* max-w-screen-xl */

.footer {
    @apply flex flex-col justify-center bg-primary-100 text-white p-1;
}
</style>
