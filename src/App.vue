<template>
  <div class="">
    <div class="p-12 text-gray-400">
      <h1 class="text-3xl text-semibold mb-4 text-white">Jason Koerner</h1>
      <h3 class="text-1xl text-semibold mb-6 max-w-screen-sm text-gray-400">
        Hello! {{ jason.description }}
      </h3>
      <div class="mb-4 mr-2 inline-block">
        <a
          href="#"
          class="px-6 py-3 mr-4 mb-4 rounded-md text-black bg-white opacity-30 hover:opacity-100 inline-block"
          @click="resumeView = !resumeView"
          v-bind:class="{ 'opacity-100': resumeView }"
        >
          Resume
        </a>
        <a
          href="#"
          class="px-6 py-3 mr-4 mb-4 rounded-md text-black bg-white opacity-30 hover:opacity-100 inline-block"
          @click="portView = !portView"
          v-bind:class="{ 'opacity-100': portView }"
        >
          Portfolio
        </a>
        <a
          class="px-6 py-3 mr-4 mb-4 rounded-md text-black bg-white opacity-30 hover:opacity-100 inline-block"
          href="mailto:jreidko@gmail.com"
          >Contact</a
        >
      </div>
      <div class="mb-8 inline-block">
        <a href="https://www.linkedin.com/in/jreidko/" target="_blank">
          <svg
            class="inline-block mr-6 fill-current text-white opacity-30 hover:opacity-100 relative bottom-1"
            width="32px"
            height="32px"
            viewBox="0 0 100 100"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.75 14.4167C20.75 20.1708 16.125 24.8333 10.4167 24.8333C4.70833 24.8333 0.0833333 20.1708 0.0833333 14.4167C0.0833333 8.66667 4.70833 4 10.4167 4C16.125 4 20.75 8.66667 20.75 14.4167ZM20.8333 33.1667H0V99.8333H20.8333V33.1667ZM54.0917 33.1667H33.3917V99.8333H54.0958V64.8375C54.0958 45.3792 79.2167 43.7875 79.2167 64.8375V99.8333H100V57.6208C100 24.7875 62.825 25.9833 54.0917 42.1458V33.1667Z"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/s_p_a_c_e_and_nation/"
          target="_blank"
        >
          <svg
            class="inline-block mr-6 fill-current text-white opacity-30 hover:opacity-100 relative bottom-1"
            width="32px"
            height="32px"
            viewBox="0 0 100 100"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M88.4625 0H11.5375C5.16667 0 0 5.16667 0 11.5375V88.4542C0 94.8333 5.16667 100 11.5375 100H88.4667C94.8375 100 100 94.8333 100 88.4542V11.5375C100 5.16667 94.8375 0 88.4625 0V0ZM50 30.7708C60.6208 30.7708 69.2333 39.375 69.2333 50C69.2333 60.6208 60.6208 69.2333 50 69.2333C39.3792 69.2333 30.7708 60.6167 30.7708 50C30.7708 39.375 39.3792 30.7708 50 30.7708V30.7708ZM87.5 83.6583C87.5 85.7792 85.7792 87.5 83.65 87.5H16.35C14.2208 87.5 12.5 85.7792 12.5 83.6583V41.6667H20.4042C20.0375 42.9792 19.7667 44.3333 19.5708 45.7125C19.3625 47.1167 19.2333 48.5417 19.2333 50C19.2333 66.9958 33.0083 80.7708 50 80.7708C66.9917 80.7708 80.7667 66.9958 80.7667 50C80.7667 48.5417 80.6375 47.1167 80.4292 45.7167C80.2333 44.3375 79.9625 42.9833 79.5958 41.6708H87.5V83.6583V83.6583ZM87.5 25.4083C87.5 27.5292 85.7792 29.2542 83.65 29.2542H74.5917C72.4625 29.2542 70.7458 27.5292 70.7458 25.4083V16.3458C70.7458 14.2208 72.4625 12.5 74.5917 12.5H83.65C85.7792 12.5 87.5 14.2208 87.5 16.3458V25.4083Z"
            />
          </svg>
        </a>
        <a
          href="https://www.thingiverse.com/spaceandnation/designs"
          target="_blank"
        >
          <svg
            class="inline-block mr-6 fill-current text-white opacity-30 hover:opacity-100 relative bottom-1"
            width="32px"
            height="32px"
            viewBox="0 0 100 100"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50 100C22.3857 100 0 77.6143 0 50C0 22.3857 22.3857 0 50 0C77.6143 0 100 22.3857 100 50C100 77.6143 77.6143 100 50 100ZM56.391 40.2256V83.0826H43.609V40.2256H25.5641V27.4434H74.4361V40.2254L56.391 40.2256Z"
            />
          </svg>
        </a>
      </div>
      <div v-if="resumeView" class="h-full">
        <position
          class="mb-6"
          v-for="(position, i) in positionList"
          v-bind:key="'b' + i"
          v-bind:positionData="position"
        ></position>
        <div class="text-gray-50 font-semibold text-lg mt-2 mb-2">Awards</div>
        <award
          class="px-2 py-1 mr-4 mb-4 rounded-md text-black bg-white opacity-60"
          v-for="(award, i) in awardList"
          v-bind:key="'c' + i"
          v-bind:awardData="award"
        ></award>
        <a
          href="/jason_koerner_resume.pdf"
          target="_blank"
          class="hover:text-white block mt-4"
          >For a PDF version of my resume click here.</a
        >
      </div>
      <div v-if="portView">
        <project-list />
      </div>
    </div>
    <div
      class="bg-cover bg-center fixed top-0 left-0 w-full h-full opacity-10"
      v-bind:style="{ backgroundImage: 'url(' + bgsImgURL + ')' }"
      style="z-index: -1000"
    ></div>
  </div>
</template>

<script>
import 'tailwindcss/tailwind.css'
import ProjectList from './components/ProjectList.vue'
import Position from './components/Position.vue'
import Award from './components/Award.vue'
import jason from './assets/jason.json'
export default {
  data() {
    return {
      lastRun: 'aug 27 2023',
      portView: false,
      resumeView: false,
      jason: jason,
      projectList: jason.projects,
      positionList: jason.positions,
      awardList: jason.awards
    }
  },
  computed: {
    bgsImgURL() {
      var rNum = Math.floor(Math.random() * 10) + 1
      return '/bgs/' + rNum + '.jpg'
    }
  },
  watch: {
    resumeView() {
      if (this.resumeView == true) {
        this.portView = false
      }
    },
    portView() {
      if (this.portView == true) {
        this.resumeView = false
      }
    }
  },
  components: {
    Position,
    ProjectList,
    Award
  }
}
</script>