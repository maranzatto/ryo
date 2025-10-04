<script setup>
import Card from '@/components/Card.vue';
import IconWomem from '@/icons/IconWomem.vue';

const cursos = [
    {
        id: 1,
        title: "Curso 1",
        description: "Descrição curso 1",
        img: "@/assets/banner.jpeg",
        message: "Olá! Gostaria de saber mais sobre este curso?",
        avatar: "https://i.pravatar.cc/40",
        time: "10:23",
        inverted: false,
        bubbleColor: "bg-green-200",
        btnColor: "bg-white text-primary-900",
    },
    {
        id: 2,
        title: "Curso 2",
        description: "Descrição curso 2",
        img: "@/assets/banner.jpeg",
        message: "Tem mais detalhes sobre o curso 2?",
        avatar: "https://i.pravatar.cc/41",
        time: "11:05",
        inverted: true,
        bubbleColor: "bg-blue-200",
        btnColor: "text-primary-500",
    },
    {
        id: 3,
        title: "Curso 3",
        description: "Descrição curso 3",
        img: "@/assets/banner.jpeg",
        message: "Quais são os pré-requisitos do curso 3?",
        avatar: "https://i.pravatar.cc/42",
        time: "12:45",
        inverted: false,
        bubbleColor: "bg-green-200",
        btnColor: "bg-white text-primary-900",
    }
];
</script>

<template>
    <section class="hero relative">
        <div class="relative z-10 max-w-3xl">
            <h1 class="hero-title">Cansou de se frustrar estudando?</h1>
            <p class="hero-subtitle">
                Venha conhecer o jeito mais fácil e prático de aprender qualquer coisa, fugindo dos métodos
                convencionais que não funcionam.
            </p>
            <button class="hero-btn">CONHEÇA O GABARITEI</button>
        </div>
        <IconWomem class="hero-icon" />
    </section>

    <section class="courses">
        <h2 class="section-title">Alguns dos nossos cursos</h2>
        <span class="mt-12 mb-28 block text-center">e depoimentos dos nossos alunos</span>

        <div class="flex flex-col gap-12">
            <div v-for="curso in cursos" :key="curso.id"
                :class="['bloc-testimonial', curso.inverted ? 'flex-row-reverse' : 'flex-row']">
                <div :class="['testimonial', curso.inverted ? 'testimonial-inv' : '']">
                    <img :src="curso.img" :alt="curso.title" :class="curso.inverted ? 'logo-inv' : 'logo'" />
                    <div class="p-4 flex flex-col justify-between items-end">
                        <div class="flex flex-col gap-6 text-start">
                            <span>{{ curso.description }}</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet erat ipsum.
                                Nunc convallis felis at ipsum porttitor congue. Cras dapibus diam et lacus bibendum
                                ullamcorper.</span>
                        </div>
                        <button :class="['hero-btn', curso.btnColor]">CONHEÇA O GABARITEI</button>
                    </div>
                </div>

                <div :class="['flex items-start gap-2 max-w-sm', curso.inverted ? 'flex-row-reverse' : '']">
                    <img :src="curso.avatar" alt="avatar" class="w-10 h-10 rounded-full object-cover" />
                    <div class="relative">
                        <div :class="['text-black p-4 rounded-xl shadow-md', curso.bubbleColor]">
                            <p class="text-sm">{{ curso.message }}</p>
                            <span class="text-xs text-gray-600 block text-right mt-2">{{ curso.time }}</span>
                        </div>
                        <div :class="[
                            'absolute top-4 w-0 h-0 border-t-8 border-b-8',
                            curso.inverted
                                ? 'right-0 border-l-8 border-l-blue-200 border-t-transparent border-b-transparent'
                                : 'left-0 border-r-8 border-r-green-200 border-t-transparent border-b-transparent'
                        ]"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Hero */
.hero {
    @apply bg-gradient-to-r from-primary-900 to-primary-800 rounded-xl py-20 px-6 lg:px-24 relative overflow-hidden mb-28;
}

.hero-title {
    @apply text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-4 text-white;
}

.hero-subtitle {
    @apply sm:text-lg lg:text-2xl mb-6 text-white;
}

.hero-btn,
.hero-btn-inv {
    @apply font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition;
}

.hero-icon {
    @apply absolute top-0 right-2 sm:right-10 opacity-30 z-0 w-32 sm:w-48 lg:w-64;
}

/* Cursos */
.courses {
    @apply px-6 lg:px-24 bg-cover bg-center bg-no-repeat;
    background-image: url("../assets/ryo-bg.jpg");
    background-attachment: fixed;
}

.section-title {
    @apply text-2xl lg:text-4xl font-bold text-center;
}

.bloc-testimonial {
    @apply flex gap-4;
}

.testimonial,
.testimonial-inv {
    @apply rounded-lg flex gap-4 shadow-md;
    /* adicionei shadow-md */
    width: 70%;
    height: 320px;
}


.testimonial {
    @apply bg-primary-900 text-gray-600;
}

.testimonial-inv {
    @apply bg-primary-500 justify-between;
}

.logo,
.logo-inv {
    @apply w-1/2;
}

.logo {
    @apply rounded-l-lg;
}

.logo-inv {
    @apply rounded-r-lg;
}
</style>
