<!-- @format -->

<template>
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div class="main-header-bild"></div>

        <div class="main-header-text">
            <b-container fluid class="header-cont">
                <div class="logo mx-auto text-left">
                    <div class="text">
                        <div class="oben1">Bring Passion to</div>
                        <div class="oben2">everything i do</div>
                        <div class="list">
                            <ul>
                                <li>Backend Programming</li>
                                <li>Network Programming</li>
                                <li>Web Design</li>
                            </ul>
                        </div>
                        <div class="Download">
                            <a
                                href="CV/Lebenslauf_website.pdf"
                                class="btn-rounded-white"
                                >CV Download
                            </a>
                        </div>
                    </div>
                    <button class="down" @click="scrollTo('#scroll-about')">
                        <p>READ MORE</p>
                        <div style="top: -20px;">
                            <img width="80" src="../assets/down-vec.svg" />
                        </div>
                        <div style="top: -60px;">
                            <img width="80" src="../assets/down-vec.svg" />
                        </div>
                    </button>
                </div>
            </b-container>
        </div>
        <a id="scroll-about"></a>
        <b-container id="about" class="pad">
            <p class="mt-5"></p>
            <div>
                <div class="education">
                    Education
                </div>
                <hr size="8" width="100%" color="white" />
                <b-container class="resume-container">
                    <Project
                        v-for="r in resume.body1"
                        :key="r.title"
                        :title="r.title"
                        :text="r.text"
                        :date="r.date"
                        class="mx-3"
                    />
                </b-container>
            </div>
            <div class="exp">
                <div class="experience">
                    Experience
                </div>
                <hr size="8" width="100%" color="white" />
                <b-container class="resume-container">
                    <Project
                        v-for="r in resume.body2"
                        :key="r.title"
                        :title="r.title"
                        :text="r.text"
                        :date="r.date"
                        class="mx-3"
                    />
                </b-container>
            </div>
            <div class="exp">
                <div class="experience">
                    Certificates
                </div>
                <hr size="8" width="100%" color="white" />
                <b-container class="resume-container">
                    <Project
                        v-for="r in resume.body3"
                        :key="r.title"
                        :title="r.title"
                        :text="r.text"
                        :date="r.date"
                        :repo="r.repo"
                        class="mx-3"
                    />
                </b-container>
            </div>
        </b-container>
        <Footer />
    </div>
</template>

<script>
/** @format */

import {RouterEventBus} from '../js/router-eventbus';
import Project from '../components/Project';

export default {
    name: 'Resume',

    components: {
        Project,
    },

    props: {
        msg: String,
    },

    data() {
        return {
            resume: {
                body1: [
                    {
                        title: 'Ammerland vocational schools',
                        text:
                            'Trained motor vehicle mechatronics technician in the field of passenger car technology',
                        date: 'Sept 2014 - Feb 2018',
                    },
                    {
                        title: 'Ammerland vocational schools ',
                        text:
                            'Technical college - technology - focus on mechatronics',
                        date: 'Sept 2018 - Aug 2019',
                    },
                    {
                        title: 'Jade Hochschule Wilhelmshaven',
                        text:
                            'Mechanical engineering B. Eng. with a specialization in Cyber-Physical Systems',
                        date: 'Sept 2019 - Present',
                    },
                ],
                body2: [
                    {
                        title: 'Hrmony Gmbh',
                        text: 'Backoffice Operations',
                        date: 'September 2019 – April 2021',
                    },
                    {
                        title: 'Jade Hochschule Wilhelmshaven',
                        text:
                            'Student assistant in the field of high-level language programming and numerics',
                        date: 'April 2021 – Till now',
                    },
                ],
                body3: [
                    {
                        title: 'virtualization with docker',
                        text: 'LinkedIn Learning',
                        date: 'August 2021',
                        repo:
                            'certificates/Abschlusszertifikat_Virtualisierung mit Docker.pdf',
                    },
                ],
            },
        };
    },

    methods: {
        scrollTo(el) {
            var elem = this.$el.querySelector(el);
            if (elem) elem.scrollIntoView();
        },
    },

    mounted() {
        RouterEventBus.$emit('mounted', this.$options.name);
    },
};
</script>

<style scoped>
.pad {
    padding: 50px 0px;
}
.main-header-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    padding: 80px;
}
.main-header-bild {
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

.text {
    float: right;

    margin-bottom: 10em;
}

.oben1 {
    font-size: 300%;
}
.oben2 {
    font-weight: bolder;
    font-size: 300%;
}
.btn-rounded-white {
    display: inline-block;
    color: #fff;
    padding: 15px 25px;
    border: 3px solid #fff;
    border-radius: 30px;
    transition: 0.5s ease all;
}
.btn-rounded-white:hover {
    color: #3498db;
    background: #fff;
    text-decoration: none;
}

.Download {
    font-size: 40px;
    padding: 20px 0px;
}

.list {
    font-size: 150%;
    padding: 30px 0px;
}

.education {
    display: inline-block;
    color: #fff;
    padding: 15px 50px;
    border: 3px solid #fff;
    transition: 0.5s ease all;
    font-size: 30px;
}

.experience {
    display: inline-block;
    color: #fff;
    padding: 15px 50px;
    border: 3px solid #fff;
    transition: 0.5s ease all;
    font-size: 30px;
}

.down {
    position: absolute;
    left: calc(50% - 50px);
    top: calc(100% - 150px);
    margin-top: auto;
    color: white !important;
}

.down > div {
    position: relative;
}

.resume-container {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}
.exp {
    padding: 50px 0px;
}

@media screen and (max-width: 690px) {
}
</style>
