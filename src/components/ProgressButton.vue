<template>
    <button class="btn btn-lg d-block w-100"
        :class="{ 'btn-primary': !moving, 'btn-outline-primary': moving, 'progress-button': moving}"
        @click="moving=true"
        :disabled="moving"
        :style="{ 'background-position': 100-progress + '% 100%' }"
    >
        <span v-if="!moving">
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
    data() {
        return {
            moving: false
        }
    },
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
