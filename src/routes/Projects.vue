<!-- @format -->

<template>
  <div class="projects">
    <h1 class="page-header">PROJECTS</h1>
    <b-container class="projects-container">
      <Project
        v-for="p in projects"
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
        <br />Take a look at my GitHub profile, where I host the code of the
        most of my projects.
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
