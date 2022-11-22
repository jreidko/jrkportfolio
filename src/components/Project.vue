<template>
  <div>
    <hr class="mb-4 opacity-20" />
    <div class="text-gray-400 font-normal mb-1">
      {{ this.projectData.client }}
    </div>
    <div class="text-gray-50 font-semibold text-lg mb-2">
      {{ this.projectData.name }}
    </div>
    <div class="text-gray-400 mb-4 max-w-screen-md" v-html="this.projectData.description"></div>
    <div class="flex mb-8">
      <div v-if="projectImages" class="mr-4">
        <silent-box :gallery="projectImages" :preview-count="5">
          <template v-slot:silentbox-item="{ silentboxItem }">
            <div class="bg-cover bg-left-top w-44 h-44 m-2 shadow-lg rounded-md" v-bind:style="{
              backgroundImage: 'url(' + silentboxItem.thumbnail + ')'
            }"></div>
          </template>
          <template v-if="projectVideosArray">
            <div v-for="(video, i) in projectVideosArray" v-bind:key="i" class="silentbox-item">
              <youtube :video-id="video" :width="320" :height="180" class="m-2 shadow-lg rounded-md"></youtube>
            </div>
          </template>
        </silent-box>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['projectData'],
  data() {
    return {
      images: [
        {
          src: '/port/APERVITA_DDSP_001.jpg',
          thumbnail: '/port/APERVITA_DDSP_001_thmb.jpg',
          thumbnailWidth: 200
        }
      ]
    }
  },
  computed: {
    projectImages() {
      if (this.projectData.assets.images) {
        var imgObjList = []
        this.projectData.assets.images.forEach((element) => {
          var obj = {
            src: '/port/' + element,
            thumbnail: '/port/' + element.slice(0, -4) + '_thmb.jpg',
            thumbnailWidth: 200
          }
          imgObjList.push(obj)
        })
        return imgObjList
      } else {
        return false
      }
    },
    projectImagesArray() {
      if (this.projectData.assets.images) {
        var urlList = []
        this.projectData.assets.images.forEach((element) => {
          urlList.push('/port/' + element)
        })
        return urlList
      } else {
        return false
      }
    },
    projectVideosArray() {
      if (this.projectData.assets.videos) {
        var urlList = []
        this.projectData.assets.videos.forEach((element) => {
          urlList.push(element.videoid)
        })
        return urlList
      } else {
        return false
      }
    }
  }
}
</script>
