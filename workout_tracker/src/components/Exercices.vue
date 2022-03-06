<template>
    <div class="exercies">Exercices</div>
</template>

<script>
export default {
    name: "Exercices",
    data() {
        return {
            Exercices: [],
        };
    },
    async created() {
        const ApiResponse = await fetch(
            "https://wger.de/api/v2/exercise/?limit=100&language=2&ordering=id",
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            }
        );
        const data = await ApiResponse.json();
        this.Exercices = data.results;
    },
};
</script>

<style scoped></style>
