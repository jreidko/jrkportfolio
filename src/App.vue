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
    <portfolio class="p-8 bg-gray-700 rounded-md shadow-md mb-4"></portfolio>
    <h2 class="text-2xl text-semibold mb-4">Resume</h2>
    <resume class="p-8 bg-gray-700 rounded-md shadow-md mb-4"></resume>
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import Portfolio from "./components/Portfolio.vue";
import Resume from "./components/Resume.vue";
export default {
  components: {
    Resume,
    Portfolio,
  },
};
</script>