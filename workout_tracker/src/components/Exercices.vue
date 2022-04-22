<template>
    <div class="container">
        <div class="Exercice" v-for="Exercice in Exercices" :key="Exercice">
            <div class="exerciceImg">
                <img :src="Exercice.img" alt="" />
            </div>
            <div class="exerciceInfos">
                <h1 class="title">{{ Exercice.nom }}</h1>
                <p>{{ Exercice.description }}</p>
            </div>
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
        background-color: #5271ffa6;
        padding: 5% 5% 5% 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    .Exercice {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        max-height: 615px;
        background-color: white;
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 0px 10px 15px 10px #00000030;
    }
    .exerciceImg {
        height: 50%;
        max-height: 50%;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .exerciceImg img {
        max-height: 305px;
        height: 100%;
        width: auto;
        /* border-radius: 20px;  */
    }
    .exerciceInfos {
        width: 100%;
        display: flex;
        gap: 30px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0px 20px 20px 20px;
    }
    .title {
        text-align: center;
        text-decoration: underline 3px solid black;
    }
</style>
