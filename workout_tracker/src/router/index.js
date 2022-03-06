import { createRouter, createWebHashHistory } from "vue-router";
import Exercices from "../components/Exercices.vue";

const routes = [
    {
        path: "/Exercices",
        name: "Exercices",
        component: Exercices,
    },
    {
        path: "/",
        name: "Home",
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
