<template>
  <div class="p-12 bg-gray-900 text-gray-400">
    <h1 class="text-3xl text-semibold text-white">Jason Koerner</h1>
    <h3 class="text-1xl text-semibold mb-4 text-white">
      Product & Experience Design
    </h3>
    <p class="mb-4">
      After beginning my career in advertising as a traditional art director i
      was slowly drawn to the blinking lights of the internet and interactive
      media. Since that time i have started my own interactive design agency,
      Schema Studios and worked at numerous interactive and advertising
      agencies. I have worked on interactive projects for Nike, McDonald’s,
      MSNBC, American Airlines, Discover Card, Anheuser-Busch, State Farm, Dow,
      Sharpie, Boeing, KFC and many others.
    </p>
    <h2 class="text-2xl text-semibold mb-4">Projects</h2>
    <project
      class="p-8 bg-gray-700 rounded-md shadow-md mb-4 overflow-hidden"
      v-for="(project, i) in projectList"
      v-bind:key="'a' + i"
      v-bind:projectData="project"
    ></project>
    <h2 class="text-2xl text-semibold mb-4">Resume</h2>
    <position
      class="p-8 bg-gray-700 rounded-md shadow-md mb-4 overflow-hidden"
      v-for="(position, i) in positionList"
      v-bind:key="'b' + i"
      v-bind:positionData="position"
    ></position>
    <h2 class="text-2xl text-semibold mb-4">Awards</h2>
    <award
      class="p-8 bg-gray-700 rounded-md shadow-md mb-4 overflow-hidden"
      v-for="(award, i) in awardList"
      v-bind:key="'c' + i"
      v-bind:awardData="award"
    ></award>
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import Project from "./components/Project.vue";
import Position from "./components/Position.vue";
import Award from "./components/Award.vue";
import portfolio from "@/assets/portfolio.json";
import resume from "@/assets/resume.json";
export default {
  data() {
    return {
      projectList: portfolio.projects,
      positionList: resume.positions,
      awardList: resume.awards,
    };
  },
  components: {
    Position,
    Project,
    Award,
  },
};
</script>