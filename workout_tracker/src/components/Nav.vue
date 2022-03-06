<template>
    <div class="nav Row">
        <a class="logo" href="#">
            <img src="../assets/Logo.png" alt="" />
        </a>
        <div class="links RowCenter">
            <div
                @mouseenter="linkHover"
                @mouseleave="linkMouseLeave"
                class="link"
            >
                <a href="#">Home</a>
                <span class="underline"></span>
            </div>
            <div
                @mouseenter="linkHover"
                @mouseleave="linkMouseLeave"
                class="link"
            >
                <a href="#">Workouts</a>
                <span class="underline"></span>
            </div>

            <div
                @mouseenter="linkHover"
                @mouseleave="linkMouseLeave"
                class="link"
            >
                <router-link to="/Exercices">
                    <a href="../views/Exercices.vue">Exercices</a>
                    <span class="underline"></span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";

export default {
    name: "Navigation",
    methods: {
        linkHover: function linkHover(link) {
            const target = link.target;
            const underline = target.querySelector(".underline");
            gsap.fromTo(
                underline,
                { width: "0%" },
                { width: "100%", duration: 0.3 }
            );
        },
        linkMouseLeave: function linkMouseLeave(link) {
            const target = link.target;
            const underline = target.querySelector(".underline");
            gsap.to(underline, { width: "0%", duration: 0.3 });
        },
    },
    setup() {
        gsap.set(".underline", { width: "0%" });
    },
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
.underline {
    background: #5271ff;
    display: block;
    height: 3px;
    width: 0%;
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
.link {
    margin: 0px 20px;
    cursor: pointer;
}
</style>
