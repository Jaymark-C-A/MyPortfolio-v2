<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-5 overflow-auto p-1 px-xl-2" style="max-height: 100vh;">
        <profile />
      </div>
      <div class="col-md-7 overflow-auto p-1 px-xl-2" style="max-height: 100vh;">
        <ProjectsSection />
        <contact />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import profile from "./components/profile.vue"
import ProjectsSection from "./components/ProjectsSection.vue";
import modal from "./components/modal.vue";

export default {
  name: "App",
  components: {
    profile,
    ProjectsSection,
    modal,
  },
};
</script>

<style>
html, body {
  overflow-x: hidden;
}
  body{
    font-family: Arial, Helvetica, sans-serif;
    background: #16213E;
    /* background: rgb(19, 19, 97); */
    /* background-color: #000; */
  }
  .fade-right {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  .fade-right.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .fade-left {
    opacity: 0;
    transform: translateX(50px); /* Offset to the right */
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  .fade-left.visible {
    opacity: 1;
    transform: translateX(0); /* Bring to original position */
  }
  .overflow-auto::-webkit-scrollbar {
    display: none;
  }
  .fade-right {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  .fade-right.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .fade-left {
    opacity: 0;
    transform: translateX(50px); /* Offset to the right */
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  .fade-left.visible {
    opacity: 1;
    transform: translateX(0); /* Bring to original position */
  }
</style>
