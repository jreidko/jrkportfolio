<template>
  <div>
    <h1>Resume</h1>
    <p class="bg-gray-400">Stuff here</p>
    <pre>{{ this.jobs }}</pre>
    <pre>{{ this.awards }}</pre>
  </div>
</template>

<script>
import resume from "@/assets/resume.json";
export default {
  data() {
    return {
      jobs: resume.jobs,
      awards: resume.awards,
    };
  },
};
</script>
