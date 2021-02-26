<template>
  <div>
    <hr class="mb-4 opacity-20" />
    <div class="text-gray-400 font-normal">{{ this.projectData.client }}</div>
    <div class="text-gray-50 font-semibold text-lg mb-2">
      {{ this.projectData.name }}
    </div>
    <div class="text-gray-400 mb-4">{{ this.projectData.description }}</div>
    <div class="flex mb-8">
      <div v-if="projImages" class="w-full md:w-1/2 mr-4">
        <div
          v-for="(image, i) in projImagesComputed"
          v-bind:key="i"
          class="mb-4"
        >
          <img :src="image" class="img-fluid" :key="i" />
        </div>
      </div>
      <div v-if="projVideos" class="w-full md:w-1/2">
        <div
          v-for="(video, i) in projVideosComputed"
          v-bind:key="i"
          class="mb-4"
        >
          <youtube :video-id="video"></youtube>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectData"],
  data() {
    return {
      projImages: [
        "/port/APERVITA_DDSP_001.jpg",
        "/port/APERVITA_DDSP_002.jpg",
        "/port/APERVITA_DDSP_003.jpg",
      ],
      projVideos: [],
    };
  },
  computed: {
    projImagesComputed() {
      if (this.projectData.assets.images) {
        var urlList = [];
        this.projectData.assets.images.forEach((element) => {
          urlList.push("/port/" + element);
        });
        return urlList;
      } else {
        return this.projectData.assets.images;
      }
    },
    projVideosComputed() {
      if (this.projectData.assets.videos) {
        var urlList = [];
        this.projectData.assets.videos.forEach((element) => {
          urlList.push(element.videoid);
        });
        return urlList;
      } else {
        return this.projectData.assets.videos;
      }
    },
  },
};
</script>
