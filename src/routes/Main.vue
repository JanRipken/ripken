<!-- @format -->

<template>
    <div>
        <div class="main-header-bild"></div>

        <div class="main-header-text">
            <b-container fluid class="header-cont">
                <div class="logo mx-auto text-logo">
                    <img
                        src="../assets/meinAvatar.svg"
                        width="200"
                        height="230"
                    />
                    <h1 class="font-montserrat mt-3 mb-1">Jan Ripken</h1>
                    <h2 class="font-montserrat">ENGINEERING STUDENT</h2>
                    <button class="down" @click="scrollTo('#scroll-about')">
                        <p>READ MORE</p>
                        <div style="top: -20px;">
                            <img width="60" src="../assets/down-vec.svg" />
                        </div>
                        <div style="top: -60px;">
                            <img width="60" src="../assets/down-vec.svg" />
                        </div>
                    </button>
                </div>
            </b-container>
        </div>
        <a id="scroll-about"></a>
        <b-container id="about" class="content mt-6">
            <h1 class="page-header">ABOUT ME</h1>
            <b-row>
                <b-col sm="6">
                    <img
                        class="img-aboutmeTop"
                        src="../assets/meinAvatar.svg"
                    />
                </b-col>
                <b-col>
                    <span class="text-aboutmeTop">
                        I am {{ calculateAge(new Date('1997-09-01')) }} years
                        old and a passionate developer and coder since around
                        2019. I've started creating small tools using .NET (C#)
                        and Windows Presentation Foundation. Also, some Bots
                        using the Discord API to dive deeper into Python and
                        object oriented programming in general.
                        <br />
                        <br />
                        Before that, I trained as an automotive mechatronics
                        technician because machines have always fascinated me,
                        but it was only through my studies that I discovered my
                        passion for programming and designing
                        <br />
                        <br />Currently, I am a student at the jade University
                        of Applied Sciences with a major in mechanical
                        engineering and specialization in Cyber-physical systems
                        and work as a Student assistant for high level language
                        programming.

                        <br />
                        <br />My interests are specifically in DevOps tools like
                        docker and CI/CD (TravisCI,GitLab
                        Pipelines,Jenkins,Github Actions) as well as setting up,
                        maintaining and configuring Linux servers (mostly arch
                        and debian)
                        <br />
                        <br />I am also currently trying to expand my skills in
                        the fields of cybersecurity as well as a bit of frontend
                        development like this website
                    </span>
                </b-col>
            </b-row>
            <b-row style="text-align: center;">
                <span class="text-aboutmeBottom">
                    <br />
                    <br />At the moment i'm working on creating CSE videos using
                    the Python Library "Manim"

                    <div class="yt-iframe d-flex mt-5">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/TTC7OvYXcyk"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </span>
            </b-row>
        </b-container>
        <Footer />
    </div>
</template>

<script>
/** @format */

import {RouterEventBus} from '../js/router-eventbus';

export default {
    name: 'Main',

    props: {
        msg: String,
    },

    components: {},

    methods: {
        scrollTo(el) {
            var elem = this.$el.querySelector(el);
            if (elem) elem.scrollIntoView();
        },

        calculateAge(birthday) {
            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
    },

    mounted() {
        RouterEventBus.$emit('mounted', this.$options.name);
    },
};
</script>

<style scoped>
/** @format */

.main-header-bild {
    background-image: url('../assets/main.jpg');
    filter: blur(8px);
    -webkit-filter: blur(3px);
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform 0.25s ease-in-out;
}
.main-header-text {
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.7); /* Black w/opacity/see-through */
    color: white;
    font-weight: bolder;
    border: 3px solid #f1f1f1;
    position: absolute;
    top: 50%;

    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    padding: 80px;
}

.header-cont {
    padding: 120px 0px;
}

.text-logo {
    text-align: center;
}

.logo {
    opacity: 0.9;
}

.logo > h1 {
    font-weight: 300;
    font-size: 80px;
}

.logo > h2 {
    font-weight: 200;
    font-size: 27px;
}

.down {
    position: absolute;
    left: calc(50% - 50px);
    top: calc(100% - 110px);
    margin-top: auto;
    color: white !important;
}

.down > div {
    position: relative;
}

.mt-6 {
    margin-top: 100px;
}

h1 {
    margin-bottom: 70px;
}

.img-aboutmeTop {
    width: 100%;
}

.text-aboutmeTop {
    float: right;
    margin-top: 40px;
}

.text-aboutmeBottom {
    margin-top: 100px;
    margin-left: 5%;
}

.yt-iframe > iframe {
    max-width: 100%;
    width: 900px;
    height: 510px;
    border: 0;
    margin: 0px auto;
}

@media screen and (max-height: 750px), screen and (max-width: 690px) {
    .logo > img {
        width: 150px;
        height: 150px;
    }

    .logo > h1 {
        font-weight: 300;
        font-size: 55px;
    }

    .logo > h2 {
        font-weight: 200;
        font-size: 19px;
    }
}
</style>
