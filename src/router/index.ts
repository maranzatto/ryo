import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Courses from "@/views/Courses.vue";
import NotFound from "@/views/NotFound.vue";
import Example from "@/views/Example.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/example", name: "Example", component: Example },
    { path: "/courses", name: "Cursos", component: Courses },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
