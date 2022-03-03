<template>
    <div class="nav RowCenter">
        <img src="../assets/Workout Tracker.png" alt="" />
        <a href="#">Home</a>
    </div>
</template>

<script>
export default {
    name: "Navigation",
};
</script>

<style scoped>
.nav {
    height: 10vh;
    position: fixed;
    width: 100vw;
    top: 0;
    z-index: 10;
    left: 0;
    box-shadow: 0px 5px 15px 0px #00000030;
    background-color: white;
}
a {
    font-size: 20px;
}
</style>
