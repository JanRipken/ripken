<!-- @format -->

<template>
    <div>
        <b-container fluid class="cont-1">
            <b-row class="">
                <b-col class="text-center">
                    <div>
                        <img class="img-me " src="../assets/bilder/ich_Arbeitstisch.jpg" />
                    </div>
                </b-col>
                <b-col class="cont-1-col-2">
                    <div>
                        <div class="oben1">
                            Bring Passion to
                        </div>
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
                                href="CV/Lebenslauf.pdf"
                                class="btn-rounded-white"
                                >CV Download
                            </a>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <button class="down" @click="scrollTo('#scroll-about')">
                        <p>READ MORE</p>
                        <div style="top: -20px;">
                            <img width="35%" src="../assets/down-vec.svg" />
                        </div>
                        <div style="top: -60px;">
                            <img width="35%" src="../assets/down-vec.svg" />
                        </div>
                    </button>
                </b-col>
            </b-row>
        </b-container>
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
                    {
                        title: 'Python Bootcamp',
                        text: 'Udemy',
                        date: 'August 2021',
                        repo: 'certificates/Python-Grundkurs.pdf',
                    },
                    {
                        title: 'Learning Web Techniques, Part 1: HTML',
                        text: 'LinkedIn Learning',
                        date: 'September 2021',
                        repo:
                            'certificates/Abschlusszertifikat_Webtechniken lernen Teil 1 HTML.pdf',
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

.cont-1 {
    margin-top: 15vh;
}
.cont-1-col-2 {
    margin-bottom: 20%;
    margin-left: 10%;
}
.img-me {
    width: 60%;
    height: 60%;
    position: relative;
    left: calc(30%);
}

.oben1 {
    font-size: 3vw;
}
.oben2 {
    font-weight: bolder;
    font-size: 3vw;
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
    font-size: 2.5vw;
    margin-top: 40px;
}

.list {
    font-size: 1.2vw;
    margin-top: 30px;
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
    top: calc(100% - 130px);

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

@media screen and (max-height: 750px), screen and (max-width: 690px) {
    .img-me > img {
        width: 60%;
        height: 60%;
        position: relative;
        left: calc(50% - 50px);
    }
}
</style>
