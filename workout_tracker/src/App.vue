<template>
    <Navigation />
    <router-view class="content"></router-view>
</template>

<script>
    import Navigation from "./components/Nav.vue";

    export default {
        components: {
            Navigation,
        },
    };
</script>

<style>
    * {
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .content {
        overflow-y: visible;
    }
    #app {
        min-height: 100vh;
        width: 100%;
        background-color: #5271ff;
        color: rgb(0, 0, 0);
        line-height: 1.5;
        display: flex;
    }
    .Row {
        display: flex;
    }
    .RowCenter {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Col {
        display: flex;
        flex-direction: column;
    }
    .ColCenter {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    button {
        padding: 1em 2em;
    }
    button:active {
        transform: scale(0.95);
    }
    a {
        text-decoration: none;
        color: #2c3e50;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    a,
    p {
        text-underline-offset: 5px;
    }
</style>
