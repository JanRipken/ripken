<!-- @format -->

<template>
  <div>
    <div class="main-header-bild"></div>

    <div class="main-header-text">
      <b-container fluid class="header-cont">
        <div class="logo mx-auto text-center">
          <h1 class="font-montserrat mt-3 mb-1">Ripken</h1>
          <h2 class="font-montserrat">ENGINEERING</h2>
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
    <b-container id="about" class="content mt-6">
      <h1 class="page-header">ABOUT ME</h1>
      <p class="mt-5">
        <br />
        <br />
        I am {{ calculateAge(new Date('1997-09-01')) }} years old and a
        passionate developer and coder since around 2019. 've started creating
        small tools using .NET (C#) and Windows Presentation Foundation. Also,
        some Bots using the Discord API to dive deeper into Python and object
        oriented programming in general.
        <br />
        <br />Currently, I am a student at the jade University of Applied
        Sciences with a major in mechanical engineering and specialization in
        Cyber-physical systems and work as a Student assistant for high level
        language programming. At the moment i'm working on creating CSE videos
        using the Python Library "Manim"
        <br />
        <br />My interests are specifically in DevOps tools like docker and
        CI/CD (TravisCI,GitLab Pipelines,Jenkins,Github Actions) as well as
        setting up, maintaining and configuring Linux servers (mostly arch and
        debian)
        <br />
        <br />I am also currently trying to expand my skills in the fields of
        cybersecurity as well as a bit of frontend development like this website
      </p>
    </b-container>
    <Footer />
  </div>
</template>

<script>
/** @format */

import { RouterEventBus } from '../js/router-eventbus';

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

a {
  text-decoration: underline;
}

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
  padding: 20vh 0px;
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
  top: calc(100% - 150px);
  margin-top: auto;
  color: white !important;
}

.down > div {
  position: relative;
}

.mt-6 {
  margin-top: 100px;
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
