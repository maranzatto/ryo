<script setup>
import Card from '@/components/Card.vue';
import IconWomem from '@/icons/IconWomem.vue'
</script>

<template>
    <section class="hero relative">
        <div class="relative z-10 max-w-3xl">
            <h1 class="hero-title">Cansou de se frustrar estudando?</h1>
            <p class="hero-subtitle">
                Venha conhecer o jeito mais fácil e prático de aprender
                qualquer coisa, fugindo dos métodos convencionais que não
                funcionam.
            </p>
            <button class="hero-btn">CONHEÇA O GABARITEI</button>
        </div>

        <IconWomem class="absolute top-0 right-10 opacity-50 z-0" />
    </section>

    <section class="courses w-screen-mx-6 lg:-mx-24 p-10">
        <h2 class="section-title">Alguns dos nossos cursos</h2>
        <span class="mt-[3rem] mb-[7rem]">e depoimentos dos nossos alunos</span>

        <div class="flex flex-col gap-12 mt-[7rem]">
            <!-- Curso 1 -->
            <div class="bloc-testimonial flex flex-col lg:flex-row">
                <div class="testimonial flex flex-col lg:flex-row flex-1">
                    <img alt="Curso 1" class="logo" src="@/assets/banner.jpeg" />
                    <div class="p-4 flex flex-col justify-between items-end">
                        <div class="flex flex-col gap-6 text-start">
                            <span>Descrição curso 1</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet erat ipsum.
                                Nunc
                                convallis felis at ipsum porttitor congue. Cras dapibus diam et lacus bibendum
                                ullamcorper.
                                Sed facilisis bibendum mollis. Nullam facilisis orci eget libero euismod hendrerit. Nunc
                                aliquam lacus justo, pellentesque blandit turpis tristique eget. Sed euismod maximus
                                elit ac
                                volutpat. Nunc vitae ex enim. Etiam at dolor vitae odio rhoncus blandit a et sapien. Sed
                                finibus fringilla egestas.
                            </span>
                        </div>
                        <div>
                            <button class="hero-btn">CONHEÇA O GABARITEI</button>
                        </div>
                    </div>
                </div>

                <div class="flex items-start gap-2 max-w-sm">
                    <img src="https://i.pravatar.cc/40" alt="avatar" class="w-10 h-10 rounded-full object-cover" />
                    <div class="relative">
                        <div class="bg-green-200 text-black p-4 rounded-xl shadow-md">
                            <p class="text-sm">Olá! Gostaria de saber mais sobre este curso?</p>
                            <span class="text-xs text-gray-600 block text-right mt-2">10:23</span>
                        </div>
                        <!-- Setinha -->
                        <div
                            class="absolute -left-2 top-4 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-green-200">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Curso 2 (tudo invertido) -->
            <div class="bloc-testimonial flex flex-col lg:flex-row-reverse">
                <div class="testimonial-inv flex flex-col lg:flex-row flex-1">
                    <div class="p-4 flex flex-col justify-between items-end">
                        <div class="flex flex-col gap-6 text-start">
                            <span>Descrição curso 2</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet erat ipsum.
                                Nunc
                                convallis felis at ipsum porttitor congue. Cras dapibus diam et lacus bibendum
                                ullamcorper.
                                Sed facilisis bibendum mollis. Nullam facilisis orci eget libero euismod hendrerit. Nunc
                                aliquam lacus justo, pellentesque blandit turpis tristique eget. Sed euismod maximus
                                elit ac
                                volutpat. Nunc vitae ex enim. Etiam at dolor vitae odio rhoncus blandit a et sapien. Sed
                                finibus fringilla egestas.
                            </span>
                        </div>
                        <div>
                            <button class="hero-btn-inv">CONHEÇA O GABARITEI</button>
                        </div>
                    </div>
                    <img alt="Curso 2" class="logo-inv" src="@/assets/banner.jpeg" />
                </div>

                <!-- Caixa estilo WhatsApp invertida -->
                <div class="flex items-start gap-2 max-w-sm flex-row-reverse">
                    <!-- Avatar -->
                    <img src="https://i.pravatar.cc/41" alt="avatar" class="w-10 h-10 rounded-full object-cover" />
                    <!-- Balão -->
                    <div class="relative">
                        <div class="bg-blue-200 text-black p-4 rounded-xl shadow-md">
                            <p class="text-sm">Tem mais detalhes sobre o curso 2?</p>
                            <span class="text-xs text-gray-600 block text-right mt-2">11:05</span>
                        </div>
                        <!-- Setinha invertida -->
                        <div
                            class="absolute -right-2 top-4 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-blue-200">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Curso 3 -->
            <div class="bloc-testimonial flex flex-col lg:flex-row">
                <div class="testimonial flex flex-col lg:flex-row flex-1">
                    <img alt="Curso 3" class="logo" src="@/assets/banner.jpeg" />
                    <div class="p-4 flex flex-col justify-between items-end">
                        <div class="flex flex-col gap-6 text-start">
                            <span>Descrição curso 3</span>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet erat ipsum.
                                Nunc
                                convallis felis at ipsum porttitor congue. Cras dapibus diam et lacus bibendum
                                ullamcorper.
                                Sed facilisis bibendum mollis. Nullam facilisis orci eget libero euismod hendrerit. Nunc
                                aliquam lacus justo, pellentesque blandit turpis tristique eget. Sed euismod maximus
                                elit ac
                                volutpat. Nunc vitae ex enim. Etiam at dolor vitae odio rhoncus blandit a et sapien. Sed
                                finibus fringilla egestas.
                            </span>
                        </div>
                        <div>
                            <button class="hero-btn">CONHEÇA O GABARITEI</button>
                        </div>
                    </div>
                </div>

                <!-- Caixa estilo WhatsApp normal -->
                <div class="flex items-start gap-2 max-w-sm">
                    <!-- Avatar -->
                    <img src="https://i.pravatar.cc/42" alt="avatar" class="w-10 h-10 rounded-full object-cover" />
                    <!-- Balão -->
                    <div class="relative">
                        <div class="bg-green-200 text-black p-4 rounded-xl shadow-md">
                            <p class="text-sm">Quais são os pré-requisitos do curso 3?</p>
                            <span class="text-xs text-gray-600 block text-right mt-2">12:45</span>
                        </div>
                        <!-- Setinha -->
                        <div
                            class="absolute -left-2 top-4 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-green-200">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* #region section global */
/* =============================
    Seções principais da About
   ============================= */
.section {
    @apply px-6 lg:px-24;
}

.section-title {
    @apply text-2xl lg:text-4xl font-bold text-center;
}

.section-subtitle {
    @apply text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12;
}

/* =============================
    Cursos
   ============================= */
.courses {
    @apply px-6 lg:px-24 bg-cover bg-center bg-no-repeat;
    background-image: url("../assets/ryo-bg.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.content-card {
    @apply bg-white p-4 rounded-xl shadow flex flex-col;
}

.text-truncate {
    @apply block mb-2 truncate;
}

.type {
    @apply text-sm text-gray-500 mb-1;
}

/* #endregion */

.bloc-testimonial {
    @apply flex gap-4
}

.testimonial, .testimonial-inv {
    @apply rounded-lg flex gap-4 bg-primary-900;
    width: 70%;
    height: 320px
}

.testimonial-inv {
    @apply justify-between bg-primary-500
}


.logo {
    @apply rounded-l-lg;
    width: 50%;
}

.logo-inv {
    @apply rounded-r-lg;
    width: 50%;
}

/* #region hero */
/* =============================
    Hero responsivo
   ============================= */
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
    @apply bg-white text-primary-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition;
}

.hero-btn-inv {
    @apply text-primary-500
}


.hero IconWomem {
    @apply absolute top-0 right-2 sm:right-10 opacity-30 z-0 w-32 sm:w-48 lg:w-64;
}

/* #endregion */
</style>
