<template>
  <button class="btn btn-lg d-block w-100" type="button" v-on:click="$emit('click')"
    v-bind:class="{ 'btn-primary': progress == null, 'btn-outline-primary': progress != null, 'progress-button': progress != null}"
    v-bind:disabled="progress != null"
    v-bind:style="{ 'background-position': 100-progress + '% 100%' }">
    <span v-if="progress == null">
      Upload
    </span>
    <span v-else>
      {{ progress }}%
    </span>
  </button>
</template>

<script>
export default {
	name: "Progress-Button",
  props: ['progress']
};
</script>

<style scoped>
.progress-button {
    background: linear-gradient(to right, var(--bs-primary) 50%, white 50%);
    background-size: 200% 100%;
    transition: all 1s ease-in-out;
}
</style>
