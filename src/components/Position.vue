<template>
  <div class="max-w-screen-md">
    <hr class="mb-4 opacity-20" />
    <div class="text-gray-50 font-semibold text-lg mb-2">
      {{ this.positionData.position }}
      <span class="ml-1 italic text-sm font-normal text-gray-500">
        {{ this.positionData.company }} /
        <span>{{ this.positionData.dates }}</span>
      </span>
    </div>
    <div class="text-gray-300 mb-2">{{ this.positionData.description }}</div>
    <div class="italic text-gray-500 text-sm mb-2">
      {{ this.positionData.aside }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["positionData"],
};
</script>