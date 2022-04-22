<template>
    <div class="nav Col">
        <router-link to="/Home" style="min-height: 80px">
            <img src="../assets/Logo.png" alt="" />
        </router-link>

        <div class="links Col">
            <router-link to="/Home">
                <div @mouseenter="linkHover" @mouseleave="linkMouseLeave" class="link">
                    <i class="fa-solid fa-home"></i>
                    <div class="menuText">
                        <a>Home</a>
                    </div>
                </div>
            </router-link>
            <router-link to="/workouts" class="routerLink">
                <div @mouseenter="linkHover" @mouseleave="linkMouseLeave" class="link">
                    <i class="fa-solid fa-person-running"></i>
                    <a class="menuText">Workouts</a>
                </div>
            </router-link>

            <router-link to="/Exercices" class="routerLink">
                <div @mouseenter="linkHover" @mouseleave="linkMouseLeave" class="link">
                    <i class="fa-solid fa-dumbbell"></i>
                    <a class="menuText">Exercices</a>
                </div>
            </router-link>
            <div @mouseenter="linkHover" @mouseleave="linkMouseLeave" @click="navAnimation()" class="link expandSidebar">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from "gsap";
    const timelineSidebar = gsap.timeline({
        defaults: {
            duration: 0.5,
            ease: "Power2.easeOut",
        },
    });
    export default {
        name: "Navigation",
        data() {
            return {
                navExpanded: true,
            };
        },
        methods: {
            linkHover: function linkHover(link) {
                const target = link.target;
                gsap.to(target, { backgroundColor: "#5271ffa6", duration: 0.3 });
            },
            linkMouseLeave: function linkMouseLeave(link) {
                const target = link.target;
                gsap.to(target, { backgroundColor: "white", duration: 0.3 });
            },
            navAnimation: function () {
                if (this.navExpanded) {
                    timelineSidebar.to(".nav", { width: "5%" });
                    timelineSidebar.to(".menuText", { width: "0%" }, "<");
                    timelineSidebar.to(".fa-arrow-left", { rotateY: "180deg" }, "<");

                    this.navExpanded = false;
                } else {
                    timelineSidebar.to(".nav", { width: "15%" });
                    timelineSidebar.to(".menuText", { width: "100%" }, "<");
                    timelineSidebar.to(".fa-arrow-left", { rotateY: "0deg" }, "<");
                    this.navExpanded = true;
                }
            },
        },
        setup() {
            gsap.set(".underline", { width: "0%" });
        },
    };
</script>

<style scoped>
    .nav {
        height: 100vh;
        position: fixed;
        width: 15%;
        min-width: 45px;
        top: 0;
        z-index: 10;
        left: 0;
        box-shadow: 0px 5px 15px 0px #00000030;
        background-color: white;
        padding: 20px 0px;
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
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
    }
    img {
        width: 100%;
    }
    .routerLink {
        width: 100%;
    }
    .menuText {
        padding-left: 5px;
        overflow: hidden;
    }
    .links {
        display: flex;
        width: -webkit-fill-available;
    }
    .link {
        cursor: pointer;
        display: flex;
        width: 100%;
        height: 100%;
        padding: 10px 0px 10px 10px;
        border-radius: 0px 25px 25px 0px;
    }
    i {
        width: 25px;
        height: 100%;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .expandSidebar {
        text-align: center;
        justify-content: center;
        align-items: center;
        height: 50px;
        padding: 10px 0px 10px 0px;
    }
</style>
