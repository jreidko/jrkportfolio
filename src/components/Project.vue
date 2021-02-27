<template>
  <div>
    <hr class="mb-4 opacity-20" />
    <div class="text-gray-400 font-normal">{{ this.projectData.client }}</div>
    <div class="text-gray-50 font-semibold text-lg mb-2">
      {{ this.projectData.name }}
    </div>
    <div class="text-gray-400 mb-4">{{ this.projectData.description }}</div>
    <div class="flex mb-8">
      <div v-if="projectImages" class="mr-4">
        <silent-box :gallery="projectImages"></silent-box>
      </div>
      <div v-if="projectVideosArray">
        <div
          v-for="(video, i) in projectVideosArray"
          v-bind:key="i"
          class="mb-4"
        >
          <youtube :video-id="video"></youtube>
        </div>
        <silent-box :gallery="images">
          <h2 class="mb-2">Gallery</h2>
          <template v-slot:silentbox-item="{ silentboxItem }">
            <p>{{ silentboxItem.thumbnail }}</p>
          </template>
        </silent-box>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectData"],
  data() {
    return {
      images: [
        {
          src: "/port/APERVITA_DDSP_001.jpg",
          thumbnail: "/port/APERVITA_DDSP_001_thmb.jpg",
          thumbnailWidth: 200,
        },
        {
          src: "/port/APERVITA_DDSP_002.jpg",
          thumbnail: "/port/APERVITA_DDSP_002_thmb.jpg",
          thumbnailWidth: 200,
        },
        {
          src: "/port/APERVITA_DDSP_003.jpg",
          thumbnail: "/port/APERVITA_DDSP_003_thmb.jpg",
          thumbnailWidth: 200,
        },
      ],
    };
  },
  computed: {
    projectImages() {
      if (this.projectData.assets.images) {
        var imgObjList = [];
        this.projectData.assets.images.forEach((element) => {
          var obj = {
            src: "/port/" + element,
            thumbnail: "/port/" + element.slice(0, -4) + "_thmb.jpg",
            thumbnailWidth: 200,
          };
          imgObjList.push(obj);
        });
        return imgObjList;
      } else {
        return false;
      }
    },
    projectImagesArray() {
      if (this.projectData.assets.images) {
        var urlList = [];
        this.projectData.assets.images.forEach((element) => {
          urlList.push("/port/" + element);
        });
        return urlList;
      } else {
        return false;
      }
    },
    projectVideosArray() {
      if (this.projectData.assets.videos) {
        var urlList = [];
        this.projectData.assets.videos.forEach((element) => {
          urlList.push(element.videoid);
        });
        return urlList;
      } else {
        return false;
      }
    },
  },
};
</script>
