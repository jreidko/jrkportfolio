<template>
  <div>
    <div v-if="!portAuth">
      <label
        class="block text-1xl text-semibold mb-4 max-w-screen-sm text-gray-400"
      >
        To view the potfolio please enter the password
      </label>
      <input
        type="text"
        placeholder="Password"
        class="px-6 py-3 mb-4 mr-4 rounded-md text-black bg-white focus:outline-none"
        v-model="enteredPassword"
        v-on:keyup.enter="processPassword"
      />
      <button
        class="px-6 py-3 mb-4 rounded-md text-black bg-white opacity-30 hover:opacity-100 focus:outline-none"
        @click="processPassword"
      >
        Submit
      </button>
      <div v-if="passwordWrong" class="italic text-gray-500 text-sm mr-2">
        Sorry that is not the password, please try again.
      </div>
    </div>
    <div v-else>
      <project
        class="h-full"
        v-for="(project, i) in projectListMain"
        v-bind:key="'a' + i"
        v-bind:projectData="project"
      ></project>
      <project
        class="h-full"
        v-for="(project, i) in projectListSecondary"
        v-bind:key="'b' + i"
        v-bind:projectData="project"
      ></project>
    </div>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'
import jason from '@/assets/jason.json'
export default {
  data() {
    return {
      portAuth: false,
      projectListMain: jason.projects.slice(0, 4),
      projectListSecondary: jason.projects.slice(4),
      secondary: false,
      enteredPassword: '',
      passwordWrong: false
    }
  },
  components: {
    Project
  },
  methods: {
    processPassword() {
      if (this.enteredPassword === 'takealook') {
        this.portAuth = true
        this.passwordWrong = false
      } else {
        this.passwordWrong = true
      }
    }
  }
}
</script>
