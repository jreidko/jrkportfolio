<template>
  <div>
    <pre>{{ this.projects }}</pre>
  </div>
</template>

<script>
import portfolio from "@/assets/portfolio.json";
export default {
  data() {
    return {
      projects: portfolio.projects,
    };
  },
};
</script>
