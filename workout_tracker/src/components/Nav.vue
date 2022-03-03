<template>
    <div class="nav Row">
        <a class="logo" href="#">
            <img src="../assets/Logo.png" alt="" />
        </a>
        <div class="links RowCenter">
            <a href="#">Home</a>
            <a href="#">Workouts</a>
            <a href="#">Exercices</a>
        </div>
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
    padding: 0 10vw;
}
a {
    font-size: 20px;
}
.logo {
    margin: auto 0;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
}
img {
    height: 90%;
}
.links {
    width: -webkit-fill-available;
}
.links a {
    margin: 0px 20px;
}
.links a:hover {
    text-decoration: underline 3px #5271ff;
}
</style>
