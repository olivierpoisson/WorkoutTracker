<template>
    <div class="container">
        <div class="homeScreen">
            <h1 class="title">Entraînements</h1>
            <div class="addWorkoutButton">
                <i class="fa-solid fa-plus addWorkoutIcon" @click="toggleCreateForm()"></i>
                <div class="createWorkoutForm">
                    <input type="text" name="title" class="newWorkoutTitle" placeholder="titre" />
                    <input type="radio" class="weekDays" name="test" title="test" />
                    <textarea class="newWorkoutDescription" placeholder="description" />
                    <div class="actions">
                        <button class="createWorkoutButton" @click="addWorkout()">Créer</button>
                        <button class="cancelButton" @click="cancel()">Annuler</button>
                    </div>
                </div>
                <i class="fa-solid fa-minus closeIcon" @click="toggleCreateForm()"></i>
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
        components: {},
        data() {
            return {
                dialogCreate: false,
                newWorkout: {},
            };
        },
        methods: {
            toggleCreateForm() {
                const div = document.querySelector(".addWorkoutButton");
                const icon = document.querySelector(".addWorkoutIcon");
                const form = document.querySelector(".createWorkoutForm");
                const closeIcon = document.querySelector(".closeIcon");
                if (!this.dialogCreate) {
                    gsap.set(icon, { opacity: "0", fontSize: "0px" });
                    timeline.fromTo(
                        div,
                        { width: "50px", height: "50px", cursor: "pointer" },
                        { width: "100%", height: "100%", cursor: "default" }
                    );
                    timeline.fromTo(
                        form,
                        { width: "0px", height: "0px", padding: "0px" },
                        { width: "100%", height: "100%", padding: "20px" },
                        "<"
                    );
                    timeline.to(
                        closeIcon,
                        { opacity: "1", fontSize: "20px", cursor: "pointer" },
                        "<"
                    );
                    this.dialogCreate = !this.dialogCreate;
                } else {
                    gsap.set(closeIcon, { opacity: "0", fontSize: "0px", cursor: "default" });
                    timeline.fromTo(
                        div,
                        { width: "100%", height: "100%", cursor: "default" },
                        { width: "50px", height: "50px", cursor: "pointer" }
                    );
                    timeline.fromTo(
                        form,
                        { width: "100%", height: "100%", padding: "20px" },
                        { width: "0px", height: "0px", padding: "0px" },
                        "<"
                    );
                    timeline.to(icon, { opacity: "1", fontSize: "20px" }, "<");
                    this.dialogCreate = !this.dialogCreate;
                }
            },
            addWorkout() {},
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
    .actions {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    .addWorkoutButton {
        width: 50px;
        height: 50px;
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
    .cancelButton,
    .createWorkoutButton {
        background-color: #5271ff;
        color: white;
        border-radius: 20px;
        border: none;
        padding: 10px 15px;
        font-size: 1em;
        cursor: pointer;
        pointer-events: initial;
    }
    .createWorkoutForm {
        width: 0px;
        height: 0px;
        padding: 0px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    input,
    .newWorkoutDescription {
        display: flex;
        width: 80%;
        border: none;
        outline: none;
        background-color: white;
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 0px 0px 15px 5px #00000030;
    }
    input {
        padding: 10px 20px;
    }
    .newWorkoutDescription {
        height: 40%;
        padding: 20px;
        resize: none;
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
