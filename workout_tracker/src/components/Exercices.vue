<template>
    <div class="container">
        <div class="exercies">Exercices Component</div>
        <div v-for="Exercice in Exercices" :key="Exercice">
            <p>{{ Exercice.nom }}</p>
            <img src="{{Exercice.img}}" alt="" />
            <video src=""></video>
            <p>{{ Exercice.description }}</p>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Exercices",
        data() {
            return {
                Exercices: [],
            };
        },
        methods: {
            async getExercices() {
                const options = {
                    method: "GET",
                    url: "https://musclejp.p.rapidapi.com/get-tous",
                    headers: {
                        "x-rapidapi-key": "bdd6c0f65dmsh1a758c8849b0437p1999a7jsn8b2ca797c27c",
                        "x-rapidapi-host": "musclejp.p.rapidapi.com",
                    },
                };
                await axios.request(options).then((response) => {
                    const array = response.data;
                    this.Exercices = array;
                });
            },
        },
        mounted() {
            this.getExercices();
        },
    };
</script>

<style scoped>
    .container {
        padding: 5% 17%;
    }
</style>
