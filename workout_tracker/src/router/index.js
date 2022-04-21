// import { render } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Exercices from "../components/Exercices.vue";
import Workouts from "../components/Workouts.vue";
import Home from "../components/Home.vue";

const routes = [
    {
        path: "/Exercices",
        name: "Exercices",
        component: Exercices,
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
    },
    {
        path: "/Workouts",
        name: "Workouts",
        component: Workouts,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
