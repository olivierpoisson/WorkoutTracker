<template>
    <div class="container">
        <div class="homeScreen">
            <h1 class="title">Entraînements</h1>
            <div @click="toggleCreateForm()" class="addWorkoutButton">
                <i class="fa-solid fa-plus addWorkoutIcon"></i>
                <i class="fa-solid fa-minus closeIcon"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from "gsap";
    const timeline = gsap.timeline({
        defaults: {
            duration: 0.5,
            ease: "Power2.easeOut",
        },
    });
    export default {
        name: "Workouts",
        data() {
            return {
                dialogCreate: false,
            };
        },
        methods: {
            toggleCreateForm() {
                const div = document.querySelector(".addWorkoutButton");
                const icon = document.querySelector(".addWorkoutIcon");
                const closeIcon = document.querySelector(".closeIcon");
                if (!this.dialogCreate) {
                    gsap.set(icon, { opacity: "0", fontSize: "0px" });
                    timeline.fromTo(div, { width: "50px", height: "50px", cursor: "pointer" }, { width: "100%", height: "100%", cursor: "default" });
                    timeline.to(closeIcon, { opacity: "1", fontSize: "20px" }, "<");
                    this.dialogCreate = !this.dialogCreate;
                } else {
                    gsap.set(closeIcon, { opacity: "0", fontSize: "0px" });
                    timeline.fromTo(div, { width: "100%", height: "100%", cursor: "default" }, { width: "50px", height: "50px", cursor: "pointer" });
                    timeline.to(icon, { opacity: "1", fontSize: "20px" }, "<");
                    this.dialogCreate = !this.dialogCreate;
                }
            },
        },
    };
</script>

<style scoped>
    .container {
        width: 100%;
        padding: 5%;
        letter-spacing: 2px;
    }
    .homeScreen {
        position: relative;
        height: 100%;
    }
    .title {
        text-align: center;
        color: white;
        text-decoration: underline 3px solid white;
    }
    .addWorkoutButton {
        width: 50px;
        height: 50px;
        padding: 0px;
        outline: none;
        border: none;
        position: absolute;
        bottom: 0px;
        right: 0px;
        border-radius: 25px;
        background-color: white;
        box-shadow: 0px 0px 10px 5px #00000030;
        z-index: 10;
        cursor: pointer;
    }
    .addWorkoutIcon,
    .closeIcon {
        position: absolute;
        bottom: 15px;
        right: 15px;
    }
    .addWorkoutIcon {
        font-size: 20px;
        opacity: 1;
    }
    .closeIcon {
        font-size: 0px;
        opacity: 0;
    }
</style>
