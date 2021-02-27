<template>
  <div>
    <hr class="mb-4 opacity-20" />
    <div class="text-gray-400 font-normal">{{ this.projectData.client }}</div>
    <div class="text-gray-50 font-semibold text-lg mb-2">
      {{ this.projectData.name }}
    </div>
    <div class="text-gray-400 mb-4">{{ this.projectData.description }}</div>
    <div class="flex mb-8">
      <div v-if="projImagesComputed" class="mr-4 grid grid-cols-4">
        <div
          v-for="(image, i) in projImgThmbComputed"
          v-bind:key="i"
          class="bg-cover bg-left-top w-48 h-48"
          v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
      </div>
      <div v-if="projVideosComputed">
        <div v-for="(video, i) in projVideosComputed" v-bind:key="i">
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
    return {};
  },
  computed: {
    projImgThmbComputed() {
      if (this.projectData.assets.images) {
        var urlList = [];
        this.projectData.assets.images.forEach((element) => {
          urlList.push("/port/" + element.slice(0, -4) + "_thmb.jpg");
        });
        return urlList;
      } else {
        return false;
      }
    },
    projImgThmbComputedObj() {
      if (this.projectData.assets.images) {
        var imgObjList = [];
        this.projectData.assets.images.forEach((element) => {
          var obj = {
            src: "/port/" + element,
            thumbnail: "/port/" + element.slice(0, -4) + "_thmb.jpg",
            thumbnailWidth: "200px",
            thumbnailHeight: "200px",
          };
          imgObjList.push(obj);
        });
        return imgObjList;
      } else {
        return false;
      }
    },
    projImagesComputed() {
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
    projVideosComputed() {
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
