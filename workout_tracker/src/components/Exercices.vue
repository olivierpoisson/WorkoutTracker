<template>
    <div class="container">
        <div class="filters">
            <input v-model="searchText" class="search" type="text" placeholder="Recherchez un exercice..." />
        </div>
        <div class="Exercice" v-for="Exercice in filteredExercices" :key="Exercice.id">
            <div class="section1">
                <div class="imageTitle">
                    <div class="exerciceImg">
                        <img :src="Exercice.img" alt="" />
                    </div>
                    <div class="exerciceInfos">
                        <h3 class="title">{{ Exercice.nom }}</h3>
                    </div>
                </div>
                <div class="exerciceDescription">
                    <p class="description">{{ Exercice.description }}</p>
                </div>
            </div>
            <div class="expand">
                <button @click="expandExercice" class="expandButton">Description...</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import gsap from "gsap";
    const timeline = gsap.timeline({
        defaults: {
            duration: 0.5,
            ease: "Power2.easeOut",
        },
    });
    export default {
        name: "Exercices",
        data() {
            return {
                Exercices: [],
                exerciceExpanded: false,
                searchText: "",
            };
        },
        computed: {
            filteredExercices() {
                let filtered = this.Exercices;
                if (this.searchText !== "") {
                    filtered = filtered.filter((x) => x.nom.includes(this.searchText));
                }
                return filtered;
            },
        },
        methods: {
            includesSearch(name) {
                if (this.searchText === "") {
                    return true;
                } else {
                    return name.includes(this.searchText);
                }
            },
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
            expandExercice: function (exercice) {
                this.exerciceExpanded = !this.exerciceExpanded;
                const target = exercice.target;
                const exerciceContainer = target.parentElement.parentElement;
                const section = exerciceContainer.querySelector(".imageTitle");
                const description = exerciceContainer.querySelector(".exerciceDescription");
                if (this.exerciceExpanded === true) {
                    timeline.to(section, { height: "0px", overflow: "hidden" });
                    timeline.to(description, { height: "100%", overflow: "visible" }, "<");
                    target.innerText = "Fermer";
                } else {
                    timeline.to(section, { height: "100%" });
                    timeline.to(description, { height: "0px", overflow: "hidden" }, "<");
                    target.innerText = "Description...";
                }
            },
        },
        mounted() {
            this.getExercices();
        },
    };
</script>

<style scoped>
    .container {
        position: relative;
        background-color: #5271ff;
        padding: 5% 5% 5% 20%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 30px;
    }
    .section1 {
        height: 85%;
    }
    .imageTitle {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .Exercice {
        transform-origin: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 45%;
        max-height: 615px;
        height: 50vh;
        background-color: white;
        border-radius: 30px;
        overflow: hidden;
        padding-bottom: 10px;
        box-shadow: 0px 10px 15px 10px #00000030;
    }
    .expand {
        display: flex;
        justify-content: center;
    }
    .expandButton {
        background-color: #5271ffa6;
        color: white;
        border-radius: 20px;
        border: none;
        padding: 10px 15px;
        font-size: 1em;
        cursor: pointer;
    }
    .expandButton:hover {
        background-color: #5271ff;
    }
    .filters {
        padding: 10px;
        display: flex;
        width: 80%;
        background-color: white;
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 0px 10px 15px 10px #00000030;
    }
    .search {
        border: none;
        height: 100%;
        width: 100%;
        border-radius: 30px;
        padding: 0px 10px;
    }
    .search:focus {
        outline: none;
    }
    .exerciceImg {
        height: 85%;
        flex-grow: 1;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .exerciceInfos {
        width: 100%;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .exerciceDescription {
        border-radius: 30px;
        padding: 0px 50px;
        height: 0px;
        overflow: hidden;
        display: flex;
        align-items: center;
    }
    .description {
        font-size: 1.2em;
    }
    .title {
        font-size: 1.2em;
        text-align: center;
        text-decoration: underline 3px solid black;
    }
</style>
