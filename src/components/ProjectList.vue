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
      <div>
        <hr class="mb-4 opacity-20" />
        <div class="text-gray-400 font-normal mb-1">Retailer.Space</div>
        <div class="text-gray-50 font-semibold text-lg mb-2">
          Commercial Real Estate Brokerage Platform
        </div>
        <div class="text-gray-400 mb-4 max-w-screen-md">
          Retailer.Space is a broker, broker team, and client collaboration tool
          for commercial real estate. The retailer.space platform allows you to
          collect data in a centralized place to discover market insights, share
          listings, and collaborate with your team and clients.
        </div>
        <div class="flex flex-wrap mb-8">
          <a target="_blank" href="https://retailer.space/" class="mr-2">
            <div
              class="bg-cover bg-center w-44 h-44 m-2 shadow-lg rounded-md"
              v-bind:style="{
                backgroundImage: 'url(/port/retailerspace-01_thmb.jpg)'
              }"
            ></div>
          </a>
          <a
            target="_blank"
            href="https://www.figma.com/proto/zYYrdNVAnmBhRvLRL1c4aI/Retailer.Space-v3?node-id=3%3A726&viewport=1144%2C444%2C0.03&scaling=contain&starting-point-node-id=244%3A7090"
            class="mr-2"
          >
            <div
              class="bg-cover bg-left-top w-44 h-44 m-2 shadow-lg rounded-md"
              v-bind:style="{
                backgroundImage: 'url(/port/retailerspace-02_thmb.jpg)'
              }"
            ></div>
          </a>
          <a
            target="_blank"
            href="https://www.figma.com/proto/zYYrdNVAnmBhRvLRL1c4aI/Retailer.Space-v3?node-id=3%3A726&viewport=1144%2C444%2C0.03&scaling=contain&starting-point-node-id=244%3A7115"
            class="mr-2"
          >
            <div
              class="bg-cover bg-left-top w-44 h-44 m-2 shadow-lg rounded-md"
              v-bind:style="{
                backgroundImage: 'url(/port/retailerspace-03_thmb.jpg)'
              }"
            ></div>
          </a>
        </div>
      </div>
      <project
        class="h-full"
        v-for="(project, i) in projectListMain"
        v-bind:key="'a' + i"
        v-bind:projectData="project"
      >
      </project>
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
