<template>
  <div class="bg-gray-700">
    <h1>Jason Koerner</h1>
    <h2>Product & Experience Design</h2>
    <p>
      After beginning my career in advertising as a traditional art director i
      was slowly drawn to the blinking lights of the internet and interactive
      media. Since that time i have started my own interactive design agency,
      Schema Studios and worked at numerous interactive and advertising
      agencies. I have worked on interactive projects for Nike, McDonald’s,
      MSNBC, American Airlines, Discover Card, Anheuser-Busch, State Farm, Dow,
      Sharpie, Boeing, KFC and many others.
    </p>
    <resume></resume>
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import Resume from "./components/Resume.vue";
export default {
  components: {
    Resume,
  },
};
</script>