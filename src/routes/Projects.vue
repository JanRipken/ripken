<!-- @format -->

<template>
    <div class="projects">
        <h1 class="page-header">PROJECTS</h1>
        <b-container class="projects-container">
            <Project
                v-for="p in projects.body"
                :key="p.title"
                :title="p.title"
                :text="p.text"
                :repo="p.repo"
                :langs="p.langs"
                class="mx-3"
            />
        </b-container>
        <b-container>
            <p class="mt-5 text-center">
                Of course, these are not all my projects.
                <br />Take a look at my GitHub profile, where I host the code of
                the most of my projects.
            </p>
            <div class="mt-4 d-flex">
                <a
                    class="mx-auto gh-link"
                    href="https://github.com/JanRipken"
                    target="_blank"
                >
                    <img src="../assets/gh-logo-120x120.png" />
                </a>
            </div>
        </b-container>
    </div>
</template>

<script>
/** @format */

import Project from '../components/Project';
import {RouterEventBus} from '../js/router-eventbus';

export default {
    name: 'Projects',

    components: {
        Project,
    },

    props: {
        msg: String,
    },

    data() {
        return {
            projects: {
                body: [
                    {
                        title: 'CS-Animations',
                        text:
                            'Mathematical animations using the Python library Manim',
                        repo: 'https://github.com/JanRipken/cseanimated',
                        langs: ['Python'],
                    },
                    {
                        title: 'Sudoku',
                        text: 'A game of Sudoku with solving Algo and GUI',
                        repo: 'https://github.com/JanRipken/Sudoku',
                        langs: ['Python'],
                    },
                    {
                        title: 'Die-Nase',
                        text: 'A simple Python Discord Bot with a few Geeks',
                        repo: 'https://github.com/JanRipken/Die-Nase',
                        langs: ['Python'],
                    },
                    {
                        title: 'Zahnrad-Designer',
                        text:
                            'A C# Desktop App for Automaticaly designing gears in Catia V5',
                        repo: 'https://github.com/JanRipken/Zahnrad-Designer',
                        langs: ['C#'],
                    },
                ],
            },
        };
    },

    mounted() {
        RouterEventBus.$emit('mounted', this.$options.name);
    },
};
</script>

<style scoped>
/** @format */

p {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
}

.projects {
    margin-top: 120px;
}

.page-header {
    margin-bottom: 50px;
}

.projects-container {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}

.gh-link {
    opacity: 0.9;

    transition: all 0.25s ease-in-out;
}

.gh-link:hover {
    opacity: 1;
    transform: scale(1.05);
}

@media screen and (max-width: 690px) {
}
</style>
