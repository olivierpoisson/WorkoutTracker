<template>
    <div class="container">
        <div class="filters">
            <div class="searchBar">
                <input
                    v-model="searchText"
                    class="search"
                    type="text"
                    placeholder="Recherchez un exercice..."
                />
            </div>
            <div class="bodyPartFilterContainer">
                <select
                    v-model="bodyPartFilter"
                    class="bodyPartFilter"
                    placeholder="Filtrer par partie du corps"
                >
                    <option value="" disabled selected hidden>Partie du corps</option>
                    <option value="none">Toutes</option>
                    <option v-for="(part, index) in bodyPartFilters" :key="index" :value="part">
                        {{ part }}
                    </option>
                </select>
            </div>
        </div>
        <div class="Exercices">
            <div class="Exercice" v-for="Exercice in filteredExercices" :key="Exercice.id">
                <div class="section1">
                    <div class="imageTitle">
                        <div class="exerciceImg">
                            <img :src="Exercice.img" alt="exercice image" />
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
    </div>
</template>

<script>
    // import axios from "axios";
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
                bodyPartFilter: "",
                bodyPartFilters: [],
            };
        },
        computed: {
            filteredExercices() {
                let filtered = this.Exercices;
                if (this.searchText !== "") {
                    filtered = filtered.filter((x) => x.nom.includes(this.searchText));
                }
                if (this.bodyPartFilter !== "") {
                    if (this.bodyPartFilter !== "none") {
                        filtered = filtered.filter((x) => x.partie === this.bodyPartFilter);
                    }
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
            getExercices() {
                this.Exercices = this.$store.state.Exercies;
                this.bodyPartFilters = [...new Set(this.Exercices.map((x) => x.partie))];
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
        padding: 5% 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 30px;
        overflow: hidden;
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
        width: 48%;
        max-height: 615px;
        height: 65vh;
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
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .Exercices {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        width: 100%;
    }
    .searchBar {
        padding: 10px;
        display: flex;
        width: 40%;
        background-color: white;
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 0px 10px 15px 10px #00000030;
    }
    .bodyPartFilterContainer {
        padding: 10px;
        display: flex;
        width: 30%;
        background-color: white;
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 0px 10px 15px 10px #00000030;
        justify-content: center;
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
    .bodyPartFilter {
        border: none;
        width: 200px;
        outline: none;
    }
</style>
